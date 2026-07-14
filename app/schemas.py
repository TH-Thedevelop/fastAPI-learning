from pydantic import BaseModel


class Pokemon(BaseModel):
    name: str
    ability: str


class PokemonAbilities(BaseModel):
    name: str
    total_abilities: int
    abilities: list[str]
