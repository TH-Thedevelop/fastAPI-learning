"use client"; // ← this line makes it a CLIENT component: runs in the browser,
//                 so it can use useState, onChange, clicks, etc.

import { useState } from "react";
import PokemonCard from "./PokemonCard";

// Receives the full list of names as a prop from the server page.
export default function PokemonSearch({ names }) {
  // useState: `query` holds the text; `setQuery` updates it and re-renders.
  const [query, setQuery] = useState("");

  // Filter the list live as the user types.
  const matches = names.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search pokemon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // update state on every keystroke
        style={{ padding: "8px 12px", width: "100%", marginBottom: 16, borderRadius: 8, border: "1px solid #ccc" }}
      />

      <p style={{ color: "#666" }}>{matches.length} result(s)</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
        {matches.slice(0, 60).map((name) => (
          <PokemonCard key={name} name={name} />
        ))}
      </div>
    </div>
  );
}
