from queries.pool import pool
from pydantic import BaseModel

class AccountIn(BaseModel):
    email: str
    username: str
    password: str
    first_name: str
    last_name: str
    coder: bool

class AccountOut(BaseModel):
    id: int
    email: str
    username: str
    password: str
    first_name: str
    last_name: str
    coder: bool

class AccountRepository:
    def create(self, account: AccountIn) -> AccountOut:
        # connect to database
        with pool.connection() as conn:
            # get a cursor (something to run SQL with)
            with conn.cursor() as db:
                # Run our INSERT statement
                result = db.execute(
                    """
                    INSERT INTO accounts
                    (email, username, password, first_name, last_name, coder)
                    VALUES
                    (%s, %s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        account.email,
                        account.username,
                        account.password,
                        account.first_name,
                        account.last_name,
                        account.coder
                    ]
                )
                id = result.fetchone()[0]
                old_data = account.dict()
                return AccountOut(id=id, **old_data)
                # Return new data
