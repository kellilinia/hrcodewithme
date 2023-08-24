steps = [

    [
        # "Up" SQL statement
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            email VARCHAR(254) NOT NULL UNIQUE,
            username VARCHAR(20) NOT NULL UNIQUE,
            password VARCHAR(250) NOT NULL,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            coder BOOLEAN
        );


        """,
        # "Down" SQL statement
        """
        DROP TABLE accounts;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE coders (
            coder_id INT REFERENCES accounts(id) UNIQUE,
            avatar_url VARCHAR(254) UNIQUE,
            bio TEXT,
            git_url VARCHAR(254),
            personal_interests TEXT,
            coding_since INT,
            open_to_work BOOLEAN,
            fullstack BOOLEAN,
            frontend BOOLEAN,
            backend BOOLEAN,
            javascript BOOLEAN,
            python BOOLEAN,
            java BOOLEAN,
            html BOOLEAN
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE coders;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE employers (
            employer_id INT REFERENCES accounts(id),
            company VARCHAR(254)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE employers;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE game (
            game_id SERIAL PRIMARY KEY NOT NULL,
            player_id INT REFERENCES coders(coder_id),
            avatar_url VARCHAR(254) REFERENCES coders(avatar_url),
            difficulty VARCHAR(10) NOT NULL,
            question TEXT NOT NULL,
            right_answers TEXT NOT NULL,
            wrong_answers TEXT NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE game;
        """
    ],
]
