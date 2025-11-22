import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const inStock = product.stock > 0;

  return (
    <Card 
      className="h-100 shadow-sm border-0" 
      style={{ 
        cursor: "pointer", 
        transition: "all 0.3s ease-in-out"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
      }}
    >
      {/* clickable image goes to details */}
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="position-relative overflow-hidden" style={{ height: "250px", backgroundColor: "#f8f9fa" }}>
          <img 
            src={product.thumbnail || product.images?.[0]} 
            alt={product.title} 
            className="w-100 h-100"
            style={{ 
              objectFit: "contain",
              objectPosition: "center",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          />
          {product.discountPercentage > 0 && (
            <div className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 m-2 rounded">
              -{Math.round(product.discountPercentage)}%
            </div>
          )}
        </div>
      </Link>

      <Card.Body className="d-flex flex-column p-3">
     
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <Card.Title className="h6 mb-2 text-truncate" title={product.title}>
            {product.title}
          </Card.Title>
        </Link>

        {product.rating && (
          <div className="mb-2">
            <span className="text-warning me-1">
              {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
            </span>
            <small className="text-muted">({product.rating})</small>
          </div>
        )}

     
        <div className="mb-3">
          {product.discountPercentage > 0 ? (
            <div>
              <span className="h6 text-primary fw-bold me-2">${product.price}</span>
              <small className="text-muted text-decoration-line-through">
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </small>
            </div>
          ) : (
            <span className="h6 text-primary fw-bold">${product.price}</span>
          )}
        </div>

        {/* stock badge and category */}
        <div className="mt-auto d-flex justify-content-between align-items-end">
          <Badge bg={inStock ? "success" : "danger"} className="me-2">
            {inStock ? `${product.stock} in stock` : "Out of stock"}
          </Badge>
          {product.category && (
            <small className="text-muted text-capitalize">{product.category}</small>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
