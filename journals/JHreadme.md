## README Documentation

### Code With Me

A collaborative and fun way to test your coding skills and meet other coders

Team members:

- Jaime Huey
- Miguel Ortiz
- Silvano Gonzalez
- Kelly Khalilinia

### Project Initialization / Getting Started

1. Navigate to gitLab and fork and clone the repository down locally
2. Navigate to the project directory in the terminal
3. Run the following commands to create docker volumes / build and run docker:
   - docker volume create admin-pg
   - docker volume create postgres-data
   - docker compose up
4. Navigate to the following location to play Code With Me! Make sure you create an account in order to participate in a few coding challenges.
   https://mintyzebras.gitlab.io/code-with-me/
5. Navigate to localhost:3000 if you've cloned this project.

### Design

#### Diagram

- INSERT DIAGRAM\*

#### API Design

##### Accounts

- Create Account

  - Method: POST
  - Path: localhost:8000/accounts
  - Input:
    {

  }

  - Output:
    {

  }

- Get Account Details

  - Method: GET
  - Path: localhost:8000/accounts/{id}
  - Input:
    {

  }

  - Output:
    {

  }

- Get Account List
- Method: GET

  - Path: localhost:8000/accounts
  - Input:
    {

  }

  - Output:
    {

  }

- Edit Account
- Method: PUT

  - Path: localhost:8000/accounts/{id}
  - Input:
    {

  }

  - Output:
    {

  }

- Delete Account
- Method: DELETE

  - Path: localhost:8000/accounts/{id}
  - Input:
    {

  }

  - Output:
    {

  }

##### Employer Search

The employer search API functionality allows employers to filter through coders that are open to work based on their search criteria. An employer fills out the search fields and selects the checkboxes for languages and tech stacks, and clicks search. The search will use the Profiles API to filter through the coder profiles that are marked as open to work, and match the search criteria.

The search results will display a table with the coder name, list all languages, and preferred tech stacks, along with a link to their profile page. For future feature improvements, we will create a coding game history page when we create our 2-player coding game where employers can view a coder's coding style.

Before you get started, sign up for an account as an employer (coder=false). You will need to be logged in to this account to access employer search. You can use this JSON body to create an employer account at localhost:3000/signup:

```
{
  "email": "employer@email.com",
  "username": "employer",
  "password": "employer",
  "first_name": "employer",
  "last_name": "employer",
  "coder": false
}
```

- Search Endpoint
  - Method: POST
    - Path: localhost:3000/employer/search

To fully test the functionality of the search from the fork and cloned repo, you will need to create coder accounts in the database, create the coder profile, and update the fields for language/tech stack preferences.

To create a search, enter your search criteria using this JSON body (when a value is false, it is null, and only searches for true values):

```
{
  "fullstack": true,
  "frontend": false,
  "backend": false,
  "javascript": true,
  "python": true,
  "java": false,
  "html": false,
  "coding_since": 2024
}
```

The output will be a list of dictionaries with matching true values like this:
(The coding since value is default 0)

```
[
  {
    "coder_id": 1,
    "first_name": "Zachary",
    "last_name": "Zach",
    "fullstack": true,
    "frontend": true,
    "backend": true,
    "javascript": true,
    "python": true,
    "java": true,
    "html": true,
    "coding_since": 0
  },
  {
    "coder_id": 7,
    "first_name": "Oliver",
    "last_name": "Bumpkin",
    "fullstack": true,
    "frontend": false,
    "backend": true,
    "javascript": false,
    "python": true,
    "java": true,
    "html": false,
    "coding_since": 0
  },
  {
    "coder_id": 8,
    "first_name": "Ellie",
    "last_name": "Bellie",
    "fullstack": true,
    "frontend": true,
    "backend": false,
    "javascript": true,
    "python": false,
    "java": false,
    "html": true,
    "coding_since": 0
  }
]
```

If no values match, the search criteria, the output will be an empty list, and the frontend will show "There are no coders matching your search."

If a user that is not an employer tries to use the employer search, the output will be:

```
{
  "detail": "You do not have an employer account to access this page."
}
```

The frontend will have an Error 403: Forbidden in the console.

##### Coder Profile

- INSERT API REQUEST METHODS

##### Game

The Game Management APIs in this application offer a collection of endpoints to facilitate the administration and interaction with game-related data. These endpoints enable users to perform Create and Read operations on game records. Below, you'll find details on how to access these endpoints, along with examples of input and output JSON responses.

