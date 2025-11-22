
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Row, Col, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="py-5 " >
      <Row>
        
        <Col md={6}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded float-start"
          />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p className="text-muted">{product.description}</p>

          <h4 className="mb-3">${product.price}</h4>

          <Badge bg={product.stock > 0 ? "success" : "danger"}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </Badge>

          <p className="mt-3">Rating: {product.rating}</p>
        </Col>
        <Col md={12}>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>


        </Col>
      </Row>
    </Container>
  );
}
