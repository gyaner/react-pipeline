node {
    // Determine branch-specific settings
    def imageName = "my-react-app"
    def containerName = "react-app-container-multi"
    def appPort = ""

    if (env.BRANCH_NAME == 'master') {
        containerName += "-dev"
        appPort = 3002
    } else if (env.BRANCH_NAME == 'main') {
        containerName += "-prod"
        appPort = 3004
    } else {
        echo "Branch ${env.BRANCH_NAME} is not configured for deployment."
        return
    }

    stage('Checkout') {
        checkout scm
    }

    stage('Build React App') {
        sh '''
            docker run --rm -w /app \
                -v "$PWD":/temp \
                node:16 bash -c "\
                mkdir -p /app && \
                cp -r /temp/* /app && \
                rm -rf /app/build /app/node_modules/.cache && \
                cd /app && \
                npm install && \
                CI='' npm run build && \
                cp -r /app/build /temp/"
        '''
    }

    stage('Build Docker Image') {
        sh "docker build -t ${imageName}:${env.BRANCH_NAME} ."
    }

    stage('Stop and Remove Old Container') {
        sh """
            docker stop ${containerName} || true
            docker rm ${containerName} || true
        """
    }

    stage('Run Container') {
        sh """
            docker run -d --name ${containerName} -p ${appPort}:80 ${imageName}:${env.BRANCH_NAME}
        """
         echo "code  ${appPort} run at port."
    }

    stage('Clean Up Images (optional)') {
        sh "docker image prune -f"
    }
}

