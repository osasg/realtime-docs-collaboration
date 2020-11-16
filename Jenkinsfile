pipeline {
	agent any

	environment {
    GOOGLE_PROJECT_ID = 'dsc-fptu-hcmc-orientation'
    // GOOGLE_SERVICE_ACCOUNT_KEY = credentials('service_account_key')
  }

  tools {
    nodejs 'Node-build'
  }

	stages {
		stage('Init') {
			steps {
        script {
          if (fileExists('node_modules')) {
            sh 'rm -rf node_modules'
          }

          if (fileExists('rm package-lock.json')) {
            sh 'rm package-lock.json'
          }
        }
        sh '''
          echo "PATH = ${PATH}"
          node -v
          npm -v
          npm cache clean --force
          npm install
          echo "Init success.."
        '''
			}
		}

		stage('Build') {
			steps {
				sh '''
          echo "BUILD NUMBER = $BUILD_NUMBER"
          ./node_modules/.bin/ng build --aot --prod
          echo "Build Success.."
        '''
			}
			// post {  
      //   always {
      //     notifyThroughEmail('Build-stage')
      //   }
      // }
    }

		stage('Deploy') {
			steps {
        sh '''
          echo "GCP credentails: ${GOOGLE_SERVICE_ACCOUNT_KEY}"
          gcloud config set project $GOOGLE_PROJECT_ID
          gcloud auth activate-service-account --key-file $GOOGLE_SERVICE_ACCOUNT_KEY
          gcloud config list
          gcloud app deploy --version=v01
          echo "Deployed to Google Compute Engine"
        '''
      }	
      post{
        always{
          println "Result : ${currentBuild.result}"
          // notifyThroughEmail('Deploy-stage')
				}
			}
		}
	}
}

// def notifyThroughEmail(String stage= "Default stage"){
//   emailext  (
//     body:"""
//       Adtech-Service - Build # $BUILD_NUMBER - $currentBuild.currentResult:
    

//       Check console output at $BUILD_URL to view the results.
//     """,
//     compressLog: true,
//     attachLog: true,
//     replyTo: '-----@---.com, -----@----.com',
//     recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
//     subject: "Build Notification Jenkins - Project : Project-service - Job: $JOB_NAME Build # $BUILD_NUMBER ${currentBuild.currentResult}",
//     to: '-----@---.com, -----@----.com'
//   )
// }