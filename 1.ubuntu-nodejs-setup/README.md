## Setup Nodejs Inside Ubuntu Container

The provided steps outline the manual configuration process for setting up a basic Node.js environment within a Docker container based on Ubuntu 18.04.

1. docker run -it ubuntu:18.04
2. apt-get update
3. apt-get install curl -y
4. curl -sL https://deb.nodesource.com/setup_16.x | bash
5. apt-get install nodejs -y
6. cd opt
7. mkdir node-app
8. cd node-app/
9. echo 'console.log("node app from ubuntu...");' > index.js
10. node index.js

```bash
Hello from ubuntu...
ENV => berke
```

#### Dockerfile

This Dockerfile automates the setup of a Node.js environment within a Docker container based on Ubuntu 18.04.

```dockerfile
FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt-get install nodejs -y
COPY src/ /opt/node-app/
WORKDIR /opt/node-app/
ENV name=berke
CMD ["node", "index.js"]
```

#### Build Image

```bash
docker build . -t ubuntu-nodejs-setup
```

#### Check Images

```bash
docker images
```

```bash
REPOSITORY            TAG           IMAGE ID       CREATED         SIZE
ubuntu-nodejs-app     latest        41b9c7295e21   3 seconds ago   207MB
```

#### Run Container

```bash
docker run --name ubuntu-nodejs-c ubuntu-nodejs-app
```

#### Check Containers

```bash
docker ps -a
docker container ls -a
```

```bash
CONTAINER ID   IMAGE                COMMAND                  CREATED         STATUS                      PORTS     NAMES
5d68d5258f96   ubuntu-nodejs-app    "node index.js"          3 seconds ago   Exited (0) 2 seconds ago              ubuntu-nodejs-c
```
