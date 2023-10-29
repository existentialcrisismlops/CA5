pipeline {
    agent any

    environment {
        // Define your Docker Hub credentials
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')
        DOCKER_IMAGE_NAME = 'existentialcrisismlops/my-mongo-db-image'
        DOCKER_IMAGE_TAG = 'latest'
    }
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
