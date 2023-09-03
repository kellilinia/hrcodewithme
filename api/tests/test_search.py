from authenticator import MyAuthenticator, authenticator
from fastapi.testclient import TestClient
from main import app
from queries.employers import SearchRepository

client = TestClient(app)


class MockSearchRepository:
    def employer_search(self, search_criteria):
        result = [
            {
                "coder_id": 1,
                "first_name": "test",
                "last_name": "test",
                "fullstack": True,
                "frontend": False,
                "backend": False,
                "javascript": False,
                "python": False,
                "java": False,
                "html": False,
                "coding_since": 2024
            },
            {
                "coder_id": 3,
                "first_name": "test",
                "last_name": "test",
                "fullstack": True,
                "frontend": False,
                "backend": False,
                "javascript": False,
                "python": True,
                "java": False,
                "html": False,
                "coding_since": 2024
            }
            ]
        return result


class MockAuthenticator(MyAuthenticator):
    def try_get_current_account_data(self, request):
        mock_account_data = {
            "access_token": "mock_access_token",
            "type": "Bearer",
            "account": "account",
        }
        return mock_account_data


def get_fake_account_data():
    return {"coder": False}


def test_get_employer_search():
    app.dependency_overrides[SearchRepository] = MockSearchRepository
    current_account_data = authenticator.get_current_account_data
    app.dependency_overrides[current_account_data] = get_fake_account_data

    # ARRANGE
    json = {
        "fullstack": True,
        "frontend": False,
        "backend": False,
        "javascript": False,
        "python": False,
        "java": False,
        "html": False,
        "coding_since": 2024
    }

    expected = [{
        "coder_id": 1,
        "first_name": "test",
        "last_name": "test",
        "fullstack": True,
        "frontend": False,
        "backend": False,
        "javascript": False,
        "python": False,
        "java": False,
        "html": False,
        "coding_since": 2024
        },
        {
        "coder_id": 3,
        "first_name": "test",
        "last_name": "test",
        "fullstack": True,
        "frontend": False,
        "backend": False,
        "javascript": False,
        "python": True,
        "java": False,
        "html": False,
        "coding_since": 2024
    }]
    # ACT
    response = client.post("/employer/search", json=json)

    # ASSERT
    assert response.status_code == 200
    assert response.json() == expected
