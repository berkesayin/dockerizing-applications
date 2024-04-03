## Lightweight Nodejs Application

This Dockerfile sets up a lightweight Node.js environment within a Docker container, utilizing the node:21-slim base image.

#### Dockerfile

```dockerfile
FROM node:21-slim
WORKDIR /opt/node-app/
COPY src/ .
ENV name=berke
CMD ["node", "index.js"]
```

#### Build Image

```bash
docker build . -t slim-nodejs-app
```

#### Check Images

```bash
docker images
```

```bash
REPOSITORY          TAG           IMAGE ID       CREATED          SIZE
slim-nodejs-app     latest        479f135e82bf   5 minutes ago    227MB
```

#### Run Container

```bash
docker run --name slim-nodejs-c slim-nodejs-app
```

#### Check Containers

```bash
docker ps -a
docker container ls -a
```

```bash
CONTAINER ID     IMAGE               COMMAND                  CREATED          STATUS                      PORTS     NAMES
5921f4881e0c     slim-nodejs-app     "docker-entrypoint.s…"   7 minutes ago    Exited (0) 7 minutes ago              slim-nodejs-c
```
