import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import ProjectCard from "../../components/ProjectCard";

import * as projects from "../../projects";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Angelica Mapeso | Home</title>
        <meta
          name="description"
          content="Hi, I'm Angelica Mapeso, an aspiring full-stack developer."
        />
      </Helmet>
      <main class="d-flex flex-column flex-grow-1">
        <section id="hero">
          <Container>
            <Row>
              <Col sm>
                <Jumbotron className="px-0">
                  <h1 class="display-4 left-border-title">
                    <span id="title-hi" class="display-3">
                      Hi,{" "}
                    </span>
                    My name is Angelica&nbsp;Mapeso.
                  </h1>
                  <div class="left-border-line">
                    <p class="mb-5 h3 font-weight-light">
                      I'm an aspiring web developer and web designer.
                    </p>
                    <Link to="/about">
                      <Button variant="dark">Learn more about me</Button>
                    </Link>
                  </div>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
