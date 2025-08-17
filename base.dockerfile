FROM node:22-alpine as base
WORKDIR /app
COPY package.json .
RUN npm install
