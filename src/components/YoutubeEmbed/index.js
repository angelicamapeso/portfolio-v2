import React from "react";
import './style.scss';

export default function YoutubeEmbed({ embedID, title }) {
  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube.com/embed/${embedID}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
}