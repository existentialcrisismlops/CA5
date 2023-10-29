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

    stages {
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
    }
}
