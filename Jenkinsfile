pipeline {
  agent {
    kubernetes {
        label "jenkins-agent"
    }
  }
   stages{

        stage('测试'){
            steps {
                sh """
                    echo hello
                   """
            }
        }
	}
}