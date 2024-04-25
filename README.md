# Express-Nodejs

## Section 1: Local Development Environment Setup

This microservice is designed as to be an Assessment

### Setup Local Environment

To use this miroservice, you need to have the following tools installed on your
developer machine:

1. yarn [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

### Configure Environment variables

To use environment variables, in project root, place .env inside it.

```
express-nodejs/.env
```

```
host=localhost
port=5000
NODE_ENV=development
```

### Running the app

To run , run:

```
$ yarn dev
```

### Usage example

The Greeting api can be tested via http GET to `/v1/greetian` .

```
curl --location 'http://localhost:5000/v1/greetian'
```

Assessment payload can be found in the data object returned by the API! Full
payload is:

```
"data": [
    "Hello Ian!",
    "This API was fun to create",
    "Although Nestjs is also a fun Nodejs framework! :)"
],
"success": true,
"message": "ok",
"statusCode": 200

```
