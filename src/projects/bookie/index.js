import React from "react";
import displayImg from "./bookie_display.png";
import iconImg from "./bookie_icon.png";

export const bookie = {
  title: "Bookie",
  infoPage: "/bookie",
  url: "https://bookie-search.herokuapp.com/",
  repo: "https://github.com/angelicamapeso/bookie",
  tagline: "Search for and recommend books",
  img: {
    display: displayImg,
    icon: iconImg,
  },
  description: (
    <>
      <p>Bookie is a place for book enthusiasts to share their recommendeds.</p>
      <p>
        Head to the Search page to look up a book and save it to the list, or go
        to the Recommended page to see what others have already recommended.
      </p>
      <p>All book data is retrieved using the Google Books API.</p>
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
      ],
    },
    {
      icon: "fas fa-paper-plane",
      title: "API",
      items: [
        {
          name: "Google Books API",
          link: "https://developers.google.com/books/docs/overview",
        },
      ],
    },
  ],
};
