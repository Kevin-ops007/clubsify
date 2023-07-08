from utils import get_db_handle
from fastapi import FastAPI, HTTPException
from api import events, clubs
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(events.router)
app.include_router(clubs.router)
# app.include_router(comments.router)


@app.get("/")
async def read_root():
    return {"Hello": "World"}
