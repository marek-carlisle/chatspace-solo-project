# REACT AUTH SHELF

Our client, Prime Digital Academy: Room 2, has asked for an app to simulate the behavior of their shelf. That is, a list of items placed on the classroom shelf. More details about each of the features are listed below in the README.md.

## DOWNLOAD THIS REPOSITORY

> NOTE: Do not clone this repository.

- Don't Fork or Clone. Instead, have one memeber of your group click the `Clone or Download` button and select `Download Zip`.
- Unzip the project and start with the code in that folder.
- Create a new GitHub project and push this code to the new repository.
- Add members of your group to the repository.

## CREATE DATABASE AND TABLE

Create a new database called `auth_shelf` and create a `user` table:
user-update

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);
```

## DEVELOPMENT SETUP

- Clone the repository for your group
- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. [Import the sample routes JSON file](./PostmanPrimeSoloRoutes.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you will be able to try any other route you create that requires a logged in user!

## FEATURES

We recommend working in groups of 4 or 6 and pair programming for this project. Each pair should take on one of the following features. You will want to identify any tasks that need to be finished in a particular order as a group to avoid merge conflicts. Each of the following features should be on a separate route.

### Display all Items

The shelf (info) page should show all of the items stored in the database in a list or table.

### Add Items to the Shelf

The Shelf (Info) Page should allow a user to add a new item to the database (which should immediately appear in the list).

> NOTE: Image url should be a full path to an existing image on the web. You should not attempt to implement image upload for this.

### Delete Items from the Shelf

An authenticated user should be able to delete items from the shelf if they were the one who added the item to the shelf.

> NOTE: This should require client and server changes. An unauthenticated attacker from Postman should not be able to delete anything.

## Stretch Goals

- Ability to edit an existing item on the shelf from the info page.
- Have anyone, not just logged in users, be able to see what is on the shelf, but not edit, remove, nor add.
- A new route to display all items for a specific user. `/shelf/2` would display items uploaded by user with the id of `2`.
- Filestack for image upload on the add page.
- Style with Material-UI
