#### STANDUP

### 9/11/23
## TEAM
- Kelly presented
    - Friday and over the weekend we completed deployment, visuals, and all endpoints excluding one, and try to figure out why one end point did not pass deployment
    - Today we will be the wrapping up the final endpoint, any last minute items, and getting our README documentation complete

## SOLO
- Same as group

### 9/06/23
## TEAM
- Silvano presented
    - Yesterday we worked on unit tests and front-end views
    - Today our priority will be to wrap up our unit tests
    - No blockers at this time
## SOLO
- Work on my unit test

### 9/05/23
## TEAM
- Kelly presented
    - Last Thursday/Friday we worked on our front end views, deployment, and unit tests
    - Today We will continue working on front end views and unit tests
    - No blockers at this time

## SOLO
- Work on my unit test

### 8/31/23
## TEAM
- Miguel presented
    - Yesterday we completed the Signup, Login, Logout for front-end including Auth
    - Today We will work on our individual endpoints, unit tests, and deployment
    - No blockers at this time

## SOLO
- Work on my front-end endpoints (React and Auth) - will need to complete this for the homepage and possibly an additional endpoint (maybe an edit page for account info)

### 8/30/23
## TEAM
- Silvano presented
- Yesterday: Completed frontend authentication, and worked on getting deployment set up
- Today: Continue work on our individual frontend endpoints, unit tests, setting up deployment
- No blockers

## SOLO
- Same as above since we worked as a group on the front-end React and auth

### 8/29/23
## TEAM
- Jaime presented
    - Yesterday we moved passed our blocker and worked on the final endpoints that were giving us troubles
    - Today we are finishing up our last endpoint and merge request, and are working on front-end together as a group
    - No blockers at this time

## SOLO
- Worked on Miguel's endpoints last night
- Researching front end with Jaime as paired programmers (React/authentication)

### 8/28/23
## TEAM
- Kelly presented
    - Friday we worked on remaining endpoints
    - Today we have one last endpoint to finish up, and need to protect it - plan on moving over to front end later today
    - We do have a blocker regarding our profile page endpoint - cannot create an account - will need assistance from a SEIR or an instructor on this

## SOLO
- Same as above since we worked as a group on Miguel's endpoint

### 8/25/23
## TEAM
- Miguel presented
    - Yesterday we went through the remainder of authentication, and protected our first few endpoints
    - Today we will complete the remainder of our endpoints and protect them
    - No blockers
## SOLO
- Will support team members with finishing up their endpoints and protecting them
### 8/24/23
## TEAM
- Silvano presented:
    - Yesterday we worked on authentication
    - Today we will work on wrapping up the endpoints and protecting them
    - No blockers

## SOLO
- Same as above since we worked together as a group on Authentication

### 8/23/23
## TEAM
- jaime presented:
     - Yesterday we worked on our endpoints
     - Today we will work on Authentication together as a group, and then move back over to our endpoints
     - No blockers

## SOLO
- Same as above since we worked together as a group on Authentication

### 8/22/23
## TEAM
- Kelly presented:
     - Yesterday we completed all endpoints for Signup and are still working on the remaining endpoints
     - Will move over to authentication after completion of endpoints
     - No barriers at this time

## SOLO
- Create merge request for the four Signup endpoints I created yesterday, get the data reviewed and approved for team's access
- Start shifting over toward authentication research

### 8/21/23
## TEAM
- Miguel presented:
    - Thursday we completed all checkpoints requested, including the Signup create account endpoint and a successful merge request and approval
    - Today we will go through any readings/videos, and all members will begin the outline of their endpoints
    - No barriers at this time

## SOLO
- Work on the remaining endpoints for Signup and read over any documentation I need to complete them

### 8/17/23
## TEAM
- Silvano presented:
    - Yesterday we completed the tables and error handled some minor typos
    - Today we will be getting our first endpoint done for "Signup"
    - No barriers at this time

## SOLO
- Same as above since we worked have been working as a group to set up our environment

### 8/16/23
## TEAM
- Jaime presented:
    - Yesterday we completed the initial setup for the yml file and creating the volume, image, and containers, and went through a merge request, bringing down the changes.
    - Today we will focus on setting up our tables and if time, will work on our first endpoint
    - No blockers at the moment.

## SOLO
- Same as above since we worked have been working as a group to set up our environment

### 8/15/23
## TEAM
- Kelly presented:
    - We set up the project environment as a team and added the necessary code in the yaml file, and we completed a merge request successfully
    - Tomorrow we will focus on error handling and finishing the initial setup of the project
    - We have a roadblock related to an error message for psychopg and the FastAPI container closing. We believe we may have found a way to resolve this issue.

## SOLO
- Same as above since we worked have been working as a group to set up our environment




#### DAILY JOURNAL

### 9/11/23
- Jaime and Silvano figured out the error we were receiving with one of the unit tests, are all errors are fixed
- Each team member went in and created a .env file and added the signing key and url, and make sure docker was back up and running
- I created README outline for team, then made a merge request which Jaime approved. I merged to main and everyone pulled to work on their README
- All team members worked together to complete documentation

