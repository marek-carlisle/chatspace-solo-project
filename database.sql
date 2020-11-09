-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLES!!!

CREATE TABLE "user" (

  "id" SERIAL PRIMARY KEY,
  "first_name"  VARCHAR (40) NOT NULL,
  "middle_name" VARCHAR (40), -- Client NEEDS to send an EMPTY STRING if user DOES NOT input this OPTIONAL input
  "last_name" VARCHAR (40) NOT NULL,
  "date_of_birth" DATE, --  "date_of_birth" ?
  "date_of_register" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- "date_of_register" ?
  "last_logged_in" TIMESTAMP,
  "username" VARCHAR (40) UNIQUE NOT NULL,
  "password" VARCHAR (80) NOT NULL,
  "moderator" BOOLEAN DEFAULT FALSE,
  "admin" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "channels" ( -- Every channel will load a set of messages with the respective "channel_id"
"id" SERIAL PRIMARY KEY, 
"channel_name" VARCHAR (40) NOT NULL
);

CREATE TABLE "messages" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "users", -- "user_id" will come from whichever user "id" sent it
"channel_id" INT REFERENCES "channels", -- "channel_id" will come from whichever channel "id" it was sent from
"message_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- NEED A TIMESTAMP
"message" VARCHAR (480) NOT NULL -- The message itself that every user will submit into a channel
);

CREATE TABLE "image_list" (
  "id" SERIAL PRIMARY KEY,
  "image_title"  VARCHAR (400),
  "image_description" VARCHAR (400),
  "image_url" VARCHAR (400)
  );


-- DROP TABLES!!!

DROP TABLE "users";

DROP TABLE "channels";

DROP TABLE "messages";

-- INSERTS!!!

INSERT INTO "users" ("first_name", "middle_name", "last_name", "date_of_birth", "username", "password", "moderator", "admin")
VALUES 
('Marek', 'Mason', 'Carlisle', '1997-08-18', 'Sevisis Maverick', 'ThatYukiCat2019', TRUE, TRUE),
('Undefined', NULL, 'Undefined', NULL, 'Savis Undefined', 'RulerofEverything1', TRUE, FALSE),
('Vex', NULL, 'Auric', NULL, 'Vex of The Void', 'DarknessIsMyDestiny', FALSE, FALSE);

SELECT * FROM "users";

INSERT INTO "channels" ("channel_name")
VALUES
('main_chat'),
('media_chat');

SELECT * FROM "channels";

INSERT INTO "messages" ("user_id", "channel_id", "message")
VALUES
('1', '1', 'Hello world!'),
('2', '1', 'Hello universe.'),
('1', '2', 'Well send media in here!'), -- I have that quotation problem again lmao, Blaine help!
('2', '2', 'Sure whatever, have some cat pics.'),
('2', '2', '*Savis proceeds to send cat pics.*');

SELECT * FROM "messages";

INSERT INTO "image_list" ("image_title", "image_description", "image_url")
VALUES
('Calico', 'Almost all calico cats are female', 'https://bit.ly/35AyyAP'),
('Tabby', 'My first cat was an orange tabby named Maverick', 'https://bit.ly/37CQtte');

SELECT * FROM "image_list";

