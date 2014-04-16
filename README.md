SPA Front-end Starter Kit
========================

This project is an application skeleton for a typical single-page application (SPA). You can use it to quickly
bootstrap your web application projects and dev environment for these projects.

### Components

Below is a list of 3rd party runtime and development time components used in the project.

| Runtime components | Development tools    |
|--------------------|----------------------|
| HTML5 Boilerplate  | Bower                |
| jQuery             | Gulp                 |
|                    | Browserify           |
|                    | Karma                |
|                    | Protractor           |

### Directory Layout

```
.
├── bower_components
├── build
├── docs
├── node_modules
├── public
├── src
│   ├── images
│   ├── styles
│   └── ...
├── test
│   ├── e2e
│   └── unit
└── ...
```

### Getting Started

To get started you can simply clone the repo and install the dependencies:

```
> git clonse https://github.com/KriaSoft/SPA-Seed.Frontend MyApp
> cd MyApp
> npm install
> bower install
```

To compile and run the application do:

```
> gulp
```

Now browse to the app at `http://localhost:8000/`

### SPA-Seed Repositories

 * [KriaSoft/SPA-Seed.Frontend](https://github.com/KriaSoft/SPA-Seed.Frontend) - Base SPA Template
   * [KriaSoft/SPA-Seed.Frontend.AngularJS](https://github.com/KriaSoft/SPA-Seed.Frontend) - AngularJS SPA Template
   * [KriaSoft/SPA-Seed.Frontend.React](https://github.com/KriaSoft/SPA-Seed.Frontend) - Facebook React SPA Template


### Authors
 * [Konstantin Tarkus](https://angel.co/koistya) ([@koistya](https://twitter.com/koistya)), KriaSoft LLC

### Copyright

 * Source code is licensed under the MIT License. See [LICENSE](./LICENSE) file in the project root.
 * Documentation to the project is licensed under the [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) license.