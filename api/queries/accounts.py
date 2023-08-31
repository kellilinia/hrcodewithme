from queries.pool import pool
from pydantic import BaseModel
from typing import Union, List, Optional


class Error(BaseModel):
    message: str


class DuplicateAccountError(ValueError):
    pass


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


class AccountOutWithPassword(AccountOut):
    password: str


class AccountRepository:
    def get_one(self, account_id: int) -> Optional[AccountOut]:
        try:
            # connect to database
            with pool.connection() as conn:
                # get a cursor (something to run SQL with)
                with conn.cursor() as db:
                    # Run our SELECT statement
                    result = db.execute(
                        """
                        SELECT id,
                        email,
                        username,
                        password,
                        first_name,
                        last_name,
                        coder
                          FROM accounts
                        WHERE id = %s
                        """,
                        [account_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_account_out(record)
        except Exception as e:
            print(e)
            return {"message": "unable to get account"}

    def get_one_username(self, username: str) -> Optional[AccountOut]:
        try:
            # connect to database
            with pool.connection() as conn:
                # get a cursor (something to run SQL with)
                with conn.cursor() as db:
                    # Run our SELECT statement
                    result = db.execute(
                        """
                        SELECT id,
                        email,
                        username,
                        password,
                        first_name,
                        last_name,
                        coder
                          FROM accounts
                        WHERE username = %s
                        """,
                        [username],
                    )
                    record = result.fetchone()
                    print(record)
                    if record is None:
                        return None
                    return self.record_to_account_out(record)
        except Exception as e:
            print(e)
            return {"message": "unable to get account"}

    def delete(self, account_id: int) -> bool:
        try:
            # connect to database
            with pool.connection() as conn:
                # get a cursor (something to run SQL with)
                with conn.cursor() as db:
                    # Run our SELECT statement
                    db.execute(
                        """
                        DELETE FROM accounts
                        WHERE id = %s
                        """,
                        [account_id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def update(
        self, account_id: int, account: AccountIn
    ) -> Union[AccountOut, Error]:
        try:
            # connect to database
            with pool.connection() as conn:
                # get a cursor (something to run SQL with)
                with conn.cursor() as db:
                    # Run our SELECT statement
                    db.execute(
                        """
                        UPDATE accounts
                        SET email = %s
                          , username = %s
                          , password = %s
                          , first_name = %s
                          , last_name = %s
                          , coder = %s
                        WHERE id = %s
                        """,
                        [
                            account.email,
                            account.username,
                            account.password,
                            account.first_name,
                            account.last_name,
                            account.coder,
                            account_id,
                        ],
                    )
                    return self.account_in_to_out(account_id, account)
        except Exception as e:
            print(e)
            return {"message": "unable to update"}

    def get_all(self) -> Union[Error, List[AccountOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    # Run our SELECT statement
                    result = db.execute(
                        """
                        SELECT id,
                        email,
                        username,
                        password,
                        first_name,
                        last_name,
                        coder
                        FROM accounts
                        ORDER BY id;
                        """
                    )

                    return [
                        AccountOut(
                            id=record[0],
                            email=record[1],
                            username=record[2],
                            password=record[3],
                            first_name=record[4],
                            last_name=record[5],
                            coder=record[6],
                        )
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "unable to get all accounts"}

    def create(self, account: AccountIn) -> AccountOutWithPassword:
        try:
            # connect to database
            with pool.connection() as conn:
                # get a cursor (something to run SQL with)
                with conn.cursor() as db:
                    # Run our INSERT statement
                    result = db.execute(
                        """
                        INSERT INTO accounts
                        (email,
                        username,
                        password,
                        first_name,
                        last_name,
                        coder)
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
                            account.coder,
                        ],
                    )
                    id = result.fetchone()[0]
                    # old_data = account.dict()
                    # return {"message": "error!"}
                    # return AccountOut(id=id, **old_data)
                    # Return new data
                    return self.account_in_to_out(id, account)
        except Exception:
            return {"message": "unable to create"}

    def account_in_to_out(self, id: int, account: AccountIn):
        old_data = account.dict()
        return AccountOut(id=id, **old_data)

    def record_to_account_out(self, record):
        return AccountOut(
            id=record[0],
            email=record[1],
            username=record[2],
            password=record[3],
            first_name=record[4],
            last_name=record[5],
            coder=record[6],
        )
