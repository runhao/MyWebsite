pipeline {
    agent any

    // agent { label 'HK' }

    withCredentials([usernamePassword(credentialsId: "36751054-3b26-4634-b686-999abec4d0b0", usernameVariable: "DOCKER_USERNAME", passwordVariable: "DOCKER_PASSWORD")]){

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