pipeline {
    agent any

    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'CA5') 
                    {
                        sh "docker build -t my-mongo-db-image:latest ."
                        sh "docker push"
                    }
                }
            }
        }
    }
}
