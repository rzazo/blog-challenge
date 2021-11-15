### STAGE 1: Build ###
FROM node:14-alpine

WORKDIR /app

COPY ./.npmrc .
COPY ./package-lock.json .
COPY ./package.json .
RUN npm install --from-lockfile --production && npm cache clean --force


### STAGE 2: Run ###
FROM nginx:latest
COPY /dist/apps/apa-blog-challenge /usr/share/nginx/html
EXPOSE 80