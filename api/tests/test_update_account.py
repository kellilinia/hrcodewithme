from authenticator import authenticator
from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountRepository, AccountIn

client = TestClient(app)


class MockUpdateAccountRepository:
    def update(self, account_id: int, account: AccountIn):
        result = {
            "id": 6,
            "email": "test123@test.com",
            "username": "test123",
            "password": "test123",
            "first_name": "test123",
            "last_name": "test123",
            "coder": True
        }
        result.update(account.dict())
        return result


def get_fake_account_data():
    return {"coder": False}


def test_update_account():

    # ARRANGE
    app.dependency_overrides[AccountRepository] = MockUpdateAccountRepository
    current_account_data = authenticator.get_current_account_data
    app.dependency_overrides[current_account_data] = get_fake_account_data

    json = {
        "email": "test321@test.com",
        "username": "test321",
        "password": "test321",
        "first_name": "test321",
        "last_name": "test321",
        "coder": True
    }

    expected = {
        "id": 6,
        "email": "test321@test.com",
        "username": "test321",
        "password": "test321",
        "first_name": "test321",
        "last_name": "test321",
        "coder": True
    }

    # ACT
    response = client.put("/accounts/6", json=json)
    print(response.json())

    # ASSERT
    assert response.status_code == 200
    assert response.json() == expected
