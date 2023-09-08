from authenticator import authenticator, MyAuthenticator
from fastapi.testclient import TestClient
from main import app
from queries.profile import ProfileRepository, ProfileIn

client = TestClient(app)


class MockUpdateProfileRepository:
    def update_profile(self, coder_id: int, profile: ProfileIn):
        result = {
            "coder_id": 3,
            "avatar_url": "string",
            "bio": "string",
            "git_url": "string",
            "personal_interests": "string",
            "coding_since": 2021,
            "open_to_work": False,
            "fullstack": False,
            "frontend": False,
            "backend": False,
            "javascript": False,
            "python": False,
            "java": False,
            "html": False
        }
        result = {**result, **profile.dict()}
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


def test_update_profile():

    # ARRANGE
    app.dependency_overrides[ProfileRepository] = MockUpdateProfileRepository
    current_account_data = authenticator.get_current_account_data
    app.dependency_overrides[current_account_data] = get_fake_account_data

    json = {
        "coder_id": 3,
        "avatar_url": "string",
        "bio": "string",
        "git_url": "string",
        "personal_interests": "string",
        "coding_since": 2021,
        "open_to_work": True,
        "fullstack": True,
        "frontend": True,
        "backend": True,
        "javascript": False,
        "python": False,
        "java": False,
        "html": False
    }

    expected = {
        "coder_id": 3,
        "avatar_url": "string",
        "bio": "string",
        "git_url": "string",
        "personal_interests": "string",
        "coding_since": 2021,
        "open_to_work": True,
        "fullstack": True,
        "frontend": True,
        "backend": True,
        "javascript": False,
        "python": False,
        "java": False,
        "html": False
    }

    # ACT
    response = client.put("/profile/3", json=json)
    print(response.json())

    # ASSERT
    assert response.status_code == 200
    assert response.json() == expected