### 9/10/23
- Worked on deployment with Jaime and Silvano, and we were able to error handle and complete it

### 9/6/23
- Completed my unit test for update data (PUT)
    - Created a file named test_update_account.py inside of the tests folder
    - Developed code inside of the test_update_account.py file to create mock account update data, and developed a unit test using pytest to verify that this is working for my endpoint
    - Ran my pytest inside of the fastAPI container terminal by typing "python -m pytest" and verifying that I received a green "passed" indication
    - Modified code inside of my test file to verify that a conflict in the request and response would flag a failed test, or a different account_id or coder = False would flag a failed test
- Created a merge request for my unit test and assigned Jaime to approve
- Make profile view if I have time

### 9/5/23
- work on unit test

### 9/2/23
- Went through Jaime's merge request for the coder toggle on SignUp, and verified that the toggle would work of coder = true and if coder = false. I approved the merge request and Jaime merged it to main. I then pulled down Jaime's changes.
- Went through my UpdateAccount.js file with Jaime and we finished the view. I created a merge request, Jaime approved, and I merged to main and pulled down the changes. There is an issue with the hashed password that will require me to go back in and add the necessary code.
- Jaime sent a merge request for the front-end employer search view, and I went through the merge request and approved and then pulled down the changes locally.

### 9/1/23
- Worked on my UpdateAccount.js file

### 8/31/23
- Miguel to send a merge request for the Signup, Signin, and Logout front-end React/Auth
- Work on individual endpoints
- Create unit tests
- Work on deployment

### 8/30/23
- Kelly started the front-end React/Authentication code by creating the SignupForm and putting in, and then we transitioned over the starting point to Miguel
- Miguel shared his screen and the group created the files and code together for React/Authentication on the SignupForm, LoginForm, and Logout, and modified the code App.js, and Nav.js as necessary
    - We ran into some misc. issues and were able to catch these by debugging and found out that each team member named the token function the same in the routers files
- Priorities for tomorrow are to work on front-end endpoints individually, unit tests, and deployment

### 8/29/23
- Miguel finishing up his endpoints and protecting them, and sent a merge request - approved by Silvano
- Silvano added try and accept error handling for his endpoints and sent his merge request - Jaime reviewed and approved
- Jaime and I to worked on front-end together for React and authentication, and got a simple skeleton together including the nav bar. Jaime sent out the merge request and I accepted it
- Silvano started going through the gitLab pipeline verification

### 8/28/23
- Worked on Miguel's endpoint errors
- Spoke to Paul, and he suggested we should create a unique identifier in the accounts table to Miguel to pull form
- Went through Silvano's endpoints (create game, game details, and list of games) and approved it
- Silvano merged his endpoint and all team members pulled the changes to local main and verified it's functionality
- Spent the evening working through Miguel's endpoints, and were finally able to fix the outstanding errors with Miguel's endpoint

### 8/25/23
- Supported team members with their endpoints
- Went through and approved Jaime's merge request for employer search

### 8/24/23
- Supported team members with their endpoints

### 8/23/23
- Kelly presented:
    - We worked on authentication today as a group
        - Created authentication.py file, creating the MyAuthenticator class with the get_account_data, get_account_getter, and get_hashed_password, get_account_data_for_cookie functions plus the authenticator variable provided in the jwtdown documentation
        - Generated signing key by typing in "openssl rand -hex 32" into command line
        - Added signing key data into the docker-compose.yml file
        - Updated fastapi version from 0.78.0 to 0.81.0 (since it was necessary to work with jwtdown), and added jwtdown-fastapi>=0.2.0 to file
        -  Added the function get_one_username in the queries/accounts.py file (added due to an error i was receiving regarding the username equaling an integer - this was my way to work around the problem)
        - Created the async function get_token to be able to protect necessary endpoints
        - protected the get_all, get_one_account, update_account, and delete_account endpoints
        - Verified that all endpoints worked appropriately in swagger, with the jwt generation, and the requirement for someone to be signed in to see the account details, list, update the account, or delete the account
        - Verified all information with the team
        - git added, committed, and pushed to my origin branch
        - Created a merge request for the authentication and protected endpoints
        - Merge request was verified by Silvano and approved
        - I merged the updated information from my branch Signin to the main, and all members pulled the updated main to their local and verified that the updates were working

### 8/22/23
Focus for tomorrow:
- Mob code with group on authentication

