import React from "react";
import { ReactComponent as Logo } from "../../img/logo_white.svg";
import { ReactComponent as ArrowDown } from "../../img/arrow_down_white.svg";
import { Link } from "react-router-dom";
import Page from "../../components/Page";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import ProjectCard from "../../components/ProjectCard";
import "./style.scss";

import * as projects from "../../projects";

export default function Home() {
  const featuredProjects = Object.values(projects).slice(0, 3);
  return (
    <>
      <Page
        title="Home"
        description="Hi, I'm Angelica Mapeso, a front-end web developer on the way to going full-stack!"
        className="d-flex flex-column"
      >
        <Container fluid id="hero-banner">
          <Row>
            <Col id="logo-col" className="bg-maroon hero-col" xs={12} sm={4}>
              <Logo id="hero-logo" />
            </Col>
            <Col id="introduction" className="hero-col">
              <h1>Angelica <span id="last-name">Mapeso</span></h1>
              <p id="current"><span id="role">Front-End Web Developer</span><br />with a <span id="background">background in design</span></p>
              <p id="full-stack-tag">On the way to full-stack</p>
              <ArrowDown className="arrow" />
            </Col>
          </Row>
        </Container>

        {/* <section id="featured-projects" className="flex-grow-1">
          <Container>
            <Row>
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Row>
            <Row>
              <Col>
                <Link to="/portfolio" className="btn btn-dark mb-4">
                  View full Portfolio
                  <i className="fas fa-long-arrow-alt-right ml-2"></i>
                </Link>
              </Col>
            </Row>
          </Container>
        </section> */}
      </Page>
    </>
  );
}
