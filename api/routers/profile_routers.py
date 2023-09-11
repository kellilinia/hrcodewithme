from fastapi import APIRouter, Depends, HTTPException, Request, Response
from jwtdown_fastapi.authentication import Token
from typing import Union, List, Optional
from authenticator import authenticator
from queries.accounts import AccountOut
from queries.profile import (
    Error,
    ProfileIn,
    ProfileOut,
    ProfileRepository,
)


class AccountToken(Token):
    account: AccountOut


router = APIRouter()


@router.get("/token", response_model=AccountToken | None)
async def get_token_profile(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.get("/profiles", response_model=List[ProfileOut])
async def get_all_profiles(
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    repo = ProfileRepository()
    try:
        profiles = repo.get_all_profiles()
        return profiles
    except Exception as e:
        print(e)
        raise HTTPException(status_code=400, detail=str(e))


@router.put("/profile/{coder_id}", response_model=Union[ProfileOut, Error])
def update_profile(
    coder_id: int,
    profile: ProfileIn,
    repo: ProfileRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> Union[Error, ProfileOut]:
    return repo.update_profile(coder_id, profile)


@router.post("/profile")
def create_profile(
    profile: ProfileIn, repo: ProfileRepository = Depends()
) -> Union[ProfileOut, Error]:
    # Proceed with profile creation if account exists
    return repo.create_profile(profile)


@router.get("/profile/{account_id}", response_model=Optional[ProfileOut])
def get_one_profile(
    coder_id: int,
    response: Response,
    repo: ProfileRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> ProfileOut:
    profile = repo.get_one_profile(coder_id)
    if profile is None:
        response.status_code = 404
    return profile
