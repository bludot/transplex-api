# transplex-api

Middleware between a Plex setup and a
[Transmission](https://transmissionbt.com) daemon: it takes a request to add
something, hands the torrent to Transmission, and tracks it from there.

Built as a service that can be dropped into any Kubernetes cluster and pointed
at an existing transplex server, rather than living on the same box as either.

A [NestJS](https://nestjs.com) app in TypeScript, with TypeORM for persistence,
JWT and Passport for auth, WebSockets over Socket.IO for progress, and a
scheduler for the recurring work.

## Running it

Requires the Node version in `.nvmrc`, and a database.

```sh
yarn install
cp .env.template .env      # fill in Transmission and database details
yarn start:dev             # watch mode
yarn start:prod            # production
```

`.db_init.sql` sets up a local database. `docker-compose` files and
`Dockerfile.plex` build it alongside Plex.

## Checks

```sh
yarn test          # unit
yarn test:e2e      # end-to-end
yarn test:cov      # coverage
yarn lint
```

## API documentation

Swagger, via `@nestjs/swagger`, served by the running app. Health checks come
from `@nestjs/terminus`.

Filenames are parsed with
[`@ctrl/video-filename-parser`](https://github.com/scttcper/video-filename-parser),
which is what turns a release name into something matchable against a library.

## Related

- [transplex-frontend](https://github.com/bludot/transplex-frontend) — the web UI
- [transplex-server](https://github.com/bludot/transplex-server) — the server side

## Status

Last worked on in 2023.
