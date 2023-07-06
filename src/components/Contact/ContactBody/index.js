import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import "./style.scss";

export default function ContactBody({ isPreview }) {
  const [state, handleSubmit] = useForm("xaylvwny");
  const [replyTo, setReplyTo] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setReplyTo("");
    setName("");
    setMessage("");
  }, [state.succeeded]);

  return (
    <Col
      id="contact-body"
      className={`contact-sub-section ${isPreview ? "" : "contact-body-full"}`}
    >
      <h2 className="left-border-line">Send me an email</h2>
      <Form onSubmit={handleSubmit}>
        <div className="form-items">
          <div className="sender-details">
            <Form.Group controlId="replyTo" className="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={replyTo}
                onChange={(e) => setReplyTo(e.target.value)}
                name="replyTo"
                type="email"
                placeholder="your-email@example.com"
                required
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                required
              />
            </Form.Group>
          </div>
          <Form.Group controlId="message" className="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              className="dark-maroon-bubble"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              as="textarea"
              name="message"
              placeholder="Let's build something great together!"
              rows="5"
              required
            />
          </Form.Group>
        </div>
        <div className="submit-grp">
          <Button
            variant="light"
            className="custom-btn"
            type="submit"
            disabled={state.submitting}
          >
            <i className="fas fa-paper-plane mr-2" aria-hidden="true"></i>
            Send
          </Button>
          {state.succeeded ? (
            <p className="mt-3">Sent! Thanks for reaching out!</p>
          ) : state.errors.length > 0 ? (
            <p className="mt-3">
              Something went wrong. Please try again later.
            </p>
          ) : (
            <></>
          )}
        </div>
      </Form>
    </Col>
  );
}
