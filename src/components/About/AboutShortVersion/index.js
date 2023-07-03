import React from "react";
import List from "../../Util/List";
import ArrowLink from "../../Util/ArrowLink/index.js";
import "./style.scss";

export default function AboutShortVersion({ resumeContent, isPreview }) {
  const recentWork = isPreview
    ? [resumeContent.recentWork[0]]
    : resumeContent.recentWork;

  const UpperHeading = isPreview ? "h2" : "h3";
  const LowerHeading = isPreview ? "h3" : "h4";

  return (
    <div
      id="about-short-version"
      className={isPreview ? "about-short-preview" : ""}
    >
      {isPreview ? null : <h2 id="about-short-title">The Short Version</h2>}
      <div className="about-short-content">
        <div className="experience-recent-work">
          <div className="experience about-short-section">
            <UpperHeading className="experience-title left-border-line">
              Experience
            </UpperHeading>
            <p>{resumeContent.professionalExperience}</p>
          </div>
          <div className="recent-work about-short-section">
            <UpperHeading>Recent Work</UpperHeading>
            <div className="recent-work-list">
              {recentWork.map(
                ({ title, company, months, description }, index) => (
                  <div key={index} className="dark-green-bubble">
                    <LowerHeading className="recent-work-title">
                      <span className="title">{title}</span> at {company}
                    </LowerHeading>
                    <p className="months">{months}</p>
                    {description}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="education-technical-skills">
          <div className="technical-skills about-short-section">
            <UpperHeading>Technical Skills</UpperHeading>
            <div className="dark-green-bubble">
              {resumeContent.technicalSkills.map((technicalSkill, index) => (
                <List key={index} list={technicalSkill} />
              ))}
            </div>
          </div>
          {isPreview ? null : (
            <div className="education about-short-section">
              <UpperHeading>Education</UpperHeading>
              <div className="education-list">
                {resumeContent.education.map(
                  (
                    { degree, degreeSpecifics, school, months, description },
                    index
                  ) => (
                    <div key={index} className="dark-green-bubble">
                      <LowerHeading className="education-title">
                        <span className="degree">{degree}</span>
                        <br /> ({degreeSpecifics}) <br />{" "}
                        <span className="school-name">at {school}</span>
                      </LowerHeading>
                      <p className="months">{months}</p>
                      {description}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {isPreview ? (
        <ArrowLink
          text="Learn more about my journey"
          linkTo="/about"
          ariaLabel="View my about page"
        />
      ) : (
        <a
          className="custom-btn btn-dark resume-btn"
          href={resumeContent.resume}
        >
          <i className="far fa-file mr-2" aria-hidden="true"></i>Grab a copy of
          my Resume
        </a>
      )}
    </div>
  );
}
