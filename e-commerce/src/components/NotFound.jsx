
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container className="py-5 text-center">
      <h1 className="display-4">404</h1>
      <p className="lead">Sorry — the page you are looking for does not exist.</p>
      <div className="mt-4">
        <Button as={Link} to="/products" variant="primary">
          Back to Products
        </Button>
      </div>
    </Container>
  );
}