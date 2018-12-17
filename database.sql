CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "pet" (
    "id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR (80) UNIQUE NOT NULL,
    "person_id" INT REFERENCES "person"
);
