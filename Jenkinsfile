pipeline {
    agent any
    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'CA5') {
                        sh "docker build -t my-mongo-db-image:latest ."
                        sh "docker push"
                    }
                }
            }
        }
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def appImage = docker.build("existentialcrisismlops/flask-signup-app:latest")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com') {
                        appImage.push()
                    }
                }
            }
        }
        stage('Run Docker Compose') {
            steps {
                script {
                    def frontendImageExists = sh(script: 'docker pull analysts/existentialcrisismlops/myflaskapp', returnStatus: true) == 0
                    def backendImageExists = sh(script: 'docker pull analysts/existentialcrisismlops/my-mongodb-image', returnStatus: true) == 0

                    if (frontendImageExists && backendImageExists) {
                        sh 'docker-compose up -d'
                    } else {
                        error 'Required Docker images not found on Docker Hub.'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Docker Compose stack started successfully.'
        }
        failure {
            error 'Failed to start Docker Compose stack.'
        }
    }
}
