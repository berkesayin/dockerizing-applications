FROM node:21-slim
WORKDIR /opt/node-todo-app
COPY package.json .
RUN npm install 
COPY src/ .
CMD ["node", "server.js"]