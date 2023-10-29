pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '88e985fd-03d5-4519-b2fe-400f7aaf4681', usernameVariable: 'DOCKER_HUB_USER', passwordVariable: 'DOCKER_HUB_PASS')]) {
                    sh '/usr/bin/docker login -u existentialcrisismlops -p ${DOCKER_HUB_PASS}'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("existentialcrisismlops/flask-signup-app:latest")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', '88e985fd-03d5-4519-b2fe-400f7aaf4681') {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
