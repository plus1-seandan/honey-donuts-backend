FROM node:14
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm install
RUN npm install -g mocha
COPY dist . 
CMD npm run test-docker
USER node

