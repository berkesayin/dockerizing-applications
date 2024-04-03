## Simple PHP Application

#### Dockerfile

```dockerfile
FROM php:8-apache
WORKDIR /var/www/html/index.php
COPY src/ .
EXPOSE 80
CMD ["apache2-foreground"]
```

#### Build Image

```bash
docker build . -t simple-php-app
```

#### Check Images

```bash
docker images
```

```bash
REPOSITORY         TAG           IMAGE ID       CREATED             SIZE
simple-php-app     latest        8f2f8176abac   52 seconds ago      422MB
```

#### Run Container

```bash
docker run --name php-server -p 8080:80 simple-php-app
```

Go to `localhost:8080/index.php`

#### Check Containers

```bash
docker ps
docker container ls
```

```bash
CONTAINER ID   IMAGE            COMMAND                  CREATED              STATUS              PORTS                  NAMES
a06bde0330a7   simple-php-app   "docker-php-entrypoi…"   About a minute ago   Up About a minute   0.0.0.0:8080->80/tcp   php-server
```
