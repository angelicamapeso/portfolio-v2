import React from "react";
import { Link } from "react-router-dom";
import Page from "../../components/Page";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkList from "../../components/LinkList";

import resume from "./angelicaMapeso_resume2021.pdf";
import { skills } from "./skills.js";

function About() {
  return (
    <Page title="About" description="Get to know me a little bit better">
      <Container className="pb-5 mt-4">
        <Row>
          <Col>
            <h1 className="mb-4 display-4 left-border-title">About</h1>
            <div className="left-border-line">
              <Row>
                <Col xs={12} md={4} className="order-md-1 mb-5">
                  <div id="about-img"></div>
                </Col>
                <Col xd={12} md={8}>
                  <p className="lead">
                    Currently a student at Carleton University in the
                    Interactive Multimedia Program and the Carleton Coding
                    Bootcamp.
                  </p>
                  <p>
                    I have a solid foundation in designing for multimedia
                    (animation, web design, UI/UX) through the Interactive
                    Multimedia and Design program at Carleton University, and am
                    currently learning the MERN stack through the Carleton
                    University Full-Stack coding bootcamp.
                  </p>
                  <p className="mb-5">
                    I am passionate about creating beautiful and functional user
                    interfaces and user experiences. Equipped with knowledge in
                    graphic design, UI/UX design, web development and
                    collaborative skills, I am hoping to eventually work as a
                    full-stack developer.
                  </p>
                </Col>
              </Row>
              <Row className="pb-3">
                {skills.map(skill => (
                  <Col xs={12} md className="mb-3">
                    <h2 className="font-weight-light">
                      <i
                        className={skill.icon + " mr-3"}
                        aria-hidden="true"
                      ></i>
                      {skill.title}
                    </h2>
                    <LinkList items={skill.items} />
                  </Col>
                ))}
              </Row>
              <p className="mb-5">
                <a href={resume} className="icon-link">
                  <i className="far fa-file-pdf" aria-hidden="true"></i>
                  View my Resume for more information
                </a>
              </p>
              <Link to="/contact" className="btn btn-dark" role="button">
                Let's get in touch
                <i
                  className="fas fa-long-arrow-alt-right ml-2"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default About;
