FROM ubuntu:18.04 
RUN apt-get update 
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt-get install nodejs -y
COPY src/ /opt/node-app/
WORKDIR /opt/node-app/ 
ENV name=berke
CMD ["node", "index.js"]  
