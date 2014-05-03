![SPA Front-end Starter Kit](http://files.tarkus.me/spa-seed/Single-page-Application-Starter-Kit.png)

**SPA Front-end Starter Kit** is an application skeleton for a typical single-page application (SPA).
You can use it to quickly bootstrap your web application projects and dev environment for these projects.
It includes the following set of pre-configured dev tools at your disposal:
[Browserify](http://browserify.org/), [Gulp](http://gulpjs.com/), [Karma](http://karma-runner.github.io/),
[Protractor](https://github.com/angular/protractor)...

### Directory Layout

```
.
├── build                       # A compiled version of the app
├── docs                        # Documentation files
├── node_modules                # Node.js dev tools and utilities
├── public                      # Public / static files: favicon.ico etc.
├── src                         # The source code of the application
│   ├── images
│   ├── styles
│   └── ...
├── test                        # Unit, integration and load tests
│   ├── e2e                     # End-to-end tests
│   └── unit                    # Unit tests
└── ...
```

### Getting Started

To get started you can simply clone the repo and install the dependencies:

```
> git clone https://github.com/KriaSoft/SPA-Seed.Front-end.git MyApp
> cd MyApp                      # Navigate to the newly created project's directory
> npm install -g gulp           # Install Gulp task runner globally
> npm install                   # Install node.js components listed in ./package.json
```

To compile and run the application do:

```
> gulp
```

Now browse to the app at `http://localhost:8000/`

### SPA-Seed Repositories

 * [SPA-Seed.Frontend](https://github.com/KriaSoft/SPA-Seed.Front-end) - Base SPA Front-end template
   * [SPA-Seed.Frontend.AngularJS](https://github.com/KriaSoft/SPA-Seed.Front-end.AngularJS) - AngularJS SPA template
   * [SPA-Seed.Frontend.React](https://github.com/KriaSoft/SPA-Seed.Front-end.React) - Facebook React SPA template
 * [SPA-Seed.Server](https://github.com/KriaSoft/SPA-Seed.Server-side) - SPA backend/server-side template (coming soon)

### Reference Articles

 * [Build Wars: Gulp vs Grunt](http://markdalgleish.github.io/presentation-build-wars-gulp-vs-grunt/)
   by [Mark Dalgleish](https://twitter.com/markdalgleish)
 * [Getting Started with Gulp](http://markgoodyear.com/2014/01/getting-started-with-gulp/)
   by [Mark Goodyear](https://twitter.com/markgdyr)
 * [Gulp + Browserify: The Everything Post](http://viget.com/extend/gulp-browserify-starter-faq)
   by [Dan Tello](https://twitter.com/dantello5)

### Authors

 * [Konstantin Tarkus](https://angel.co/koistya) ([@koistya](https://twitter.com/koistya)), KriaSoft LLC

### Copyright

 * Source code is licensed under the MIT License. See [LICENSE](./LICENSE) file in the project root.
 * Documentation to the project is licensed under the [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) license.
