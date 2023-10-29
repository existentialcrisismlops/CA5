pipeline {
    agent any

    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build('my-mongodb-image:latest', '.')
                    dockerImage.push()
                }
            }
        }
    }
}
