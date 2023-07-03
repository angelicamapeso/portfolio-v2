import React, { useState } from "react";
import "./style.scss";

export default function ImageToExpand({ src, alt }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="image-to-expand">
        <img
          src={src}
          alt={alt}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>
      {isExpanded ?
        <div
          className="expanded"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <p>Tap to Exit</p>
          <img
            src={src}
            alt={alt}
          />
        </div> : null
      }
    </>
  );
};