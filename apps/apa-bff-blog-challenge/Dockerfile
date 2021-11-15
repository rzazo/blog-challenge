FROM node:14-alpine

WORKDIR /app
EXPOSE 3333

COPY ./.npmrc .
COPY ./package-lock.json .
COPY ./package.json .
RUN npm install --from-lockfile --production && npm cache clean --force

COPY ./dist/apps/apa-bff-blog-challenge .
CMD ["node", "main.js"]
