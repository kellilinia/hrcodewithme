## Aug 24, 2023

Today, I worked on:

- Completed /employer/search endpoint
- Protecting endpoints

Today I continued to work on my employers.py queries.
Narrowed down the specifics of the search results, by only
allowing "open to work" coders searchable. Also updated the
coding_since field with a default field of 10000 so the field
isn't required, but will automatically show all coders matching
the other search fields.

We completed the merge request for the backend authentication.

Added restart: always to yaml file under fastapi because the
container kept failing to connect to database until we manually
restarted. It seemed to fix the issue.

Waiting to protect endpoint before submitting merge request for
/emmployer/search endpoint.

Will need to look into how to protect the endpoint for specific
employer user (coder = False) from accounts detail.

Creating accounts in beekeeper does not create hashed password,
and won't work properly in FastAPI for logging in.

## Aug 23, 2023

Today, I worked on:

- As a group, set up backend authentication

Today we had Kelly as driver, and watched Curtis' and Zach's
JWTdown FastAPI backend authentication videos. We came across
multiple error messages and attempted to debug as a team. We had
to make was in requirements.txt, update the fastapi version to
0.81.0 like in Curtis' video.

## Aug 22, 2023

Today, I worked on:

- Created dummy data in beekeeper
- Tested employer_search code

Today I created dummy data from accounts into coders database to
test the search functionality. The first test, all the fields were
being required to be marked as true and only showing 1 user with
all fields as true. I added the Optional (imported from typing)

## Aug 21, 2023

Today, I worked on:

- Rewatched and took thorough notes on Curtis FastAPI videos
- Started endpoint for "/employer/search"
- Created employers_routers.py in routers folder
- Created employers.py in queries folder

Today I started the endpoint for my employer search functionality.
I created a GET request, with query params. In my queries file,
my SearchIn class is what would be input, and the SearchOut class
is the output I want. I would have to get the data from the accounts
and coders table.

In my SearchRepository class, I wrote the code to identify which
boolean fields are selected, and to filter out the coder profiles
that have these fields as 'true'. Then with the SQL code only select
these coder profiles.

In the for loop,

## Aug 17, 2023

Today, I worked on:

- As a group, completed POST endpoint for Sign Up

With Kelly sharing her screen and coding along, we
reviewed the Curtis videos, and created our first POST
endpoint for signing up.

We came across some more psyco.pg errors, and it turned
out our DATABASE_URL wasn't being called properly from
the pool.py file. We originally had the link copy and pasted
from the yaml file, but we removed the .get from the code, and
replaced the link with "DATABASE_URL" to resolve the errors.

Completed merge request, and tested all code to show a
successful POST request!

## Aug 16, 2023

Today, I worked on:

- As a group, created the tables for our database
- Successfully migrated, and completed merge request

Today we created the tables in the migrations folder in
PostgreSQL, but came across some syntax errors that had to
be handled. Our FastAPI docker container would exit, and
the syntax errors had to be resolved before the tables would
successfully migrate.

## Aug 15, 2023

Today, I worked on:

- Created the diagrams for our database on dbdiagram.io
- As a group, creating our docker-compose.yaml file
- Completed our first merge request

Today we updated our docker-compose.yaml file to get our
database URL up and running. We had some issues with psyco.pg
errors, but resolved them by updating the DATABASE_URL in
yaml/accounts.py file.

Once we got all of our docker containers up and running, we
completed our first merge request together.

We also reviewed the diagrams for the database, and
worked together to identify which fields would be foreign
keys and how they relate to one another.
