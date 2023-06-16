import React from "react";
import { Link } from "react-router-dom";
import Page from "../../components/Page";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkList from "../../components/LinkList";

import resume from "./mapesoAngelica_resume2023.pdf";
import { skills } from "./skills.js";
import "./style.css";

function About() {
  return (
    <Page title="About" description="Get to know me a little bit better">
      <Container className="pb-5 mt-4">
        <Row>
          <Col>
            <h1 className="mb-4 display-4 left-border-title">Hey!</h1>
            <div className="left-border-line">
              <Row>
                <Col xs={12} md={4} className="order-md-1 mb-5">
                  <div id="about-img"></div>
                </Col>
                <Col xd={12} md={8}>
                  <p className="lead">
                    I’m a front-end developer devoted to writing clean code,
                    empowering end users and expanding my knowledge (especially
                    to the back-end!).
                  </p>
                  <p>
                    Prior to discovering my love of programming, I set down my
                    roots in the world of visual art. I went from working with
                    physical mediums (acrylic paint, sculpture etc.) to
                    eventually trying out graphic design and continue to
                    practice both today.
                  </p>
                  <p>
                    Despite being heavily creative, I also enjoy the world of
                    logic (math, physics etc.) and immediately fell in love with
                    programming when I discovered it during an elective course
                    in my first year of undergrad. (I wrote a little python
                    program that pretended you were a Pokemon trainer who had to
                    make a choice of where to step in the wild grass. Depending
                    on what you picked, a single pokemon would be drawn out on
                    the screen.)
                  </p>
                  <p>
                    I dove into the{" "}
                    <a href="https://admissions.carleton.ca/programs/interactive-multimedia-and-design-imd/">
                      Interactive Multimedia and Design program at Carleton
                    </a>{" "}
                    seeking to marry my creative and logical sides, and was met
                    with a learning experience that expanded both worlds.
                  </p>
                  <p>
                    Courses that fed my creative side included:
                    <ul>
                      <li>Game Design</li>
                      <li>User Experince and User Interface Design</li>
                      <li>3D & 2D Modeling and Animation</li>
                    </ul>
                  </p>
                  <p>
                    While courses that fed my logical side included:
                    <ul>
                      <li>Web Development</li>
                      <li>Programming in Unity</li>
                      <li>Object-Oriented Programing with C++</li>
                    </ul>
                  </p>
                  <p>
                    When I came across web development, I decided to deepen my
                    knowledge and completed the{" "}
                    <a href="https://bootcamp.carleton.ca/coding/">
                      Carleton Coding Bootcamp
                    </a>{" "}
                    during my undergrad. Completing this bootcamp marked one of
                    the busiest parts of my life. However, it was well worth it.
                  </p>
                  <p class="lead mt-5">
                    I’m confident to say that my background in design has made
                    me a well-rounded developer that is very conscious about
                    user experience and making code changes that are easy for
                    other developers to build onto. I'm a team player all
                    around!
                  </p>
                  <p>
                    Other than that, I’m a sucker for sweets and feel like
                    bubble tea probably runs through my veins. I also
                    occasionally get sucked into a video game or show that I
                    can’t get enough of for a while before returning back to the
                    real world. But I’m sure that’s normal … right?
                  </p>
                  <p class="mb-5">
                    Anyway, I’m always open to talk web development or design,
                    so if you’re still reading this - let’s get in touch!
                  </p>
                </Col>
              </Row>
              <Row className="pb-3">
                {skills.map((skill, index) => (
                  <Col key={index} xs={12} md className="mb-3">
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
