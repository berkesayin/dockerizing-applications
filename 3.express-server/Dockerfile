FROM node:21-slim 
WORKDIR /opt/node/server 
COPY package.json .
COPY src/ . 
RUN npm install 
CMD ["node", "index.js"]