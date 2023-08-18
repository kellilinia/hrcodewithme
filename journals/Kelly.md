#### STANDUP

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

### 8/17/23


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
