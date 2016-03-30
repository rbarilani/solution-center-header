# Solution Center Header
Reusable header for software connecting to the Zalando Solution Center

[![Build Status](https://travis-ci.org/zalando/solution-center-header.svg?branch=master)](https://travis-ci.org/zalando/solution-center-header)

### Installation

Install via bower

```shell
bower install solution-center-header
```

Install via npm

```shell
npm install solution-center-header
```

### Usage

1. Load the script in your `<head>` from Bower:

    ```html
    <script src="../bower_components/solution-center-header/dist/solution-center-header.js"></script>
    ```
    
    Or from NPM:
    
    
    ```html
    <script src="../node_modules/solution-center-header/dist/solution-center-header.js"></script>
    ```

2. Include the `solutionCenter` module as a dependency in your app.

3. Insert the directive at the top of your app:

    ```html
    <solution-center-header 
        user="user"
        brand="brand"
        modules="modules" 
        logout="logout()" 
        solution-center-url="url">
    </solution-center-header>
    ```

###Parameters

All parameters are optional. The Zalando logo and the help widget always appear. Other elements appear only if the respective parameter is populated.

 - **user**: A user object. Controls the display of the user name with submenu allowing access to a user account page and logout.
 
    `user = { firstName: "John", lastName: "Doe }` OR `{ name: "John Doe" }`
 
 - **brand**: A brand object. Controls the display of the brand switcher with a submenu allowing access to the brand page and switching to another brand.
 
    ```brand = { name: "name", id: 1 }```

 - **modules**: An array of module objects. Controls the display of the module menu with links to modules that the user has permission to access.
 
     ```
     modules = [ { name: "name", url: "example.com" }, 
                 { name: "name", url: "example.com" } ]
     ```
 
 - **logout**: A function that is called when a user clicks the logout link.
 
    ```logout = function () { // handle logout }``` 
 
 - **solution-center-url**:  A URL override for the solution center. This URL is used to construct the links for the user account, brand account, and brand switcher pages. The URL should have a trailing `/`. If no URL is provided, the solution center production URL is used by default.

    ```solution-center-url = "https://www.example.com/```

### Style

The solution center header is intended to be used with the [dress code](https://github.com/zalando/dress-code) style. That package is included as a dependency.

Follow these steps to ensure you are using the right style for the header:

 1. Follow the [usage instructions for the dress code](https://github.com/zalando/dress-code#usage). 
 2. Load the header styles. Add this to your `<head>`:
 
    ```<link rel="stylesheet" href="../bower_components/solution-center-header/dist/solution-center header.css">```
    
    Or for NPM:
    
    ```<link rel="stylesheet" href="../node_modules/solution-center-header/dist/solution-center header.css">```
    
 3. For sizing, be sure the header is inside a `<body>` with class `dc-body`, and your `<html>` has class `dc-html`. 

 
	 

### Demo

See the `demo` folder. To run the demo locally, follow the Develop instructions below.

### Develop

Clone the repository, then run:

```shell
npm install
bower install
```

Install Gulp via npm if you don't have it
```shell
npm install -g gulp
```

#### Available commands

* `gulp`: build and test the project
* `gulp build`: build the project and make new files in`dist`
* `gulp serve`: start a server to serve the demo page and launch a browser then watches for changes in `src` files to reload the page
* `gulp test`: run tests
* `gulp serve-test`: runs tests and keep test browser open for development. Watches for changes in source and test files to re-run the tests

### License
MIT
