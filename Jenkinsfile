pipeline {
    agent none

    // agent { label 'HK' }

    environment {
        DOCKER_USERNAME = "${env.DOCKER_USERNAME}"
        DOCKER_PASSWORD = "${env.DOCKER_PASSWORD}"
    }

    stages {
        stage('Login to Docker Registry') {
            steps {
                sh "make login"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "make build"
            }
        }

        stage('Push Docker Image') {
            steps {
                sh "make push"
            }
        }

        stage('Clean Up') {
            steps {
                sh "make clean"
            }
        }
    }
}