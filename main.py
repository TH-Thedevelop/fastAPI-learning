from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import pokemon

app = FastAPI(title="Pokedex API")

# Allow a local Next.js dev server to call this API from the browser.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pokemon.router)


@app.get("/")
def read_root():
    return {"Welcome to the Pokedex API": "Visit /docs to learn more"}
