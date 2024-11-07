# Node.js express.js MongoDB JWT REST API - Basic Project Skeleton

[![Author](http://img.shields.io/badge/author-@HamzaLiaqat-blue.svg?style=flat-square)](https://www.linkedin.com/in/muhammad-hamza-529377175/)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/davellanedam/node-express-mongodb-jwt-rest-api-skeleton/blob/master/LICENSE)
[![Tag](https://img.shields.io/github/tag/davellanedam/node-express-mongodb-jwt-rest-api-skeleton.svg?style=flat-square)](https://github.com/davellanedam/node-express-mongodb-jwt-rest-api-skeleton/tags)
[![Travis](https://img.shields.io/travis/com/davellanedam/node-express-mongodb-jwt-rest-api-skeleton.svg?style=flat-square)]()
[![npm downloads](https://img.shields.io/npm/dt/node-express-mongodb-jwt-rest-api-skeleton.svg?style=flat-square&label=npm%20downloads)]()
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fb6f20533c0f41b6b00da95ba634cd5e)](https://www.codacy.com/app/davellanedam/node-express-mongodb-jwt-rest-api-skeleton?utm_source=github.com&utm_medium=referral&utm_content=davellanedam/node-express-mongodb-jwt-rest-api-skeleton&utm_campaign=Badge_Grade)

## Getting started

This is a basic code, an implementation of authentication in nodejs using midId, criipto.

This project is created to help other developers create a **basic REST API in an easy way with Node.js**. This basic example shows how powerful and simple JavaScript can be. Do you want to contribute? Pull requests are always welcome to show more features.

## Buy me a coffee

Hi! I'm Muhammad Hamza, I'm an open source enthusiast and devote my free time to building projects in this field.

These projects are a "starter web app kit" for any developer who wants to build their own app without starting from scratch: API + Frontend

Both projects have been downloaded thousands of times by web developers around the world.

I'm doing my best to provide you a good experience when using my apps, so if you like what I'm doing and wish to say "thanks!", please buy me a coffee :coffee:

<a href="https://www.buymeacoffee.com/muGHf41NT" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

Feel free to send me a message/ connection request <https://www.linkedin.com/in/muhammad-hamza-529377175/>, share this with others or make a pull request

## Features

- Implementation of Authentication with midId.

## Requirements

- Node.js **8+**
- if DB is required then,
- MongoDB **3.6+**

## Demo

To see the demo, clone the project and run the project. http://localhost:{PORT}/

### Login credentials

email: ` 
password:`

**IMPORTANT:** Database resets every 30 mins like "12:00am, 12:30am, 1:00am" and so on. So anything you do with the API will be lost after a short time.

[API documentation](###api-documentation)

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/muhammad-hamza-liaqat/auth-with-midID ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
npm update
```

### Setting up environments (development or production)

1.  In the root this repository you will find a file named `.env.dist.example`
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment (development or production)
5.  Upload the `.env` to your environment server(development or production)
6.  If you use the postman collection to try the endpoints, change value of the variable `server` on your environment to the url of your server, for development mode use <http://localhost:{PORT}>

**IMPORTANT:** There is no JWT Authentication.

### Running in development mode (lifting API server)

```bash
npm run dev
```

or

```bash
npm run start
```

You will know server is running by checking the output of the command `npm run dev`

```bash
****************************
*    Server is running at http://localhost:{PORT}/
****************************
```

### Running tests

It´s a good practice to do tests at your code, so a sample of how to do that in `mocha/chai` is also included in the `/test` directory

```bash
npm run test
```

### Formatting code

Format your code with prettier by typing:

```bash
npm run format
```

### Formatting markdown files

Format all your markdown files with remark by typing:

```bash
npm run remark
```

### Linting code

Lint your code with ESLint by typing:

```bash
npm run lint
```

## Usage

Once everything is set up to test API routes either use Postman or any other api testing application. Default username/password combination for login is `admin@admin.com/12345`.

### API documentation

<https://documenter.getpostman.com/view/487539/RWaHwoLV>

### Postman API example collection

You can import the example collection to Postman. To import, click the import button located and select `postman-example.json` located within the root directory.

Go to `manage environments` to create environments for development, production, etc. On each of the environments you create you will need to:

1.  Create a new key `authToken` and within the `/login` request this value is automatically updated after a successfull login through a script located in the `tests` tab. Each time you make a request to the API it will send `Authorization` header with the `token` value in the request, you can check this on the headers of users or cities endpoints in the Postman example.

2.  Create a second key `server` with the url of your server, for development mode use <http://localhost:3000>

This is a REST API, so it works using the following HTTP methods:

- GET (Read): Gets a list of items, or a single item
- POST (Create): Creates an item
- PATCH (Update): Updates an item
- DELETE: Deletes an item

### Creating new models

If you need to add more models to the project just create a new file in `/app/models/` and it will be loaded dynamically.

### Creating new routes

If you need to add more routes to the project just create a new file in `/app/routes/` and it will be loaded dynamically.

### Creating new controllers

When you create a new controller file, try to also create another file with validations. Ex. `countries.js` and `countries.validate.js`. An example of this is included in the repository.

## Bugs or improvements

Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