| Action                    | Method | URL                                   |
| ------------------------- | ------ | ------------------------------------- |
| Get all Games (protected) | GET    | http://localhost:8000/games           |
| Get Game (protected)      | GET    | http://localhost:8000/games/{game_id} |
| Create Game (protected)   | POST   | http://localhost:8000/game            |

### Get all Games

Response Body:

```
  [
    {
    "id": 0,
    "language": "string",
    "question": "string",
    "answer": "string",
    "wrong_answer": "string",
    "difficulty": "string"
  }
  ]
```

### Get Game

Response Body:

```
  [
    {
      "id": 0,
      "language": "string",
      "question": "string",
      "answer": "string",
      "wrong_answer": "string",
      "difficulty": "string"
    }
  ]
```

### Create Game

Input Body:

```
  [
    {
      "language": "string",
      "question": "string",
      "answer": "string",
      "wrong_answer": "string",
      "difficulty": "string"
    }
  ]
```

Response Body:

```
  [
    {
      "language": "string",
      "question": "string",
      "answer": "string",
      "wrong_answer": "string",
      "difficulty": "string"
    }
  ]
```

#### Data Model

![SQL data model](image.png)
As a stretch goal, the coding game will be a 2-player coding challenge and we plan on creating a coding history page that will link the game to the coder profile.

#### GHI

##### Accounts

- Update Account
  ![Alt text](updateAccount.png)

##### Employer Search

![Alt text](employerSearch.png)

##### Coder Profile

![Alt text](profile.png)

##### Game

- Game
  ![Alt text](game.png)

### Team Roles and Responsibilities

- Jaime - Hiring Manager view - Frontend/CSS support
- Miguel - Profile page view - Frontend/testing features (quality) - additional game support
- Silvano - Game and game page - Backend/Documentation/Deployment Support
- Kelly - Account views (signup/signin/update/signout) - Backend/Documentation/Project management related support

Daily journals available for additional information

### Niche Market

Code With Me is a web application geared toward coders who want a unique, fun, and collaborative way to code with others.

With the current deployment of Code With Me, a coder can create an account, sign in and play a multiple choice coder challenge to deepen their knowledge. An additional feature we have built into the app is for an employer to also have the capability to create an account and search for coders as potential hiring candidates. Within the app, a user can create an account, sign in, sign out, and update their account, as well as select whether they are a coder or an employer. Coders can add profile data, and play coding challenges. Employers can select criteria for their search query, and will see a list of coders who are open to work.

The future goal behind Code With Me is to develop the app to allow coders to create an account, sign in, and start a coding challenge. For the coding challenge, or the game, two coders will be paired together, and will play a blind coding challenge with one another. During this collaborative coding challenge, each coder will be able to add a line of code, adding on to the other coder's work, and "push" their changes. Either coder will have the ability to terminate a coding session at any time, whether the coding challenge is complete, or whether they do not want to proceed. At the end of the coding challenge, each player will have the ability to add the coder they worked with as part of their "coding network", and if (and ONLY if) both coders say yes, their gitLab or gitHub username will be shared with each other.

Another feature which could eventually be created as a built-in linkedIn style networking site, which is geared toward software engineers only. When coders finish a challenge they can then just choose if they want to add each other on the network platform (this would be a big stretch goals far in the future).

Code With Me has the potential to add the following benefits to coders as well as employers:

- A way for coders to network with other individuals in the field
- Collaboration
- Another tool for learning code
- Reading other coder's code
- Creativity
- Data to analyze
- Potential Interview tool

### Application Functionality

- Accounts

1. A user can create an account by providing:

   - email address
   - username
   - password
   - first name
   - last name
   - selecting whether they are a coder not an employer

2. A user can sign in by providing:

   - username
   - password

3. A user can update their account by changing any of the fields below (NOTE: Each field must be filled in):

   - user id (this is their unique identifier)
   - email
   - username
   - first name
   - last name

4. A user can navigate to a "Code with me" and "profile" if they are a coder
5. A user can navigate to "Employer search" if they are an employer
6. A user can logout

- Employer Search

1. An employer can use a search query to look for coders open to work by selecting coder tech stack and coding languages

- Coder profile

* INSERT FRAME IMAGES

- Game

1. A coder can play a multiple choice coding challenge by navigating to "Code with me"
