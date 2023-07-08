from datetime import date
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from utils import get_db_handle, get_redis_client
from bson.json_util import dumps
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
import json


class Events(BaseModel):
    club_name: str
    title: str
    img: str
    date: str
    description: str


router = APIRouter(
    prefix="/api/events",
    tags=["events"],
    responses={404: {"description": "Not found"}},
)


@router.get("/getcomment/{comment_id}")
async def get_comment(comment_id: str):
    db, _ = get_db_handle()
    collection = db['comments']
    comment_data = collection.find({"comment_id": comment_id})
    if not comment_data:
        raise HTTPException(status_code=404, detail="Comment not found")
    json_data = dumps(comment_data)
    return json.loads(json_data)


@router.get("/allcomments")
async def get_comments():
    # db, _ = get_db_handle()
    # collection = db['comments']
    # comment_data = collection.find()
    # if not comment_data:
    #     raise HTTPException(status_code=404, detail="Comment not found")
    # json_data = dumps(comment_data)
    return json.loads(json_data)
