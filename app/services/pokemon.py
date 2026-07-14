"""Business logic for talking to the pokebase library.

pokebase is a synchronous, blocking library, so these are plain `def`
functions. FastAPI runs `def` route handlers in a threadpool, so they
won't block the event loop.
"""

import pokebase as pb


def get_pokemon(name: str) -> dict:
    """Return a single pokemon's name and primary ability."""
    pokemon = pb.pokemon(name)
    abilities = [pair.ability.name for pair in pokemon.abilities]
    poke_type = [type_pair.type.name for type_pair in pokemon.types]
    stats = {s.stat.name: s.base_stat for s in pokemon.stats}
    return {
        "id": pokemon.id,
        "name": pokemon.name,
        "abilities": abilities,
        "poke_type": poke_type,
        "hp": stats["hp"],
        "stats": stats,
    }


def get_pokemon_abilities(name: str) -> dict:
    """Return all abilities for a pokemon."""
    pokemon = pb.pokemon(name)
    abilities = [pair.ability.name for pair in pokemon.abilities]
    return {
        "name": name,
        "total_abilities": len(abilities),
        "abilities": abilities,
    }


def list_pokemon_names() -> list[str]:
    """Return the names of every pokemon in the API."""
    resource_list = pb.APIResourceList("pokemon")
    return [poke.get("name") for poke in resource_list]
