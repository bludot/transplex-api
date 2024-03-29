FROM node:14.16.1-alpine3.10 AS build

ENV NODE_ENV development
WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY src src
COPY tsconfig.json tsconfig.json
COPY tsconfig.build.json tsconfig.build.json

RUN apk update && apk add bash
RUN yarn install --production=false
RUN yarn build

FROM node:14.16.1-alpine3.10 AS PROD
ENV NODE_ENV production
ARG SERVICE_VERSION
ENV SERVICE_VERSION=$SERVICE_VERSION
WORKDIR /usr/src/app

RUN apk add --no-cache tini
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY --from=build /usr/src/app/dist ./
COPY ormconfig.js ./ormconfig.js

RUN yarn install --production=true
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "main.js"]
