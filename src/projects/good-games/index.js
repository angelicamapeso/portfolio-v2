import React from "react";
import displayImg from "./goodGames_display.png";
import iconImg from "./goodGames_icon.png";

export const goodGames = {
  title: "Good Games",
  url: "https://game-helper.herokuapp.com/",
  repo: "https://github.com/LouisYS-Carleton/Game-Helper",
  tagline: "An all-purpose video game tracker",
  img: {
    display: displayImg,
    icon: iconImg,
  },
  description: (
    <>
      <p>
        The gaming industry is fast-paced and hard to keep up with. Not only are
        new games constantly popping up and grabbing attention, but your growing
        game collection can get scattered as you acquire them through different
        means. Good Games is a team effort at keeping up with games all in one
        place.
      </p>
      <p>
        With an account, you get access to a feed of current games, upcoming
        games and a search for different titles. If you see a game you own, you
        can save it to your dashboard and view all your games together.
      </p>
      <p>
        Good Games was only made possible through the Gamespot API. Because this
        API is free and this project was only made for educational purposes, you{" "}
        <em>might</em> hit the API limit as you browse around. (Sorry!)
      </p>
    </>
  ),
  lists: [
    {
      icon: "fa fa-users",
      title: "Team Members",
      items: [
        {
          name: "Louis Yacksmith",
          link: "https://github.com/LouisYS-Carleton",
        },
        {
          name: "Natallie M’bayo",
          link: "https://github.com/MbayoNatatallie",
        },
      ],
    },
    {
      icon: "fa fa-paper-plane",
      title: "API",
      items: [
        {
          name: "Gamespot API",
          link: "https://www.gamespot.com/api/",
        },
      ],
    },
    {
      icon: "fa fa-paper-plane",
      title: "Front-End",
      items: [
        {
          name: "Express-Handlebars",
          link: "https://www.npmjs.com/package/express-handlebars",
        },
        {
          name: "Bootstrap 4",
          link: "https://www.npmjs.com/package/express-handlebars",
        },
        {
          name: "Intro.js",
          link: "https://introjs.com/",
        },
      ],
    },
    {
      icon: "fa fa-paper-plane",
      title: "Front-End",
      items: [
        {
          name: "Axios",
          link: "https://www.npmjs.com/package/axios",
        },
        {
          name: "Bcrypt",
          link: "https://www.npmjs.com/package/axios",
        },
        {
          name: "Express-session",
          link: "https://www.npmjs.com/package/express-session",
        },
        {
          name: "Sequelize",
          link: "https://sequelize.org/master/",
        },
        {
          name: "Passport",
          link: "http://www.passportjs.org/",
        },
        {
          name: "Passport-local",
          link: "http://www.passportjs.org/packages/passport-local/",
        },
        {
          name: "Moment.js",
          link: "https://momentjs.com/",
        },
      ],
    },
  ],
};
