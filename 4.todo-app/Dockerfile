FROM node:21-slim
WORKDIR /opt/todo-app
COPY package.json .
COPY src/ .
ENV PORT=4000
EXPOSE 4000
RUN npm install 
CMD ["node", "server.js"]