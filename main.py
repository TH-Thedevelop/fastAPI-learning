from fastapi import FastAPI

from app.routers import pokemon

app = FastAPI(title="Pokedex API")

app.include_router(pokemon.router)


@app.get("/")
def read_root():
    return {"Hello": "World"}
