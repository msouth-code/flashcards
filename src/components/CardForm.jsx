import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import { Form, Button } from 'react-bootstrap';

function CardForm() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Question</Form.Label>
          <Form.Control type="question" placeholder="Question" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
}

export default CardForm;
