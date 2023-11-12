import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function SendMessageToWorker() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSend = () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailRegex)) {
      setIsValidEmail(false);
      return;
    }

    // TODO: Implement logic to send the email message to the worker
    // On success, setSuccess(true);
    console.log('Email sent:', email);
    console.log('Message:', message);
    setSuccess(true);
  };

  return (
    <div className="container bg-white rounded">
      <h1 className="text-center">Send Message to Worker</h1>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter worker's email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!isValidEmail}
          />
          {!isValidEmail && <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>}
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSend}>
          Send
        </Button>
      </Form>
      {success && <p className="text-success">Message sent successfully!</p>}
    </div>
  );
}

export default SendMessageToWorker;

