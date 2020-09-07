FROM node:13

RUN apt-get update
RUN apt-get install libglu1 -y

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm i --silent

CMD npm start