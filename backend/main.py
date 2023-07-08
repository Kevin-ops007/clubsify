from utils import get_db_handle
from fastapi import FastAPI, HTTPException
from api import events, clubs


app = FastAPI()

app.include_router(events.router)
# app.include_router(clubs.router)
# app.include_router(comments.router)


@app.get("/")
async def read_root():
    return {"Hello": "World"}
