import React, { useState, useEffect } from "react";
import "./style.scss";

export default function AboutLongVersion({ longVersionContent, isPreview }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady || isPreview) {
    return null;
  }

  return (
    <div id="about-long-version" className="about-sub-section bg-off-white">
      <h2 id="about-long-title">The Long Version</h2>
      <div>{longVersionContent}</div>
    </div>
  );
}
