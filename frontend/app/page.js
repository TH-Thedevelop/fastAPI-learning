import { getPokemonList } from "./lib";

// A Server Component: it can be async and fetch data directly.
export default async function HomePage() {
  const names = await getPokemonList();

  return (
    <div>
      <p>Click a pokemon to see its details:</p>
      <ul>
        {names.slice(0, 30).map((name) => (
          <li key={name}>
            {/* Each links to /pokemon/<name>, handled by the [name] page */}
            <a href={`/pokemon/${name}`}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
