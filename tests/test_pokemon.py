from fastapi.testclient import TestClient

from main import app

client = TestClient(app)


def test_read_root():
    response = client.get("/")
    assert response.status_code == 200


def test_get_pokemon():
    response = client.get("/pokemon/charmander")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "charmander"
    assert isinstance(data["abilities"], list)
    assert isinstance(data["poke_type"], list)
    assert data["hp"] == data["stats"]["hp"]


def test_get_pokemon_abilities():
    response = client.get("/pokemon/squirtle/abilities")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "squirtle"
    assert data["total_abilities"] == len(data["abilities"])


def test_unknown_pokemon_returns_404():
    response = client.get("/pokemon/not-a-real-pokemon")
    assert response.status_code == 404
