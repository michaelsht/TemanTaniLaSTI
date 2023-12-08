from fastapi import FastAPI
from .router import router
from .database import engine
from . import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router, tags=["Router"])