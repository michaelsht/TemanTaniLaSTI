from fastapi import status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from .. import schemas, models, utils
from ..database import get_db

router = APIRouter(
    prefix="/payment",
    tags=["Payment"]
)


@router.post("", response_model=schemas.PaymentSchema)
def make_payment(order_id: int, db: Session = Depends(get_db)):

    # Check if the order exists
    order = db.query(models.Order).filter(
        models.Order.order_id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")

    # Check if the order is not already paid
    if order.status == "Paid":
        raise HTTPException(status_code=400, detail="Order is already paid")
    price_per_unit = db.query(models.Material).filter(
        models.Material.material_id == order.material_id).first().price_per_unit
    # Create payment
    payment = models.Payment(
        order_id=order_id, amount=order.quantity_ordered * price_per_unit)
    db.add(payment)
    db.commit()
    db.refresh(payment)

    # Update order status to "paid"
    order.status = "Paid"
    db.commit()

    return payment
