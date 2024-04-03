## Express.js Server Application

The provided Dockerfile sets up a containerized environment for a simple Express.js Node.js server application.

#### Dockerfile

```dockerfile
FROM node:21-slim
WORKDIR /opt/node/server
COPY package.json .
COPY src/ .
RUN npm install
CMD ["node", "index.js"]
```

#### Build Image

```bash
docker build . -t express-server
```

#### Check Images

```bash
docker images
```

```bash
REPOSITORY         TAG           IMAGE ID       CREATED             SIZE
express-server     latest        fec9744627ad   21 seconds ago      234MB
```

#### Run Container

```bash
docker run --name express-server-c -p 3001:3000 express-server
```

- Go to `localhost:3001`

#### Check Containers

```bash
docker ps
docker container ls
```

```bash
CONTAINER ID   IMAGE            COMMAND                  CREATED         STATUS         PORTS                    NAMES
52ea30b64b2d   express-server   "docker-entrypoint.s…"   2 minutes ago   Up 6 seconds   0.0.0.0:3001->3000/tcp   express-server-c
```
