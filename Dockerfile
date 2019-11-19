FROM node:10.16-alpine

WORKDIR /hooksToDoApp
ADD . /hooksToDoApp

RUN npm install