### 8/21/23
- Group discussed our priorities for the day and the week
- I removed "from psycopg.errors import ForeignKeyViolation" from routers/accounts_routers.py file since it was not in use
- I added a response_model for AccountsOut and a response_model for Error to the routers/accounts_routers.py file
- Added Error model in queries/accounts.py file
- Commented out the error handling data for now, so all team members can decide how they wish to error handle at a later time
- Created FastAPI endpoint GET request for getting a list of accounts
- Created FastAPI endpoint GET request for getting an account's details
- Created FastAPI endpoint PUT request for updating an account
- Created FastAPI endpoint DELETE request for deleting an account
- Verified that all endpoints are working in Swagger
- Added account_in_to_out function to queries/accounts.py file
- Added record_to_account_out function to queries/accounts.py file
- Added some minor error handling, but will go over this with the team to optimize accordingly
Focus for tomorrow:
- Submit merge request for Account endpoints list of accounts, account details, updating account, and deleting account
- Read through documentation and catch up on any other material
- Start researching authentication

### 8/17/23
- Kelly shared her screen and team worked together to create first FastAPI endpoint for Signup, which was verified in swagger at localhost:8000/docs by sending a POST request successfully with the creation of unique ids:
    - Created "routers" folder, and create a accounts_routers.py file, with a POST request for the path /accounts
    - Created a pool.py file, and brought in pool import and URL (fixed the URL by removing the .get, which was the final correction for the recurring error we kept getting off and on)
    - Created the accounts.py file with the models AccountIn, AccountOut, AccountRepository
- Created a merge request with proper documentation (Kelly requested this)
- Merge request was tested and accepted (by Jaime)
- Kelly merged to main and team pulled updated file
- Team updated leadership over the completion of tasks for this week

### 8/16/23
- Created postgreSQL tables as a a group (Jaime created a document for the tables and we went through and verified the data - we used this document to create the table, and verify in Beekeeper)
    - accounts
    - employers
    - coders
    - game
- Ran into issues with FastAPI container closing out on Jaime's end - we were able to problem solve this by checking the container error messages, and using print statements to figure out why we were getting a psycopg error - it was related to a few errors in the table file (a "," on the line before closing [], and used incorrect syntax on PRIMARY KEY reference)
- Successfully went through a merge request as a team (Jaime sent request)
- Successfully went through a merge request approval as a team (Silvano approved it)
- Successfully brought changes to main to all team member's local
- Successfully ran containers and checked database for tables
Focus for tomorrow:
- Update changes to endpoints requested by leads
- Go through necessary documentation over FastAPI endpoints
- Create Signup endpoint together as a group and successfully make a merge request and approval for all team members to pull from

### 8/15/23
- We set up our environment as a team, cloning the project and creating a local repo
- Jaime shared her screen and we added the necessary code into the requirements.txt file, added code into the yaml file, and created a queries folder with the accounts.py file, and a journals folder for each team member to track the project.
- We created the volume, image, and containers in Docker
    - Ran into issues with pysychopg error and the FastAPI container kept closing - We fixed the url path specified in the yml file and in the account.py file and this resolved the error.
    - Once error was fixed each team member brought down the change

### 8/14/23
- Finished up any last minute designing pieces
- Discussed our project idea, wireframe, design, including endpoints with leads to get their sign off on the setup
- Made requested adjustments to the project design
- Kelly developed a git cheatsheet for the team
- The team practiced git commands for branches, merge requests, merge approvals, etc.

### 8/7/23 - 8/11/23
- During the first week we:
    - Introduced ourselves and got to know once another
    - Brainstormed on project ideas, then typed them up as a team writing the pros and cons of each, and selected what we thought was the best project idea as a group
    - Discussed how each team member will support the others with their specific skills
    - Discussed "Code of Conduct", including:
        - Roles and Responsibilities for each team member
        - How will you communicate with each other?
        - How will the team make decisions?
        - How will the team handle conflict? (Think 2-3 step process)
        - How will accountability be addressed/measured?
        - How will DEI be part of the team culture?
        - How will respect be shown/given to each member?
        - How will the team support each other?
        - How will the team share code with each other and what code is allowed to be shared with each other?
    - Pitched the selected idea to the cohort (Kelly pitched this)
    - Created our wireframe using excalidraw
    - Forked the project skeleton where we will build our project from (Silvano created our setup on gitLab)
    - Created the API design, including an outline of each of our endpoints
    - Decided as a team what our MVP is for the project (Jaime submitted this)
        - MVP:
            - If unauthenticated, I will be prompted to sign in or sign up.
            - I can create an account.
            - As a new coder, I can login as a coder, and view the logged-in view of - homepage.
            - As a new employer, I can login and view the search page
            - As a coder, I can update my profile.
            - As a coder, I can start a coding game.
            - As a coder, I can end the game, push the code, thumbs up opponent.
            - As a coder, I can view my coding history.
            - As an employer, I can search for coders who are open to work using search filters (languages, tech stack, coding year).
            - As an employer, I can view coder profiles and coding history.
        - Stretch goals:
            - Will we have functionality to thumbs up and view those profiles.
            - Coders will have option to select which codes to display in history.
            - Coders will be able to play against a CPU.
            - As an employer, I can save a search and delete a saved search.
            - Beautify the frontend!
    - Created issues in gitLab for our features
