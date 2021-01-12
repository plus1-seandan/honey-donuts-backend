![Honey Donuts](https://cdn.shopify.com/s/files/1/0040/6146/2626/files/OF_DONUT_LOGO_300x.png?v=1551744283)

# Honey Donuts - Server

Backend for the Honey Donuts website.

## Demo

Check out a demo of this app [here](http://abortive-lunchroom.surge.sh/).

Note: This is in combination with the frontend project ([repo](https://github.com/seanysdan/honey-donuts-frontend)).

## Docker

This project has been containerized and uploaded as a docker image.

`docker pull seanysdan/honey-donuts-server:latest`

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/seanysdan/honey-donuts-backend.git
    $ cd honey-donuts-backend
    $ yarn install

## Configure app

A few configurations are needed to run the project locally.
Replace the following values set in **src/settings/index.js** to your local environment.

- `DATABASE_NAME`: This is the main database for the app
- `DATABASE_NAME_TEST`: This is the database where test data is created
- `DATABASE_USER`: Admin username for Postgresql,
- `DATABASE_PWR`: Admin password for Postgresql,
- `SERVER_PORT`: The express server's listening port. I recommend making this **8081** as this is where the frontend sends requests to.

After setting up the two databases, seed the databases by running the **dump.sql** file in both environments.

Note: I recommend creating a .env file for these configs.

## Running the project

    $ yarn start

If successful, the server should log a message saying "Server is running on {your specified port}"

## Simple build for production

    $ yarn build

This will convert the project into a pure javascript for production deployment.

## Testing APIs

    $ yarn test
