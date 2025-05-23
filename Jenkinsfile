pipeline {
    agent any
    
 
    environment {
        ARCHIVE_NAME = 'chatbot_comparison_frontend.tar.gz'
        FOLDER_PATH = '/home/ubuntu'
        FOLDER_NAME = 'Chatbot_Comparison_Frontend'
    }
 
    stages {
        stage('Environment') {
            steps {
                echo "Deploy User: ${env.DEPLOY_USER}"
                echo "Deploy Server: ${env.DEPLOY_SERVER}"
                echo "Deploy Path: ${env.DEPLOY_PATH}"
                echo "DOMAIN_NAME: ${env.DOMAIN_NAME}"
            }
        }
 
        stage('Archive Code') {
            steps {
                script {
                    sh """
                        tar -czvf ${env.ARCHIVE_NAME} .[!.]* *
                        echo "Successfully created archive ${env.ARCHIVE_NAME}"
                    """
                }
            }
        }
 
        stage('Deploy to EC2') {
            steps {
                script {
                        // Copy the archived code to the deployment server
                        sh """
                            scp ${env.ARCHIVE_NAME} ${env.REMOTE_WHATSAPP_SERVER}:${env.FOLDER_PATH}/
                            echo "Successfully copied archive to server"
 
                            ssh ${env.REMOTE_WHATSAPP_SERVER} '
                                cd ${env.FOLDER_PATH} &&
                                tar -xzf ${env.ARCHIVE_NAME} -C ${env.FOLDER_NAME} &&
                                rm ${env.ARCHIVE_NAME} &&
                                echo "Successfully extracted archive on server"
                            '
                        """
                    }
            }
        }
 
        stage('Start Application') {
            steps {
                script {
                        sh """
                            ssh ${env.REMOTE_WHATSAPP_SERVER} '
                                source ~/.nvm/nvm.sh &&
                                cd ${env.FOLDER_PATH}/${env.FOLDER_NAME}/ &&
                                chmod +x setup.sh &&
                                chmod 777 setup.sh &&
                                ./setup.sh
                            '
                        """
                }
            }
        }
    }
 
    post {
        always {
            // Clean up local archive
            sh "rm -f ${env.ARCHIVE_NAME}"
        }
    }
}