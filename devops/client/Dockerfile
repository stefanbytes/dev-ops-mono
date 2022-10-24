FROM gcr.io/google-appengine/nodejs

RUN rm -rf /app/node_modules
RUN rm -rf /app/build

WORKDIR /app

RUN printenv > .env

RUN install_node v14.19.0

RUN npm install -g npm
RUN npm cache verify
RUN npm install -g serve

COPY package*.json ./
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . .

EXPOSE 8080

CMD ["serve", "-s", "build", "-l", "8080"]
