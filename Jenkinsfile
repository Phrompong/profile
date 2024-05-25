pipeline {
  agent any
  stages {
    stage('Initial') {
      steps {
        sh "echo REACT_APP_SERVICE_URI=${REACT_APP_SERVICE_URI} >> .env"
        sh "ls -ltr"
        sh "cat .env"
        script {
          def packageJsonContent = readFile('package.json').trim()
          def jsonSlurper = new groovy.json.JsonSlurper()
          def packageJson = jsonSlurper.parseText(packageJsonContent)
          def version = packageJson.version
          env.PACKAGE_VERSION = version
          echo "Version from package.json: ${version}"
        }

      }
    }

    stage('Build') {
      steps {
        sh "docker build -t profile:${env.PACKAGE_VERSION} ."
        sh 'docker images'
      }
    }

    stage('Publish') {
      steps {
        sh 'docker login -u phrompong --password Kaerkgcd@39 128.199.193.250:5000/v2/_catalog'
        sh "docker tag profile:${env.PACKAGE_VERSION} 128.199.193.250:5000/profile:${env.PACKAGE_VERSION}"
        sh "docker push 128.199.193.250:5000/profile:${env.PACKAGE_VERSION}"
      }
    }

    stage('Deploy') {
      steps {
        sh """
                           ssh root@128.199.193.250 '
                           docker pull 128.199.193.250:5000/profile:${env.PACKAGE_VERSION} &&
                           docker stop profile || true &&
                           docker rm profile || true &&
                           docker run --name profile -d -p 8888:3000 128.199.193.250:5000/profile:${env.PACKAGE_VERSION}
                        '
                        """
      }
    }

  }
}