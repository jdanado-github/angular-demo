# Angular Sample

## Description
This is a simple project with a basic image gallery using Angular. It demos:
- Sidenav
- Toolbar
- Cards
- Services
- Components
- Routing

The project was fully written in Typescript but knowledge of Javascript is 
enough to follow the workflow.

## Requirements
This project was created with the following set of tools.
- Linux
- NPM
- Node.js
- Angular 6

## Setup
In order to compile the project, make sure that you have all the requirements. 
The code was only tested in a Linux machine but should work on Mac and Windows. 

Install all dependencies by executing the following command at the root:
```bash
npm install
```

Execute the server with the following command:
```bash
npm run ng serve --open
```

Navigate to [localhost:4200](http://localhost:4200/)

## Directory Structure
The following directories include different components for the application:

- **angular-sample** - Includes the application and all its components
- **angular-sample/src/app** - The main app component
- **angular-sample/src/app/about** - Simple Card Component
- **angular-sample/src/app/app-routing** - The application router
- **angular-sample/src/app/gallery** - A Sample gallery component
- **angular-sample/src/app/material** - A module to import material components
- **angular-sample/src/app/navidation** - The sidenav component
- **angular-sample/src/app/shared/components** - Components that can be shared. 
Actually, only a component to create a gallery is stored.
- **angular-sample/src/app/shared/models** - All application models. 
Includes the model to share image data.
- **angular-sample/src/app/shared/services** - All application services.
A dummy service implementin Observables was created to simulate asynchronous
calls to retrieve data.
- **angular-sample/src/assets** - Assets for the aplication.
- **package.json** - File with all libraries to install and deploy


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4. 
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
