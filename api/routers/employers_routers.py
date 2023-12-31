from typing import List
from fastapi import APIRouter, Depends, HTTPException, Request
from queries.employers import SearchOut, SearchIn, SearchRepository
from queries.accounts import AccountOut
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator


class AccountToken(Token):
    account: AccountOut


router = APIRouter()


def is_employer(
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    coder = account_data.get("coder")
    if coder is False:
        return account_data
    else:
        raise HTTPException(
            status_code=403,
            detail="You do not have an employer account to access this page.",
        )


@router.get("/token", response_model=AccountToken | None)
async def get_token_emp(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data),
    authenticated_employer: dict = Depends(is_employer)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.post("/employer/search", response_model=List[SearchOut])
def employer_search(
    search_criteria: SearchIn,
    repo: SearchRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    authenticated_employer: dict = Depends(is_employer),
):
    try:
        search_results = repo.employer_search(search_criteria)
        return search_results
    except Exception as e:
        print(e)
        raise HTTPException(status_code=400, detail=str(e))
