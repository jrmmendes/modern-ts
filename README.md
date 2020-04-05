
<p align=center>
  <img src="https://raw.githubusercontent.com/jrmmendes/modern-ts/master/docs/modern-ts-logo.png" width=250>
  
  <p align=center>Modern node.js backend template with express, swagger, typescript and others.</p>
</p>

## Setup

<details><summary>Development</summary>

> We strongly recommed the use of `yarn` as package manager for that project. 

After cloning this repository, do the following steps to start working:
```
$ cd modern-ts

$ yarn install
```

Once all dependencies were installed, create a `.env` file based on the `.env.base`
provided.

Finally, start the development server:
```
$ yarn start:dev
```
The application will start listening at localhost:3000. You can also use the
`build` and `start` scripts to create and run a production ready code.

</details>

## Project Structure
```
├── LICENSE
├── package.json
├── yarn.lock
├── src
│   ├── index.ts
│   ├── Application.ts
│   ├── core
│   │   ├── api-error.ts
│   │   ├── api-response.ts
│   │   ├── async-handler.ts
│   │   └── logger.ts
│   └── routes
│       └── ...
├── tsconfig.json
└── README.md
```
## Tecnologies
- ts-jest
- Typescript
- Express

## Roadmap
### v1.0: 
- Documentation with Swagger
- Validation with hapijs/joi

### v1.1: 
- Docker implementation
- Production build system with dokku/heroku

## Sources of Inspiration
This code is based on several other articles and open source projects:
- Response and Error handlers: [afteracademy](https://github.com/afteracademy/nodejs-backend-architecture-typescript);
- Logging: [Advanced logging with Node.js](http://tostring.it/2014/06/23/advanced-logging-with-nodejs/);
- Linter Config: [Keep your code clean with ESLint](https://flaviocopes.com/eslint/);

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
