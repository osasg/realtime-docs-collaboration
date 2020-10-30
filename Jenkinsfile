pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Deliver') {
      steps {
        input message: 'Deploy to production? (Click "Proceed" to continue)'
        sh 'gsutil -m rsync -r ./static gs://<your-bucket-name>/static'
      }
    }
  }
}
