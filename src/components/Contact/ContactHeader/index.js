import React from "react";
import Col from "react-bootstrap/Col";

import "./style.scss";

export default function ContactHeader({ isPreview }) {
  return (
    <Col
      xs={12}
      md={4}
      id="contact-header"
      className={`bg-maroon ${isPreview ? "" : "contact-header-full"}`}
    >
      <h1>
        <i className="fas fa-rocket mb-4"></i>
        {isPreview ? "Let's build something great together" : "Contact"}
      </h1>
      {isPreview ? null : (
        <>
          <p>Let's build something great together</p>
          <div className="contact-info">
            <h2>My Info</h2>
            <div className="contact-info-wrapper dark-maroon-bubble">
              <a href="mailto:angelica.mapeso@gmail.com">
                <i className="fas fa-envelope mr-3"></i>
                angelica.mapeso<span>@gmail.com</span>
              </a>
              <a href="tel:647-455-5788">
                <i className="fas fa-phone-alt mr-3"></i>(647) - 455 - 5788
              </a>
            </div>
          </div>
        </>
      )}
    </Col>
  );
}
