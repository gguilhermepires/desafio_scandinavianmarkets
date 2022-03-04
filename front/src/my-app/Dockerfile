FROM node:17.6-alpine

WORKDIR /app
COPY . ./
COPY package.json ./
COPY .env ./
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn install
RUN apk update && apk add bash
