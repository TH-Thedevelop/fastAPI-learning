// A reusable component. Give it a `name`, it renders a linked card.
// Notice: it takes "props" (an object of inputs) — here { name }.
export default function PokemonCard({ name }) {
  return (
    <a
      href={`/pokemon/${name}`}
      style={{
        display: "block",
        padding: "10px 14px",
        border: "1px solid #ddd",
        borderRadius: 8,
        textDecoration: "none",
        color: "inherit",
        textTransform: "capitalize",
      }}
    >
      {name}
    </a>
  );
}
