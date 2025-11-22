import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Container, Form, Button, Alert } from "react-bootstrap";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),

  firstName: Yup.string()
    .required("First name is required"),

  lastName: Yup.string()
    .required("Last name is required"),

  phone: Yup.string().nullable(), 

  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(
      "Message Sent!\nWe will get to you soon.\n\nData:\n" +
        JSON.stringify(data, null, 2)
    );

    reset(); 
  };

  return (
    <Container className="my-5">
      <h2>Contact Us</h2>

      {isSubmitSuccessful && (
        <Alert variant="success">
          We will get to you soon!
        </Alert>
      )}

      <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" {...register("email")} />
          <p className="text-danger">{errors.email?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" {...register("firstName")} />
          <p className="text-danger">{errors.firstName?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" {...register("lastName")} />
          <p className="text-danger">{errors.lastName?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" {...register("phone")} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            {...register("message")}
          />
          <p className="text-danger">{errors.message?.message}</p>
        </Form.Group>

        <Button type="submit" variant="primary">
          Send
        </Button>
      </Form>
    </Container>
  );
}
