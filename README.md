# ChitChat

[Live version](https://chitchat-client.netlify.app)

[Server repository](https://github.com/arturjzapater/chitchat-server)

Chitchat is a simple chatting webapp. This client is written using [TypeScript](https://www.typescriptlang.org/), [Redux](https://redux.js.org/), [React](https://reactjs.org/) and [Socket.IO](https://socket.io/).

## Install and Run

Clone and install its dependencies:

```bash
git@github.com:arturjzapater/chitchat-client.git
cd chitchat-client
npm i
```

To run the client in development mode, use:

```bash
npm start
```

To buid the project for production, use:

```bash
npm run build
```

## Test

This project uses [mocha](https://mochajs.org/) as its testing library.

To run unit tests, use:

```bash
npm t
```

The end-to-end tests are located in the [server repository](https://github.com/arturjzapater/chitchat-server). See [instructions there](https://github.com/arturjzapater/chitchat-server#test) to run them.

## Project Structure

Most of the project's code is in the [src](src) folder, which contains the following folders:

- [app](src/app): contains the application's main component([App](src/app/App.tsx)) as well as the [Header](src/app/Header.tsx) component.
- [css](src/css): contains the application's stylesheet.
- [features](src/features): contains the application's components and custom hooks organised by main component.
- [helpers](src/helpers): contains helper functions.
- [types](src/types): contains type declarations.

The application's [index](src/index.tsx), as well as its [store](src/store.ts) and [reducer](src/reducer.ts) are located at the root of the [src](src) folder.

In addition, the [public](public) folder contains the html template and the [config](config) folder contains configuration files for webpack and babel.
