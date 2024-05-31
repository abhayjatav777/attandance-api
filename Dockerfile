FROM node:20-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

ENV TZ Asia/Kolkata

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

COPY ./ ./
RUN yarn build

EXPOSE 3000
CMD ["npm","start"]