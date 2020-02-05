# Passport First Look
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`). This version uses React to control the login requests and redirection in coordination with client-side routing.


## Fork and Clone


## Create database and table

Create a new database called `passport_intro` and create the following tables:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "pet" (
    "id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR (80) UNIQUE NOT NULL,
    "user_id" INT REFERENCES "user"
);
```

## Start the server

- `npm install`
- `npm run server`
- `npm run client`

## Passport

This project has been set up with passport. There is a lot of code that has already been written. You're not expected to understand all of the code but will need to be able to check if the user is authenticated in your routes.

### High Level

Let's look through some of the provided code to get an idea of what's happening.

- server.js
- strategies/user.strategy.js
- modules/session-middleware.js
- modules/authentication-middleware.js
- constants/warnings.js

### Key Components

- `req.isAuthenticated()` is a function available to you on all of your routes.
- If the user is authenticated, `req.user` will be available to you.

### pet.router.js

Let's take a look at this in practice.


## Using this repo with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum. 

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. [Import the sample routes JSON file](./PostmanPrimeSoloRoutes.json) by clicking `Import` in Passport. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
    1. `POST /api/user/register` registers a new user, see body to change username/password
    2. `POST /api/user/login` will login a user, see body to change username/password
    3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

