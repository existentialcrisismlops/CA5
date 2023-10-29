pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Login') {
            steps {
                script {
                    // Use Docker Hub credentials
                    withCredentials([usernamePassword(credentialsId: 'Docker_Account', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
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
