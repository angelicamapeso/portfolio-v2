import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import Page from "../../components/Page";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
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
    <Page
      title="Contact"
      description="Ready to reach out? Let's grab a coffee!"
    >
      <Container className="pb-4 mb-4">
        <Row>
          <Col>
            <h1 className="display-4 left-border-title mb-4">Contact</h1>
            <div className="left-border-line">
              <Row>
                <Col
                  as="form"
                  xs={12}
                  lg
                  className="pr-5 mb-5"
                  onSubmit={handleSubmit}
                >
                  <Form.Group controlId="replyTo" className="w-75">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      value={replyTo}
                      onChange={e => setReplyTo(e.target.value)}
                      name="replyTo"
                      type="email"
                      placeholder="email@example.com"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="name" className="w-75">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      type="text"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      as="textarea"
                      name="message"
                      rows="5"
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="dark"
                    type="submit"
                    disabled={state.submitting}
                  >
                    Send
                    <i
                      className="fas fa-paper-plane ml-2"
                      aria-hidden="true"
                    ></i>
                  </Button>
                  {state.succeeded ? (
                    <p className="lead mt-3">
                      Sent! Thanks for wanting to reach out!
                    </p>
                  ) : state.errors.length > 0 ? (
                    <p className="lead mt-3">
                      Something went wrong. Please try again later.
                    </p>
                  ) : (
                    <></>
                  )}
                </Col>
                <Col xs lg="auto">
                  <p className="h2 mb-3 font-weight-light">Contact Info</p>
                  <ListGroup>
                    <ListGroup.Item>
                      <p className="h5 font-weight-normal mb-0">
                        <a href="tel:647-455-5788" className="icon-link">
                          <i className="fas fa-phone" aria-hidden="true"></i>
                          (647) 455-5788
                        </a>
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p className="h5 font-weight-normal mb-0">
                        <a
                          href="mailto:angelica.mapeso@gmail.com"
                          className="icon-link"
                        >
                          <i className="fas fa-envelope" aria-hidden="true"></i>
                          angelica.mapeso@gmail.com
                        </a>
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default Contact;
