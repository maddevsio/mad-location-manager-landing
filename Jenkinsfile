#!groovy
 
try {
  node('docker') {
  // notifyBuild('STARTED')
 
    env.WORKSPACE = pwd()
    env.BUILD_TAG = "v.${env.BUILD_NUMBER}"
    env.REPO = 'mad-locations-manager'
    env.SERVICE = 'mad-locations-manager'
   // env.SERVICE_PARAMS = "--restart=always --log-driver=syslog --log-opt tag=docker/${env.REPO} -e VIRTUAL_HOST=mlm.maddevs.co -e VIRTUAL_PORT=80 -e LETSENCRYPT_HOST=mlm.maddevs.co -e LETSENCRYPT_EMAIL=admin@maddevs.co"
 
    stage 'Checkout'
    deleteDir()
    //checkout scm
        git branch: 'develop', credentialsId: 'c1ab7eac-20e8-4bc3-b5f1-3430f28badfb', url: 'git@gitlab.com:maddevs/mad-locations-manager.git'
    // Build image
    stage 'Build image'
      docker.withRegistry("${env.PRIVATE_REGISTRY}") {
        docker.build("${env.REPO}").push("${env.BUILD_TAG}")
        docker.build("${env.REPO}").push("latest")
 
        // Deploy image to staging
          stage 'Staging deploy'
          sh ''' eval $(docker-machine env --shell bash demo1.maddevs.co)
              docker rm -f $REPO || true'''
          sh '''eval $(docker-machine env --shell bash demo1.maddevs.co)
              docker run -d --name=$REPO --restart=always -e VIRTUAL_HOST=mlm.maddevs.co -e LETSENCRYPT_HOST=mlm.maddevs.co -e LETSENCRYPT_EMAIL=admin@maddevs.co hub.maddevs.co/$REPO:v.$BUILD_NUMBER
             '''
      } // docker.withRegistry
  } // node
} catch (e) {
    // If there was an exception thrown, the build failed
  currentBuild.result = 'FAILURE'
  throw e
} finally {
  notifyBuild(currentBuild.result)
}
 
def tagGitRepo () {
  env.BUILD_TAG = "v.${env.BUILD_NUMBER}"
  sshagent(['c1ab7eac-20e8-4bc3-b5f1-3430f28badfb']) {
    sh "git config user.email taxijenkins@gmail.com"
    sh "git config --global user.name TaxiJenkins"
    sh "git tag -l ${env.BUILD_TAG}"
    sh "git tag -a -f -m ${env.BUILD_URL} ${env.BUILD_TAG}"
    sh ("git -c core.askpass=true push git@gitlab.com:maddevs/${env.REPO}.git ${env.BUILD_TAG}")
  }
}
 
def notifyBuild(String buildStatus = 'STARTED') {
  buildStatus =  buildStatus ?: 'SUCCESS'
 
  // Default values
  def color = 'danger'
  def smile = ':wat: '
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"
 
  // Override default values based on build status
  if (buildStatus == 'STARTED') {
    color = '#c0c0c0'
    smile = ':ermygerd: '
  } else if (buildStatus == 'SUCCESS') {
    color = 'good'
    smile = ':gandalf: '
  } else if (buildStatus == 'UNSTABLE') {
    color = 'warning'
    smile = ':facepalm: '
  } else {
    color = 'danger'
    smile = ':wat: '
  }
 
  slackSend (color: color, message: smile + summary)
}
