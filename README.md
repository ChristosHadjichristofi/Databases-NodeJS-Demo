# Databases-NodeJS-Demo

## Dependencies
1. [NodeJS](https://nodejs.org/en/)
2. [MySQL for Windows](https://dev.mysql.com/downloads/installer/)

## Required NodeJS Dependencies
1. [express](https://www.npmjs.com/package/express) - minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications
2. [mysql2](https://www.npmjs.com/package/mysql2) - mysql driver
3. [ejs](https://www.npmjs.com/package/ejs) - a templating engine
4. [faker](https://www.npmjs.com/package/faker/v/5.5.3) - to create dummy data
5. [express-session](https://www.npmjs.com/package/express-session) - Create session middleware
6. [connect-flash](https://www.npmjs.com/package/connect-flash) - The flash is a special area of the session used for storing messages

## Optional NodeJS Dependencies
1. [nodemon](https://www.npmjs.com/package/nodemon) - a command-line interface (CLI) utility developed by @rem that wraps your Node app, watches the file system, and automatically restarts the process
2. [chalk](https://www.npmjs.com/package/chalk) - style terminal strings 
3. [custom-env](https://www.npmjs.com/package/custom-env) - configure different environments for your project. For example you can create a file named ```.env.localhost``` and keep the variables when you're in the development phase. Usually used so as to keep credentials safe, so as they don't get uploaded to any hosting platforms that are used for Version Control like GitHub

### custom-env Example
1. Create a file named .env.localhost
2. Import it by using ```require('custom-env').env('localhost');```
3. ```.env.localhost``` content
```
SERVER_PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=dbuser
DB_PASS=dbpass
DB=db-name
```

## Useful Tools
1. Database Administration Tools like [Dbeaver](https://dbeaver.io/), [Navicat](https://www.navicat.com/en/), [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

## Project Folder Hierarchy
1. controllers - the logic of the routes (where the sql queries take place, and then the result can be either returned rendered or in other ways like JSON, csv etc.
2. public - all publicly accessible files that a user of the system can have access (usually css, icons, static pages etc)
3. routes - the endpoints of the application. Endpoints are simply a unique URL where a specific task is completed. For example http://localhost:3000/signin is used for signing in an application, http://localhost:3000/user/5 is to get the user with the id eq to 5 etc
4. utils - can contain any utilities you want for your project, for example the connection of the database, so as you can just import and use it when needed (mostly in controllers)
5.  views - the pages of the project (More on what the templating engine does)

## What is a Templating Engine
A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

### Alternatives of EJS
1. [Handlebars](https://handlebarsjs.com/)
2. [Pug](https://pugjs.org/api/getting-started.html)

## NodeJS General Information
1. To initialize a new NodeJS Project, create the project folder, open a terminal and use the command ```npm init```
2. To install a new package use ```npm i [package-name]```. If you want to save the package in DevDependencies use ```npm i [package-name] --save-dev```
3. To uninstall a package use ```npm u [package-name]```
4. To add a new script open ```package.json```, find scripts and below a script can be added. Usually a ```start script``` is added.<br>
   Example: ```"start": "nodemon server.js"```, if ```nodemon``` is used in the project.<br>
   To use the script execute ```npm start```

## Create Dummy Data
1. Using the [faker](https://www.npmjs.com/package/faker/v/5.5.3) package dummy data can be created. It can create all kind of data (More on the documentation of the package)
2. To run the ```creator.js``` script which is located inside ```dummyDataCreator``` folder, run ```npm run create-data```, which is a custom script (custom scripts can be declared in ```package.json``` and can be run with ```npm run <script-name>```)

![landing](https://user-images.githubusercontent.com/40044042/159064916-aac1a816-33ff-4e6f-9e63-45c31c7044a3.png)

![add-student](https://user-images.githubusercontent.com/40044042/159064953-cf6b808a-062a-48c7-b140-67b141b50604.png)

![students](https://user-images.githubusercontent.com/40044042/156389596-a409b129-e9cb-4946-9d9d-47f113c1d8f3.png)

![grades](https://user-images.githubusercontent.com/40044042/156389628-1653aba7-c033-48d0-ac3a-df37374f0d1e.png)
