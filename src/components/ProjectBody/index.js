import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkList from "../LinkList";
import YoutubeEmbed from "../YoutubeEmbed";
import "./style.scss";
import ImageToExpand from "../ImageToExpand";

function ProjectBody({ project }) {
  return (
    <div id="project-body">
      <Container id="project-main" fluid >
        {project.youtubeEmbedID || project.images ?
          <Row id="hero-content">
            <Col>
              {project.youtubeEmbedID ?
                <div id="youtube" className="hero content-box">
                  <YoutubeEmbed
                    embedID={project.youtubeEmbedID}
                    title={project.title}
                  />
                </div> : null
              }
              {project.images ? (
                <div id="images" className="hero content-box">
                  {project.images.map((image) =>
                    <ImageToExpand
                      src={image.img}
                      alt={image.description}
                    />)
                  }
                </div>) : null
              }
            </Col>
          </Row> : null
        }
        <Row>
          <Col>
            {project.description}
          </Col>
        </Row>
      </Container>
      {project.additionalSections ? project.additionalSections.map(section =>
        <Container className="additional-section" fluid>
          <Row>
            <Col>
              <h2 className="additional-section-title">{section.title}</h2>
              {section.description}
              {section.images ? (
                <div className="additional-images">
                  {section.images.map((image) =>
                    <ImageToExpand
                      src={image.img}
                      alt={image.description}
                    />)
                  }
                </div>) : null
              }
            </Col>
          </Row>
        </Container>) : null
      }

    </div>
  );
}

export default ProjectBody;
