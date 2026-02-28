from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    if (): 1
    return {"Hello": "World!!!"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}
