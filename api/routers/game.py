from fastapi import APIRouter, Depends, HTTPException, Request
from queries.accounts import AccountOut
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from typing import List
from queries.game import GameIn, GameQueries, GameOut


class AccountToken(Token):
    account: AccountOut


router = APIRouter()


@router.get("/token", response_model=AccountToken | None)
async def get_token_game(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.post("/game", response_model=GameOut)
def create_game(
    Game: GameIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: GameQueries = Depends(),
):
    return repo.create(Game)


@router.get("/games", response_model=List[GameOut])
async def get_all_games(
    account_data: dict = Depends(authenticator.get_current_account_data),
    dict: GameQueries = Depends(),
):
    return dict.get_all_games()


@router.get("/games/{game_id}", response_model=GameOut)
async def get_game(
    game_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    game_queries = GameQueries()
    game = game_queries.get_by_id(game_id)
    if game is None:
        raise HTTPException(status_code=404, detail="Game not found")
    return game
