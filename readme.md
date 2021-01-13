![Honey Donuts](https://cdn.shopify.com/s/files/1/0040/6146/2626/files/OF_DONUT_LOGO_300x.png?v=1551744283)

# Honey Donuts - Server

Backend for the Honey Donuts website.

## Demo

Check out a demo of this app [here](http://abortive-lunchroom.surge.sh/).

Note: This is in combination with the frontend project ([repo](https://github.com/seanysdan/honey-donuts-frontend)).

## Docker

This project has been containerized and uploaded as a docker image.
Production: 
`docker pull seanysdan/honey-donuts-server:latest`

Test:
`docker pull seanysdan/honey-donuts-server-test:latest`

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

To test locally: 
    $ yarn test

To test using docker: 
    $ docker-compose -f docker-compose-test.yml up 