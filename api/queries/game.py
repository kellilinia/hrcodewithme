from pydantic import BaseModel
from typing import List, Optional
from queries.pool import pool


class GameIn(BaseModel):
    language: str
    question: str
    answer: str
    wrong_answer: str
    difficulty: str


class GameOut(BaseModel):
    id: int
    language: str
    question: str
    answer: str
    wrong_answer: str
    difficulty: str


class GameQueries:
    def create(self, game: GameIn) -> GameOut:
        # connect to db
        with pool.connection() as conn:
            # get a cursor(something to run sql in)
            with conn.cursor() as db:
                # run our insert
                result = db.execute(
                    """
                    INSERT INTO Game
                        (language, question, answer, wrong_answer, difficulty)
                    VALUES
                        (%s, %s, %s, %s, %s)
                        RETURNING   id;
                    """,
                    [
                        game.language,
                        game.question,
                        game.answer,
                        game.wrong_answer,
                        game.difficulty,
                    ],
                )
                id = result.fetchone()[0]
                # return new data
                old_data = game.dict()
                return GameOut(id=id, **old_data)

    def get_all(self) -> List[GameOut]:
        games = []
        # connect to db
        with pool.connection() as conn:
            # get a cursor
            with conn.cursor() as db:
                # execute the query
                db.execute(
                    """
                    SELECT id, language, question, answer, wrong_answer, difficulty
                    FROM Game;
                    """
                )
                # fetch all rows
                rows = db.fetchall()
                for row in rows:
                    game = GameOut(
                        id=row[0],
                        language=row[1],
                        question=row[2],
                        answer=row[3],
                        wrong_answer=row[4],
                        difficulty=row[5],
                    )
                    games.append(game)
        return games

    def get_by_id(self, game_id: int) -> Optional[GameOut]:
        # connect to db
        with pool.connection() as conn:
            # get a cursor
            with conn.cursor() as db:
                # execute the query
                db.execute(
                    """
                    SELECT id, language, question, answer, wrong_answer, difficulty
                    FROM Game
                    WHERE id = %s;
                    """,
                    [game_id],
                )
                # fetch the row
                row = db.fetchone()
                if row is not None:
                    game = GameOut(
                        id=row[0],
                        language=row[1],
                        question=row[2],
                        answer=row[3],
                        wrong_answer=row[4],
                        difficulty=row[5],
                    )
                    return game
                else:
                    return None
