

# DevExtremeNxStarter

A simple project that with Dev Extreme set up. This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>



## Nx Commands

Nx is a set of Extensible Dev Tools for Monorepos.**

### Adding capabilities to your workspace

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

### Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@dev-extreme-nx-starter/mylib`.

### Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

### Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.


## Version Control Workflow


Add changes on code using:
```
git add .
```

Provide commit message for changes:
```
git commit -m '[COMMIT-MESSAGE]'
```

the commit messages should be in present tense. e.g fix: undo request log function.

Push changes to your repository:
```
npm run push
```
the above command includes bumping up the version based on the commit type

fix - patch
feat - minor
BREAKING CHANGES - major

