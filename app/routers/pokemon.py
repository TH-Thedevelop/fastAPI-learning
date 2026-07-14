from fastapi import APIRouter, HTTPException

from app.schemas import Pokemon, PokemonAbilities
from app.services import pokemon as service

router = APIRouter(prefix="/pokemon", tags=["pokemon"])


@router.get("")
def list_pokemon() -> list[str]:
    return service.list_pokemon_names()


@router.get("/{name}", response_model=Pokemon)
def get_pokemon(name: str):
    try:
        return service.get_pokemon(name)
    except Exception:
        raise HTTPException(status_code=404, detail=f"Pokemon '{name}' not found")


@router.get("/{name}/abilities", response_model=PokemonAbilities)
def get_pokemon_abilities(name: str):
    try:
        return service.get_pokemon_abilities(name)
    except Exception:
        raise HTTPException(status_code=404, detail=f"Pokemon '{name}' not found")
