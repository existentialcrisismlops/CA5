pipeline {
    agent any

    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'CA5', toolName: 'docker') 
                    {
                        sh "docker build -t my-mongo-db-image:latest"
                        sh "docker login -u existentialcrisismlops -p existentialC12"
                        sh "docker push"
                    }
                }
            }
        }
    }
}
