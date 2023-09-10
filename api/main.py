from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import accounts_routers, employers_routers, game, profile_routers
from authenticator import authenticator
import os

app = FastAPI()
app.include_router(accounts_routers.router)
app.include_router(authenticator.router)
app.include_router(employers_routers.router)
app.include_router(game.router)
app.include_router(profile_routers.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000"),
        "https://mintyzebras.gitlab.io/code-with-me",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "You hit the root path!"}


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00",
        }
    }
