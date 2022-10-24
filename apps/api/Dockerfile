FROM gcr.io/google-appengine/nodejs

RUN rm -rf /app/node_modules
RUN rm -rf /app/build

WORKDIR /app

RUN printenv > .env

RUN install_node v14.19.2

RUN npm install -g npm
RUN npm cache verify

RUN nx build api

