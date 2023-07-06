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
    <Col id="project-body">
      {project.youtubeEmbedID || project.images ? (
        <div id="hero-content" className="project-sub-section">
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
        </div>
      ) : null}
      <div id="description" className="project-sub-section">
        {project.description}
      </div>
      {project.additionalSections
        ? project.additionalSections.map((section, index) => (
            <div key={index} className="additional-section project-sub-section">
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
            </div>
          ))
        : null}
      {project.team ? (
        <div id="team" className="project-sub-section">
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
        </div>
      ) : null}
      {project.technology ? (
        <div id="technology" className="project-sub-section">
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
        </div>
      ) : null}
    </Col>
  );
}

export default ProjectBody;
