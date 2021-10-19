# Blackjack simulator

Project is hosted on [nikodemwrona.dev](https://nikodemwrona.dev/blackjack).

Services are deployed on Kubernetes cluster.

The application consists of two microservices:
- web
- api

`web service` is a simple web app build with Next.js 

`api service` is a simple REST API build with Nest.js

both services use `Typescript`

---
To run the project locally you can use the following command from the root folder:

```
docker-compose up -d --build 
```

### Development

To start development first install node_modules with the following command in root folder:
```
yarn
```
The monorepo uses `yarn workspaces` to manage dependencies in the `services` folder.

To run `api service` tests go to `/services/api` and  run the following command:
```
yarn test
```

To check the code coverage of `api service` run the following command:
```
yarn test:cov
```