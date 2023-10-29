pipeline {
    agent any

    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    // Define your Docker image name and tag
                    def dockerImage = "my-mongodb-image:latest"

                    // Build the Docker image using the Dockerfile in the current directory
                    sh "docker build -t $dockerImage ."

                    // Push the Docker image to your Docker registry
                    sh "docker push $dockerImage"
                }
            }
        }
    }
}
