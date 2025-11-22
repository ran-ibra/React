import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Row, Col } from "react-bootstrap";
import { increaseQty, decreaseQty, removeFromCart } from "../store/cartSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <Container className="py-5">
        <h2>Your Cart is Empty</h2>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <Row key={item.id} className="align-items-center my-3 border-bottom pb-3">
          <Col md={2}>
            <img src={item.thumbnail} className="img-fluid rounded" />
          </Col>

          <Col md={4}>
            <h5>{item.title}</h5>
            <p>${item.price}</p>
          </Col>

          <Col md={3}>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => dispatch(decreaseQty(item.id))}
            >
              -
            </Button>

            <span className="mx-3">{item.quantity}</span>

            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => dispatch(increaseQty(item.id))}
            >
              +
            </Button>
          </Col>

          <Col md={3}>
            <Button
              variant="danger"
              size="sm"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
