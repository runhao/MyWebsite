pipeline {
    agent any

    // agent { label 'HK' }

    stages {
        stage('withCredentials') {
            steps {
                withCredentials([usernamePassword(credentialsId: '36751054-3b26-4634-b686-999abec4d0b0', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                  echo DOCKER_USERNAME
                }
                echo 'Credentials SUCCESS'
            }
        }

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