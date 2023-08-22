from fastapi import APIRouter, Depends, Response
from queries.accounts import Error, AccountIn, AccountRepository, AccountOut
from typing import Union, List, Optional

router = APIRouter()






@router.post("/accounts", response_model=Union[AccountOut, Error])
def create_account(
    account: AccountIn,
    # response: Response,
    repo: AccountRepository = Depends()
):
    # response.status_code = 400
    return repo.create(account)





@router.get("/accounts", response_model=Union[List[AccountOut], Error])
def get_all(
    repo: AccountRepository = Depends(),
):
    return repo.get_all()





@router.put("/accounts/{account_id}", response_model=Union[AccountOut, Error])
def update_account(
    account_id: int,
    account: AccountIn,
    repo: AccountRepository = Depends(),
) -> Union[Error, AccountOut]:
    return repo.update(account_id, account)





@router.delete("/accounts/{account_id}", response_model=bool)
def delete_account(
    account_id: int,
    repo: AccountRepository = Depends(),
) -> bool:
    return repo.delete(account_id)





@router.get("/accounts/{account_id}", response_model=Optional[AccountOut])
def get_one_account(
    account_id: int,
    response: Response,
    repo: AccountRepository = Depends(),
) -> AccountOut:
    account = repo.get_one(account_id)
    if account is None:
        response.status_code = 404
    return account
