FROM node:21-slim
WORKDIR /svelte-app 
COPY package.json . 
RUN npm install
COPY src/ .
COPY . . 
RUN npm install -g live-server 
RUN npm run build 
EXPOSE 8080
CMD ["live-server", "dist"]