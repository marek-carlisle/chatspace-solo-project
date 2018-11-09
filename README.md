# REACT AUTH SHELF

Our client, Prime Digital Academy: Room 2, has asked for an app to simulate the behavior of their shelf. That is, a list of items placed on the classroom shelf. More details about each of the features are listed below in the README.md.

## DOWNLOAD THIS REPOSITORY

> NOTE: Do not clone this repository.

* Don't Fork or Clone. Instead, have one memeber of your group click the `Clone or Download` button and select `Download Zip`.
* Unzip the project and start with the code in that folder.
* Create a new GitHub project and push this code to the new repository.
* Add members of your group to the repository.

## CREATE DATABASE AND TABLE

Create a new database called `auth_shelf` and create a `person` table:

```SQL
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "person_id" INT REFERENCES "person"
);
```

## DEVELOPMENT SETUP

* Clone the repository for your group
* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## FEATURES

We recommend working in groups of 4 or 6 and pair programming for this project. Each pair should take on one of the following features. You will want to identify any tasks that need to be finished in a particular order as a group to avoid merge conflicts. Each of the following features should be on a separate route.

### View Shelf

All logged in users should be able to view ALL items on the shelf (even items added by other users). On the view shelf page there should also be an option to delete items on the shelf.

### Add Items to the Shelf

> NOTE: Image url should be a full path to an existing image on the web. You should not attempt to implement image upload for this.

This page should include a form that allows user to add items to the shelf. Each item should have a description and an image url.


### Total Number of Items by User

> NOTE: In a group of six, this feature should be completed as base functionality. In a group of four or five, this would be a stretch goal.

This page should display a list of users along with the total number of items they have added to the shelf. Users with 0 items on the shelf should be displayed as well! 

### Stretch Goals

- Ability to edit an existing item on the shelf from the view page.
- Have anyone, not just logged in users, be able to see what is on the shelf, but not edit, remove, nor add.
- A new route to display all items for a specific user. `/shelf/2` would display items uploaded by user with the id of `2`.
- Filestack for image upload on the add page.
- Style with Material-UI
