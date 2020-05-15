[![GS Phones Test](https://github.com/jgleal/react-phone-catalogue/workflows/GS%20Phones%20Test/badge.svg)](https://github.com/jgleal/react-phone-catalogue/actions?query=workflow%3A%22GS+Phones+Test%22)

# GuideSmiths Phone Store

It's a GuideSmiths React code challenge

## Structure and technologies

The code are divided in two workspaces: server and client.

- _Server_: contains backend code. I've used Node with Express to build an REST API for serve data (phones and images)
- _Client_: contains frontend code. In addition to React+Redux, I've used other technologies:
  - Styled-Components: for CSS-in-JS styled components
  - TailWindCSS: utility classes for styling
  - TailWind.macro: for integrate TailWindCSS with Styled-Components

## Decisions

I've not use Create React App (CRA) for generate the project. I'm feeling better having full control over each process and config. Instead, I've use Webpack to bundle app

I've decided implement a **feature based code structuring** in front of layer structuring (actions, reducers, hooks...). I think it is more encapsulated and reusable, which are WebComponents principles. It is more scalable too because all you need modify on a feature, it's together.

# Install & Run

## Using yarn

### Prerequisites

You need yarn to execute scripts because npm don't support workspaces on monorepo. If you are currently using npm and don't have yarn, you can install it executing:

```bash
npm i -g yarn
```

If you don't want install it, you can executing it temporally:

```bash
npx yarn <command>
```

### Install dependencies

To install dependencies, both server and client, execute this command on root folder:

```bash
yarn install
```

### Run app

To run complete app in development mode, execute:

```bash
yarn start
```

It will run server and client. To see it:

- Go to http://localhost:5000/phones to view server response
- Go to http://localhost:9000 to view web app

## Using Docker

### Prerequisites

You need docker and docker-compose installed on your computer. (see: https://docs.docker.com/install/)

### Run app

To run complete app execute:

```bash
docker-compose up
```

It build client workspace for production and deploy it on a ngix server. The server runs as production too.

- Go to http://localhost:5000/phones to view server response
- Go to http://localhost:8000 to view web app

The first time you execute it, it takes a little time to finish because download, build and run docker images. Next times, the images won't be downloaded and built, so that only needs run it.

If you makes changes on code, you should rebuild images:

```bash
docker-compose build --parallel
```

# Test

I've implemented some unit and end-to-end (e2e) test.

To run it execute:

```bash
yarn workspace client test
```

If only wants execute unit test:

```bash
yarn workspace client test:unit
```

And for only e2e test:

```bash
yarn workspace client test:e2e
```
