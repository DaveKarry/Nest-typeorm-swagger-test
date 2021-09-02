<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Как использовать: 
swagger-Документация доступна по пути /api/docs/
# Реализованные методы:
```bash
Post: /users
Создает запись в таблице пользователей
параметры: 
{
  "name": "Вася Пупкин"
} 
```

```bash
Get: /users
Возвращает краткую инфорию всех пользователей
Responses:
[
  {
    "id": 2,
    "Name": "Вася Пупкин",
    "withAbonnement": true
  },
  {
    "id": 4,
    "Name": "Вася Пушкин",
    "withAbonnement": true
  },
  {
    "id": 5,
    "Name": "Вася Вася",
    "withAbonnement": false
  }
]
```

```bash
Get: /users/{id}
Возвращает полную информацию пользователя, со списком книг
Параметры: 
id пользователя
Responses
{
  "id": 4,
  "Name": "Вася Пупкин",
  "withAbonnement": true,
  "books": [
    {
      "id": 8,
      "Name": "Азбука"
    },
    {
      "id": 9,
      "Name": "Приключения Шерлока Холмса"
    }
  ]
}
```

```bash
Patch: /users/{id}/update
Изменяет данные пользователя
Параметры: 
id пользователя
Request body:
{
  "name": "Пася Вупкин"
}
Responses
{
  "id": 4,
  "Name": "Пася Вупкин",
  "withAbonnement": true,
}
```
```bash
Patch: /users/{id}/updateAbonnement
Изменяет доступ абонимента пользователя
Параметры: 
id пользователя
Responses
{
  "id": 4,
  "Name": "Пася Вупкин",
  "withAbonnement": false
}
```

```bash
Delete: /users/{id}/delete
Удаляет пользователя
Параметры: 
id пользователя
Responses

```

```bash
Post: /books
Request body
Создает книгу
{
  "name": "Приключения Шерлока Холмса"
}
Responses
{
  "id": 3
  "name": "Приключения Шерлока Холмса"
}
```

```bash
Get: /books
Возвращает все книги
Responses
[
  {
    "id": 3,
    "name": "Приключения Шерлока Холмса"
  },
  {
    "id": 4,
    "name": "Ы"
  }
]
```

```bash
Get: /books/{bookId}/rent
Назначает книгу за пользователем.
Params:
Id книги
Request body:
Id пользователя
"id": 2,
Responses
{
  "id": 7,
  "Name": "Приключения Шерлока Холмса",
  "user": {
    "id": 2,
    "Name": "Вася ы",
    "withAbonnement": true
  }
}
```

```bash
Get: /books/{bookId}/back
"Возвращает" книгу от пользователя.
Params:
Id книги
Responses
{
  "id": 7,
  "Name": "Приключения Шерлока Холмса",
  "user": null
}
```
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


