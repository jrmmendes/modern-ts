
<p align=center>
  <img src="https://raw.githubusercontent.com/jrmmendes/modern-ts/master/docs/modern-ts-logo.png" width=250>
  
  <p align=center>Modern node.js backend template with express, swagger, typescript and others.</p>
</p>

# Project Structure
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

# Sources of Inspiration
This code is based on several other articles and open source projects:
- Response and Error handlers: [afteracademy](https://github.com/afteracademy/nodejs-backend-architecture-typescript);
- Logging: [Advanced logging with Node.js](http://tostring.it/2014/06/23/advanced-logging-with-nodejs/);
- Linter Config: [Keep your code clean with ESLint](https://flaviocopes.com/eslint/);

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
