pipeline {
	agent any

	environment {
    GOOGLE_PROJECT_ID = 'dsc-fptu-hcmc-orientation'
  }

  options {
    // Keep the 10 most recent builds
    buildDiscarder(logRotator(numToKeepStr:'10')) 
  }

	stages {
		stage('Install dependencies') {
			steps {
        script {
          if (fileExists('dist'))
            sh 'rm -rf dist'
          if (fileExists('node_modules'))
            sh 'rm -rf node_modules'
          if (fileExists('rm package-lock.json'))
            sh 'rm package-lock.json'
        }
        sh '''
          echo "PATH = ${PATH}"
          node --version
          npm --version
          npm cache clean --force
          npm install
          echo "Install dependencies successfully!"
        '''
			}
		}

    stage('Test Code Coverage') {
      steps {
        sh './node_modules/.bin/ng test --no-watch --code-coverage'
        // create the `reports` directory if not exist
        publishHTML(
          target : [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: './coverage/angular-boilerplate/',
            reportFiles: 'index.html',
            reportName: 'RCov Report',
            reportTitles: 'RCov Report'
          ]
        )
      }
    }

		stage('Bundle Angular application') {
			steps {
				sh '''
          echo "BUILD NUMBER = $BUILD_NUMBER"
          ./node_modules/.bin/ng build --aot --prod
          echo ""
        '''
      }
      post {
        success {
          // Archive the built artifacts
          archiveArtifacts(
            artifacts: 'dist/**/*.*',
            allowEmptyArchive: false
          )
        }
      }
    }

		stage('Deploy to production') {
			steps {
        withCredentials([file(credentialsId: 'google-application-credentials-secret-file', variable: 'GOOGLE_APPLICATION_CREDENTIALS')]) {
          input message: 'Deploy to production? (Click "Proceed" to continue)'
          sh '''
            gcloud --version
            echo "GCP credentails: $GOOGLE_APPLICATION_CREDENTIALS"
            gcloud config set project $GOOGLE_PROJECT_ID
            gcloud auth activate-service-account --key-file $GOOGLE_APPLICATION_CREDENTIALS
            gcloud config list
            cp app.yaml dist/app.yaml
            cd dist
            gcloud app deploy --version=v01
            echo "Deployed to Google Compute Engine"
          '''
        }
      }	
		}
	}
}