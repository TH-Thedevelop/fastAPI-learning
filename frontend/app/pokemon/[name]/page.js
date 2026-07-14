import { getPokemon } from "../../lib";

// `params.name` comes from the [name] folder in the path.
export default async function PokemonPage({ params }) {
  const { name } = await params; // Next.js 15: params is async, await it first
  const poke = await getPokemon(name);

  return (
    <div>
      <h2 style={{ textTransform: "capitalize" }}>
        #{poke.id} {poke.name}
      </h2>

      <p><strong>Type:</strong> {poke.poke_type.join(", ")}</p>
      <p><strong>Abilities:</strong> {poke.abilities.join(", ")}</p>

      <h3>Stats</h3>
      {Object.entries(poke.stats).map(([stat, value]) => (
        <div key={stat} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <span style={{ width: 130 }}>{stat}</span>
          {/* bar width scaled: max base stat is ~255 */}
          <span style={{ background: "#4caf50", height: 14, width: value, borderRadius: 3 }} />
          <span>{value}</span>
        </div>
      ))}

      <p style={{ marginTop: 20 }}><a href="/">← back</a></p>
    </div>
  );
}
