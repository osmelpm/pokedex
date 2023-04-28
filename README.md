<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Run in Development

## Clone repository

```bash
$ git clone https://github.com/osmelpm/warehouse-api.git
```

## Installation

```bash
$ yarn install
```

## Running the database

```bash
# development
$ docker-compose up -d
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Seed database

GET http://localhost:3000/seed

## Stack

- NestJs
- MongoDB
