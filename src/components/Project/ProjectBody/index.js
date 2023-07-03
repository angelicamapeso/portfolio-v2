import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YoutubeEmbed from "../../Util/YoutubeEmbed";
import "./style.scss";
import ImageToExpand from "../../Util/ImageToExpand";

function ProjectBody({ project }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div id="project-body"></div>;
  }

  return (
    <div id="project-body">
      <Container id="project-main" fluid>
        {project.youtubeEmbedID || project.images ? (
          <Row id="hero-content">
            <Col>
              {project.youtubeEmbedID ? (
                <div id="youtube" className="hero content-box">
                  <YoutubeEmbed
                    embedID={project.youtubeEmbedID}
                    title={project.title}
                  />
                </div>
              ) : null}
              {project.images ? (
                <div id="images" className="hero content-box">
                  {project.images.map((image, index) => (
                    <ImageToExpand
                      key={index}
                      src={image.img}
                      alt={image.description}
                    />
                  ))}
                </div>
              ) : null}
            </Col>
          </Row>
        ) : null}
        <Row>
          <Col>{project.description}</Col>
        </Row>
      </Container>
      {project.additionalSections
        ? project.additionalSections.map((section, index) => (
            <Container key={index} className="additional-section" fluid>
              <Row>
                <Col>
                  <h2 className="additional-section-title">{section.title}</h2>
                  {section.description}
                  {section.images ? (
                    <div className="additional-images">
                      {section.images.map((image, index) => (
                        <ImageToExpand
                          key={index}
                          src={image.img}
                          alt={image.description}
                        />
                      ))}
                    </div>
                  ) : null}
                </Col>
              </Row>
            </Container>
          ))
        : null}
      {project.team ? (
        <Container className="team" fluid>
          <Row>
            <Col>
              <h2>
                <i className="fas fa-users" aria-hidden="true"></i>Team Members
              </h2>
              <div className="team-list dark-maroon-bubble">
                {project.team.map((teamMember, index) => (
                  <a key={index} href={teamMember.link}>
                    {teamMember.name}
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      ) : null}
      {project.technology ? (
        <Container className="technology" fluid>
          <Row>
            <Col>
              <h2>
                <i className="fas fa-fire" aria-hidden="true"></i>Technology
              </h2>
              <div className="technology-list dark-maroon-bubble">
                {project.technology.map((technology, index) => (
                  <div key={index}>
                    <h3>{technology.title}</h3>
                    {technology.items.map((item, index) => (
                      <a key={index} href={item.link}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      ) : null}
    </div>
  );
}

export default ProjectBody;