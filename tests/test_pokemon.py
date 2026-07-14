from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}


def test_get_pokemon():
    response = client.get("/pokemon/charmander")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "charmander"
    assert "ability" in data


def test_get_pokemon_abilities():
    response = client.get("/pokemon/squirtle/abilities")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "squirtle"
    assert data["total_abilities"] == len(data["abilities"])


def test_unknown_pokemon_returns_404():
    response = client.get("/pokemon/not-a-real-pokemon")
    assert response.status_code == 404
