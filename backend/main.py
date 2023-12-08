from fastapi import FastAPI
from .routers import auth, user, orders, materials, payment
from .database import engine
from . import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)
app.include_router(user.router)
app.include_router(orders.router)
app.include_router(materials.router)
app.include_router(payment.router)
