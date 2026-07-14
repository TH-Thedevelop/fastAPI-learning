// The root layout wraps EVERY page. `children` is the current page.
export const metadata = { title: "Pokedex" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "2rem auto", padding: "0 1rem" }}>
        <h1>
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>Pokedex</a>
        </h1>
        {children}
      </body>
    </html>
  );
}
