FROM tuwei1314/tomcat:8.5.75
LABEL maintainer tuwei
RUN rm -rf /usr/local/tomcat/webapps/*
ADD target/*.war /usr/local/tomcat/webapps/ROOT.war 
