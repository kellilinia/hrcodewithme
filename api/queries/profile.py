from queries.pool import pool
from pydantic import BaseModel
from typing import Union, Optional, List
from fastapi import HTTPException


class Error(BaseModel):
    message: str


class ProfileIn(BaseModel):
    coder_id: int
    avatar_url: str
    bio: str
    git_url: str
    personal_interests: str
    coding_since: int
    open_to_work: bool = False
    fullstack: bool = False
    frontend: bool = False
    backend: bool = False
    javascript: bool = False
    python: bool = False
    java: bool = False
    html: bool = False


class ProfileOut(BaseModel):
    coder_id: int
    avatar_url: str
    bio: str
    git_url: str
    personal_interests: str
    coding_since: int
    open_to_work: bool
    fullstack: bool
    frontend: bool
    backend: bool
    javascript: bool
    python: bool
    java: bool
    html: bool


class ProfileRepository:
    def create_profile(self, profile: ProfileIn) -> Union[ProfileOut, Error]:
        # Connect to the database
        with pool.connection() as conn:
            with conn.cursor() as db:
                # Run our INSERT statement
                try:
                    db.execute(
                        """
                        INSERT INTO coders
                            (coder_id,
                            avatar_url,
                            bio,
                            git_url,
                            personal_interests,
                            coding_since,
                            open_to_work,
                            fullstack,
                            frontend,
                            backend,
                            javascript,
                            python,
                            java,
                            html)
                        VALUES
                        (%s,
                        %s,
                        %s,
                        %s,
                        %s,
                        %s,
                        %s,
                        %s,
                        %s,
                        %s,
                        %s,
                        %s,
                        %s,
                        %s)
                        RETURNING coder_id,
                            avatar_url,
                            bio,
                            git_url,
                            personal_interests,
                            coding_since,
                            open_to_work,
                            fullstack,
                            frontend,
                            backend,
                            javascript,
                            python,
                            java,
                            html;
                        """,
                        [
                            profile.coder_id,
                            profile.avatar_url,
                            profile.bio,
                            profile.git_url,
                            profile.personal_interests,
                            profile.coding_since,
                            profile.open_to_work,
                            profile.fullstack,
                            profile.frontend,
                            profile.backend,
                            profile.javascript,
                            profile.python,
                            profile.java,
                            profile.html,
                        ],
                    )
                except Exception as e:
                    print(e)
                    raise HTTPException(status_code=400, detail=str(e))
                new_coder_id = db.fetchone()
                conn.commit()
                print(new_coder_id)
                return self.coder_profile_in_to_out(new_coder_id, profile)

    def coder_profile_in_to_out(self, coder_id: int, profile: ProfileIn):
        profile_data = profile.dict()
        return ProfileOut(**profile_data)

    def get_one_profile(self, coder_id: int) -> Optional[ProfileOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                            SELECT c.coder_id,
                            c.avatar_url,
                            c.bio,
                            c.git_url,
                            c.personal_interests,
                            c.coding_since,
                            c.open_to_work,
                            c.fullstack,
                            c.frontend,
                            c.backend,
                            c.javascript,
                            c.python,
                            c.java,
                            c.html
                            FROM coders c
                            INNER JOIN accounts a
                            ON (c.coder_id = a.id)
                            WHERE coder_id = %s
                            """,
                        [coder_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_profile_out(record)
        except Exception as e:
            print(e)
            return {"message": "unable to get profile"}

    def record_to_profile_out(self, record):
        return ProfileOut(
            coder_id=record[0],
            avatar_url=record[1],
            bio=record[2],
            git_url=record[3],
            personal_interests=record[4],
            coding_since=record[5],
            open_to_work=record[6],
            fullstack=record[7],
            frontend=record[8],
            backend=record[9],
            javascript=record[10],
            python=record[11],
            java=record[12],
            html=record[13],
        )

    def get_all_profiles(self) -> Union[Error, List[ProfileOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    query = """
                        SELECT coder_id,
                            avatar_url,
                            bio,
                            git_url,
                            personal_interests,
                            coding_since,
                            open_to_work,
                            fullstack,
                            frontend,
                            backend,
                            javascript,
                            python,
                            java,
                            html
                        FROM coders
                        INNER JOIN accounts
                        ON coders.coder_id = accounts.id
                        ORDER BY coder_id
                    """
                    db.execute(query)
                    records = db.fetchall()
                    return [
                        ProfileOut(
                            coder_id=record[0],
                            avatar_url=record[1],
                            bio=record[2],
                            git_url=record[3],
                            personal_interests=record[4],
                            coding_since=record[5],
                            open_to_work=record[6],
                            fullstack=record[7],
                            frontend=record[8],
                            backend=record[9],
                            javascript=record[10],
                            python=record[11],
                            java=record[12],
                            html=record[13],
                        )
                        for record in records
                    ]
        except Exception as e:
            print("An error occurred:", e)
            return Error(message="Unable to get profile list")

    def update_profile(
        self, coder_id: int, profile: ProfileIn
    ) -> Union[ProfileOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE coders
                        SET avatar_url = %s,
                            bio = %s,
                            git_url = %s,
                            personal_interests = %s,
                            coding_since = %s,
                            open_to_work = %s,
                            fullstack = %s,
                            frontend = %s,
                            backend = %s,
                            javascript = %s,
                            python = %s,
                            java = %s,
                            html = %s
                        WHERE coder_id = %s
                        """,
                        [
                            profile.avatar_url,
                            profile.bio,
                            profile.git_url,
                            profile.personal_interests,
                            profile.coding_since,
                            profile.open_to_work,
                            profile.fullstack,
                            profile.frontend,
                            profile.backend,
                            profile.javascript,
                            profile.python,
                            profile.java,
                            profile.html,
                            coder_id,
                        ],
                    )
                    return self.coder_profile_in_to_out(coder_id, profile)
        except Exception as e:
            print(e)
            return {"message": "unable to update profile"}
