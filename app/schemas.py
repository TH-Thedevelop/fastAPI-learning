from pydantic import BaseModel


class Pokemon(BaseModel):
    id: int
    name: str
    abilities: list[str]
    poke_type: list[str]
    hp: int
    stats: dict[str, int]



class PokemonAbilities(BaseModel):
    name: str
    total_abilities: int
    abilities: list[str]

