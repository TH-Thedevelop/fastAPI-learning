import { getPokemonList } from "./lib";
import PokemonSearch from "./components/PokemonSearch";

// SERVER component: fetches data on the server (fast, no loading spinner)...
export default async function HomePage() {
  const names = await getPokemonList();

  // ...then passes it to a CLIENT component that adds interactivity.
  return (
    <div>
      <p>Search and click a pokemon:</p>
      <PokemonSearch names={names} />
    </div>
  );
}
