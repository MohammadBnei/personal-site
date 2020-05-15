FROM node:13

RUN apt-get update
RUN apt-get install libglu1 -y

WORKDIR /usr/src/app

RUN npm install -g gatsby-cli