## README Documentation


### Code With Me
A collaborative and fun way to test your coding skills and meet other coders

Team members:
- Jamie Huey
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

### Design


#### Diagram
* INSERT DIAGRAM*

#### API Design



##### Accounts
- Create Account (Create Account)
    - Method: POST
    - Path: localhost:8000/accounts
    - Input:
    ```
    {
        "email": "Curtis",
        "username": "cschlak",
        "password": "password",
        "first_name": "Curtis",
        "last_name": "Schlak",
        "coder": true
    }
    ```

- Output:
    ```
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3OGZjYWIyOC0yZWM0LTRlY2EtYjE2YS0wYzMyN2M3ZTEwMzAiLCJleHAiOjE2OTQ0NzIwNjcsInN1YiI6ImNzY2hsYWsiLCJhY2NvdW50Ijp7ImlkIjoxLCJlbWFpbCI6IkN1cnRpcyIsInVzZXJuYW1lIjoiY3NjaGxhayIsInBhc3N3b3JkIjoiJDJiJDEyJDVDSUQxRm9XTVVnWVE0TWYzUUtjYk92QkxvL05rczNaYmg3NXhkV1BWZ0VyMjRSZUtCQXNDIiwiZmlyc3RfbmFtZSI6IkN1cnRpcyIsImxhc3RfbmFtZSI6IlNjaGxhayIsImNvZGVyIjp0cnVlfX0.HZeXfZy3k8KZIZXt_ltUsUfbQK9Ms9VClzk0I8XMeoM",
        "token_type": "Bearer",
        "account": {
        "id": 1,
        "email": "Curtis",
        "username": "cschlak",
        "password": "$2b$12$5CID1FoWMUgYQ4Mf3QKcbOvBLo/Nks3Zbh75xdWPVgEr24ReKBAsC",
        "first_name": "Curtis",
        "last_name": "Schlak",
        "coder": true
    }
    }
    ```


- Get Account Details (Get One Account)
    - Method: GET
    - Path: localhost:8000/accounts/{account_id}
    - Input:
    ```
    {
        "account_id": 1
    }
    ```

    - Output:

    ```
    {
        "id": 1,
        "email": "Curtis",
        "username": "cschlak",
        "password": "$2b$12$5CID1FoWMUgYQ4Mf3QKcbOvBLo/Nks3Zbh75xdWPVgEr24ReKBAsC",
        "first_name": "Curtis",
        "last_name": "Schlak",
        "coder": true
    }
    ```

- Get Account List (Get All)
 - Method: GET
    - Path: localhost:8000/accounts
    - Input:
    Select "Execute"

    - Output:
    ```
    [
        {
            "id": 1,
            "email": "Curtis",
            "username": "cschlak",
            "password": "$2b$12$5CID1FoWMUgYQ4Mf3QKcbOvBLo/Nks3Zbh75xdWPVgEr24ReKBAsC",
            "first_name": "Curtis",
            "last_name": "Schlak",
            "coder": true
        }
    ]
    ```

- Edit Account (Update Account)
 - Method: PUT
    - Path: localhost:8000/accounts/{account_id}
    - Input:
    ```
    {
        "email": "Curtis.Schlak@gmail.com",
        "username": "cschlak",
        "password": "password",
        "first_name": "Curtis",
        "last_name": "Schlak",
        "coder": true
    }
    ```

    - Output:
    ```
    {
        "id": 1,
        "email": "Curtis.Schlak@gmail.com",
        "username": "cschlak",
        "password": "password",
        "first_name": "Curtis",
        "last_name": "Schlak",
        "coder": true
    }
    ```

- Delete Account (Delete Account)
 - Method: DELETE
    - Path: localhost:8000/accounts/{account_id}
    - Input:
    ```
    {
        "id": 1
    }
    ```

    - Output:
    ```
        true
    ```


##### Employer Search
  * INSERT API REQUEST METHODS



##### Coder Profile
  * INSERT API REQUEST METHODS




## Game

The Game Management APIs in this application offer a collection of endpoints to facilitate the administration and interaction with game-related data. These endpoints enable users to perform Create and Read operations on game records. Below, you'll find details on how to access these endpoints, along with examples of input and output JSON responses.


| Action                     | Method | URL                                      |
| -------------------------- | ------ | -----------------------------------------|
| Get all Games (protected)  | GET    | http://localhost:8000/games              |
| Get Game (protected)       | GET    | http://localhost:8000/games/{game_id}    |
| Create Game (protected)    | POST   | http://localhost:8000/game               |


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



### Team Roles and Responsibilities
- Jaime - Hiring Manager view - Frontend/CSS support
- Miguel  - Profile page view - Frontend/testing features (quality) - additional game support
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
