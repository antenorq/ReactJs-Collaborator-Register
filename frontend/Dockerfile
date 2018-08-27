FROM node:8.9.3

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
RUN npm install
COPY . /app
