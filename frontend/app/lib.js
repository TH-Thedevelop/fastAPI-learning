// All calls to your FastAPI backend live here.
const API = "http://localhost:8000";

// Get the list of every pokemon name -> hits GET /pokemon
export async function getPokemonList() {
  const res = await fetch(`${API}/pokemon`);
  if (!res.ok) throw new Error("Failed to load pokemon list");
  return res.json(); // -> ["bulbasaur", "ivysaur", ...]
}

// Get one pokemon's details -> hits GET /pokemon/{name}
export async function getPokemon(name) {
  const res = await fetch(`${API}/pokemon/${name}`);
  if (!res.ok) throw new Error(`Pokemon "${name}" not found`);
  return res.json(); // -> { id, name, abilities, poke_type, hp, stats }
}
