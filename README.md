

# DevExtremeNxStarter

A simple monorepo project set up using [Nx](https://nx.dev). The project also has:
* [Dev Extreme React Framework](https://js.devexpress.com/Demos/WidgetsGallery/) integrated (also on Storybook)
* commit linting
* semantic versioning

## Nx Commands

Nx is a set of Extensible Dev Tools for Monorepos.**

### Adding capabilities to your workspace

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

### Generate an application

Run `nx g @nrwl/react:app demo` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `nx g @nrwl/react:lib playground` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@dev-extreme-nx-starter/mylib`.

### Development server

Run `nx serve demo` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `nx g @nrwl/react:component my-component --project=demo` to generate a new component.

### Build

Run `nx build demo` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `nx test demo` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e demo` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.


## Version Control Workflow


1. Add changes on code using:
    ```bash
    git add .
    ```

2. Provide commit message for changes:
    ```bash
    git commit -m '[COMMIT-MESSAGE]'
    ```

    or 
    
    ```bash
    npm run commit
    ```
    The latter command initializes a cli that prompts you for details that build up your commit message. 
    
    The commit messages should be in present tense. e.g fix: undo request log function.

3. Push changes to your repository:
    ```bash
    npm run push
    ```
    the above command includes bumping up the version based on the commit type

    * fix - patch
    * feat - minor
    * BREAKING CHANGES - major

