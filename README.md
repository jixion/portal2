

# Portal
 
[![Travis CI](https://travis-ci.org/jixion/portal.svg?branch=develop)](https://travis-ci.org/jixion/portal.svg?branch=develop)
[![Coverage Status](https://coveralls.io/repos/github/jixion/portal/badge.svg?branch=develop)](https://coveralls.io/github/jixion/portal?branch=develop)
[![Code Climate](https://codeclimate.com/github/jixion/portal/badges/gpa.svg)](https://codeclimate.com/github/jixion/portal)

Portfolio site designed to showcase front end and api skills. Created using angular-seed at [https://github.com/angular/angular-seed](https://github.com/angular/angular-seed)

## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

This can be installed on a server with only 512mb of RAM but the install works better with 1GB.

You need git to clone the portal repository. You can get git from
[http://git-scm.com/][git].

We also use a number of node.js tools to initialize and test portal. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/][node].

In addition you will need gulp and gulp-eslint to get started as well.

### Clone portal

Clone the portal repository using [git][git]:

```
git clone https://bitbucket.org/sparkimaginations/portal.git
cd portal
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
portal changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

Now that npm has installed portal, have bower install it

```
bower install
```

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
sudo gulp
```

Now browse to the app at `http://localhost:`.



## Directory Layout

```
app/                    --> all of the source files for the application
  about_me/                --> the about_me view template and logic
    about_me.html            --> the partial template
    about_me.js              --> the controller logic
    about_me_test.js         --> tests of the controller
  components/           --> all app specific modules
    services/           --> api call services
      linkedin_api.js           --> calls api endpoints for linkedin api
      nasa_api.js               --> calls all api endpoints related to space page
      wow_api.js                --> api endpoints related to world of warcraft
      owm_api.js               --> calls api endpoints for weather underground
  files/                --> file storage for downloadables
      ATLTTIDS.pdf        --> research article
      RezoundFun.pptx     --> presentation
      SoftBotsGO.jar      --> ai projet
  images/               --> image storage
      background.jpg      --> background image
      loading.gif         --> indeterminate loading
      paper.jpg           --> background for resume
  resume/                --> the resume view template and logic
    resume.html            --> the partial template
    resume.js              --> the controller logic
    resume_test.js         --> tests of the controller
  space/                --> the space view template and logic
    space.html            --> the partial template
    space.js              --> the controller logic
    space_test.js         --> tests of the controller
  weather/                --> the weather view template and logic
    weather.html            --> the partial template
    weather.js              --> the controller logic
    weather_test.js         --> tests of the controller
  app.css               --> default stylesheet
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
.bowerrc              --> bower config 
.eslintrc.js          --> eslint config
.gitignore            --> files to ignore in git
.jshintrc             --> jshint config
.travis.yml           --> travis ci config
bower.json            --> bower config
gulpfile.js           --> gulp config
karma.conf.js         --> config file for running unit tests with Karma
LICENSE               --> software licensing agreement 
package.json          --> package information
README.md             --> this document
```

## Testing

There are two kinds of tests in the portal application: Unit tests and End to End tests.

### Running Unit Tests

The portal app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing (not currently working)

The portal app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The portal
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Updating Angular

Previously we recommended that you merge in changes to portal into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.


### Running the App during Development

The portal project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and webserver(s).


## Continuous Integration

### Travis CI

[Travis CI][travis] is the continuous integration service we use, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The portal
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.


## Contact

For more information on this application please email jburroughs@sparkimaginations.com


[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
