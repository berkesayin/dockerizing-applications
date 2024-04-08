FROM node:21-slim 
WORKDIR /opt/node/server 
COPY package.json . 
RUN npm install 
COPY src/ . 
CMD ["node", "app.js"]