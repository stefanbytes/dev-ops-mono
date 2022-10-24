FROM gcr.io/google-appengine/nodejs

RUN rm -rf /app/node_modules
RUN rm -rf /app/build

WORKDIR /app


RUN printenv > .env

RUN install_node v14.19.0

RUN npm install -g npm
RUN npm cache verify

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]
