import React from "react";
import displayImg from "./burgerLogger_display.png";
import iconImg from "./burgerLogger_icon.png";

export const eatDaBurger = {
  title: "Eat Da Burger",
  infoPage: "/eat-da-burger",
  url: "https://fast-oasis-01993.herokuapp.com/index",
  repo: "https://github.com/angelicamapeso/eat-da-burger",
  tagline: "A logger for the burgers you've devoured and will devour soon",
  img: {
    display: displayImg,
    icon: iconImg,
  },
  description: (
    <>
      <p>
        For burger lovers who want to express their affinity for burgers by
        logging them for the world to see.
      </p>
      <p>
        Once you enter a burger name, it gets added to the "Burgers to be
        devoured" column. After your taste buds have basked in the wonders of
        that burger, you can then mark it as devoured and it will appear in the
        "Burgers devoured" list. Burgers in this list can then be removed if you
        don't want to brag <em>too</em> much.
      </p>
      <p>(This is the first full-stack site I’ve ever deployed!)</p>
    </>
  ),
  lists: [
    {
      icon: "fas fa-desktop",
      title: "Front-End",
      items: [
        {
          name: "Express Handlebars",
          link: "https://www.npmjs.com/package/express-handlebars",
        },
        {
          name: "Bootstrap 4",
          link:
            "https://getbootstrap.com/docs/4.5/getting-started/introduction/",
        },
      ],
    },
    {
      icon: "fas fa-server",
      title: "Back-End",
      items: [
        {
          name: "Node.js",
          link: "https://nodejs.org/en/",
        },
        {
          name: "Node MySQL 2",
          link: "https://www.npmjs.com/package/mysql2",
        },
        {
          name: "Express",
          link: "https://expressjs.com/",
        },
        {
          name: "Local Storage",
        },
      ],
    },
  ],
};
