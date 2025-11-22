import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState([]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^\S+$/;
  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/;
  const validate = () => {
    const err = [];
    if (!emailRegex.test(data.email)) {
      err.push("Invalid email format");
    }
    if (!data.name.trim()) {
      err.push("Name is required");
    }
    if (!usernameRegex.test(data.username)) {
      err.push("Username is required (no spaces allowed)");
    }
    if (!passwordRegex.test(data.password)) {
      err.push(
        "Password must be at least 8 characters, contain uppercase, lowercase, a number, and a special character"
      ); }
    if (data.confirmPassword !== data.password) {
      err.push("Passwords do not match");
    }

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validate();
    setErrors(result);
    if (result.length === 0) {
      alert("User Registered:\n" + JSON.stringify(data, null, 2));
      navigate("/products");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Container className="py-4">
      <h2>Register</h2>

      {errors.length > 0 && (
        <Alert variant="danger">
          <ul>
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            value={data.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}
