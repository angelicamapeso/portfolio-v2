import React from "react";
import displayImg from "./nominateIt_display.png";
import iconImg from "./nominateIt_icon.png";

export const nominateIt = {
  title: "Nominate It",
  infoPage: "/nominate-it",
  url: "https://nominate-it.herokuapp.com/",
  repo: "https://github.com/angelicamapeso/nominate-it",
  tagline: "Submit your top 5 movie nominations",
  img: {
    display: displayImg,
    icon: iconImg,
  },
  description: (
    <>
      <p>Nominate is a website for sending in your top 5 movies.</p>
      <p>
        Add movies to your nomination list by selecting a result from the
        search. Your submission will appear on the 'Nominations' page. Browse
        through the lists to see what other people nominated as their top 5's.
      </p>
      <p>All movie data is retrieved with the OMDb API.</p>
    </>
  ),
  lists: [
    {
      icon: "fas fa-desktop",
      title: "Front-End",
      items: [
        {
          name: "React",
          link: "https://reactjs.org/",
        },
        {
          name: "Bootstrap",
          link: "https://getbootstrap.com/",
        },
        {
          name: "Font Awesome",
          link: "https://fontawesome.com/",
        },
      ],
    },
    {
      icon: "fas fa-server",
      title: "Back-End",
      items: [
        {
          name: "Express",
          link: "https://expressjs.com/",
        },
        {
          name: "Mongoose",
          link: "https://mongoosejs.com/",
        },
        {
          name: "Axios",
          link: "https://www.npmjs.com/package/axios",
        },
      ],
    },
    {
      icon: "fas fa-paper-plane",
      title: "API",
      items: [
        {
          name: "OMDb API",
          link: "https://www.omdbapi.com/",
        },
      ],
    },
  ],
};
