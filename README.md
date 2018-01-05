# Express/Passport with React
This version uses React to control the login requests and redirection in coordination with client-side routing.

## Starting the project

### Create database and table

Create a new database called `prime_app` and create a `person` table:

```SQL
CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);
```

### Development Setup Instructions
* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    REACT_APP_API_BASE_URL=http://localhost:5000/api
    ```
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run dev`
* Navigate to `localhost:3000`

### Production Build
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

## Lay of the Land
* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App

## Deployment

1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create an Herkoku Postgres database
4. Connect to the Heroku Postgres database from Postico
5. Create the necessary tables
6. In the deploy section, select manual deploy