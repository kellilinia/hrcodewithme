from fastapi.testclient import TestClient
from main import app
from queries.game import GameQueries, GameOut
from typing import List
from authenticator import MyAuthenticator, authenticator

client = TestClient(app)


class EmptyGameQueries(GameQueries):
    def get_all_games(self) -> List[GameOut]:
        result = [
            {
                "id": 2,
                "language": "Python",
                "question": "What is the result of '3 + 2 * 4' in Python?",
                "answer": "The result is 11.",
                "wrong_answer": "The result is 20.",
                "difficulty": "Easy",
            }
        ]
        return result


class MockAuthenticator(MyAuthenticator):
    def try_get_current_account_data(self):
        mock_account_data = {
            "access_token": "mock_access_token",
            "type": "Bearer",
            "account": "account",
        }
        return mock_account_data


def get_fake_account_data():
    return {}


def test_get_all_games():
    app.dependency_overrides[GameQueries] = EmptyGameQueries
    current_account_data = authenticator.get_current_account_data
    app.dependency_overrides[current_account_data] = get_fake_account_data

    expected_data = [
        {
            "id": 2,
            "language": "Python",
            "question": "What is the result of '3 + 2 * 4' in Python?",
            "answer": "The result is 11.",
            "wrong_answer": "The result is 20.",
            "difficulty": "Easy",
        }
    ]
    response = client.get("/games")

    print(response.json())

    assert response.status_code == 200
    assert response.json() == expected_data
