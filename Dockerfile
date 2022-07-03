FROM node:16 AS backend-api

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/
RUN npm install

COPY ./ /usr/src/app/