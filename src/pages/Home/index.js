import React from "react";
import { Link } from "react-router-dom";
import Page from "../../components/Page";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import ProjectCard from "../../components/ProjectCard";

import * as projects from "../../projects";

export default function Home() {
  return (
    <>
      <Page
        title="Home"
        description="Hi, I'm Angelica Mapeso, an aspiring full-stack developer."
        className="d-flex flex-column"
      >
        <section id="hero">
          <Container>
            <Row>
              <Col sm>
                <Jumbotron className="px-0">
                  <h1 className="display-4 left-border-title">
                    <span id="title-hi" className="display-3">
                      Hi,{" "}
                    </span>
                    My name is Angelica&nbsp;Mapeso.
                  </h1>
                  <div className="left-border-line">
                    <p className="mb-5 h3 font-weight-light">
                      I'm an aspiring web developer and web designer.
                    </p>
                    <Link to="/about" className="btn btn-dark">
                      Learn more about me
                    </Link>
                  </div>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="featured-projects" className="pb-4 flex-grow-1">
          <Container>
            <Row>
              <ProjectCard project={projects.goodGames} />
            </Row>
          </Container>
        </section>
      </Page>
    </>
  );
}
