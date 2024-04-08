## Express Server With Docker Compose

#### Compose File

```yml
version: "3.4"
services:
  node-server:
    container_name: my-server
    build: .
    ports:
      - 3001:3000
```

This compose configuration will build the Dockerfile and create the image using `build` key. docker-compose.yml and Dockerfile are at the same directory and `.` defines it.

#### Dockerfile

```dockerfile
FROM node:21-slim
WORKDIR /opt/node/server
COPY package.json .
RUN npm install
COPY src/ .
CMD ["node", "app.js"]
```

#### Build Image

```bash
docker-compose build
```

#### Check Images

```bash
docker images
```

```bash
REPOSITORY                           TAG           IMAGE ID       CREATED          SIZE
9compose-node-server-node-server     latest        43aa98566e5f   5 seconds ago    234MB
```

`9compose-node-server` is for the folder name containing this `docker-compose.yml` file. And `node-server` is the definition for `service` at compose configuration file.

#### Run Container

```bash
docker-compose up
```

- Go to `localhost:3001`

#### Check Containers

```bash
docker ps
docker container ls
```

```bash
CONTAINER ID   IMAGE                              COMMAND                  CREATED          STATUS          PORTS                    NAMES
057bac047a36   9compose-node-server-node-server   "docker-entrypoint.s…"   41 seconds ago   Up 41 seconds   0.0.0.0:3001->3000/tcp   my-server

```
