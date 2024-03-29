import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectCard from "../ProjectCard";

import "./style.scss";

import categories, { getCategory } from "../../../projects/tags.js";
import { getProjectsByCategory } from "../../../projects";

export default function ProjectSection({ isPreview, initialCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory ? getCategory(initialCategory) : categories[0]
  );
  const [allProjectsUnderCategory, setAllProjectsUnderCategory] = useState([]);
  const [projectsToDisplay, setProjectsToDisplay] = useState([]);

  useEffect(() => {
    const allProjects = getProjectsByCategory(selectedCategory.title);
    setAllProjectsUnderCategory(allProjects);
  }, [selectedCategory]);

  useEffect(() => {
    if (isPreview) {
      setProjectsToDisplay(allProjectsUnderCategory.slice(0, 3));
      return;
    }

    setProjectsToDisplay(allProjectsUnderCategory);
  }, [isPreview, allProjectsUnderCategory]);

  return (
    <>
      <Container fluid id="project-section-header" className="bg-off-white">
        <Row>
          <Col id="header-title" xs={12} sm={4}>
            {isPreview ? (
              <h1>Here's what I've worked on so far</h1>
            ) : (
              <>
                <h1>
                  <i className="fas fa-briefcase" aria-hidden="true"></i>
                  <br />
                  Portfolio
                </h1>
                <p className="subtitle">Let me show you what I can do</p>
              </>
            )}
          </Col>
          <Col id="category-filters">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="dark"
                className="custom-btn category-btn"
                onClick={() => setSelectedCategory(getCategory(category.title))}
                active={selectedCategory.title === category.title}
              >
                {category.title}
              </Button>
            ))}
          </Col>
        </Row>
      </Container>

      <Container fluid id="project-list" className="bg-pink">
        <Row>
          <Col>
            <h2>
              <i className={selectedCategory.icon} aria-hidden="true" />{" "}
              {selectedCategory.title}
            </h2>
          </Col>
        </Row>
        <Row className="project-list-row">
          {projectsToDisplay.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Row>
        {projectsToDisplay.length < allProjectsUnderCategory.length ? (
          <Row>
            <Col className="see-more">
              <Button
                variant="light"
                className="custom-btn mt-3"
                onClick={() =>
                  setProjectsToDisplay(
                    allProjectsUnderCategory.slice(
                      0,
                      projectsToDisplay.length + 3
                    )
                  )
                }
              >
                See more{" "}
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
              </Button>
            </Col>
          </Row>
        ) : null}
      </Container>
    </>
  );
}
