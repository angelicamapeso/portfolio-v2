import React from "react";
import displayImg from "./eatLocal_display.png";
import iconImg from "./eatLocal_icon.png";

export const eatLocal = {
  title: "Eat Local",
  infoPage: "/eat-local",
  url: "https://ziyonghe.github.io/EatLocal/index.html",
  repo: "https://github.com/ZiyongHe/EatLocal",
  tagline: "A lookup for local restaurants",
  img: {
    display: displayImg,
    icon: iconImg,
  },
  description: (
    <>
      <p>
        Local businesses were hit hard by the COVID-19 Pandemic. Help support
        them with Eat Local, a lookup for restaurants within 10km of your
        current location. You can search for restaurants with the provided
        categories or type in whatever you're craving.
      </p>
      <p className="mb-0">
        Eat Local provides you with helpful restaurant information so you can
        confidently make your pick:
      </p>
      <ul>
        <li>Distance from you</li>
        <li>Star ratings from Yelp</li>
        <li>Opening and Closing times (where available)</li>
        <li>Additional restaurant information (where available)</li>
      </ul>
      <p>
        Eat Local relies on two APIs to gather information: Yelp API and Zomato
        API. While the main information comes from Yelp, Zomato adds supporting
        information that may or may not appear depending on the restaurant.
      </p>
    </>
  ),
  lists: [
    {
      icon: "fas fa-users",
      title: "Team Members",
      items: [
        {
          name: "Ziyong He",
          link: "https://github.com/ZiyongHe",
        },
        {
          name: "Natallie M’bayo",
          link: "https://github.com/MbayoNatatallie",
        },
      ],
    },
    {
      icon: "fas fa-paper-plane",
      title: "API",
      items: [
        {
          name: "Yelp API",
          link:
            "https://www.yelp.com/developers/documentation/v3/business_search",
        },
        {
          name: "Zomato API",
          link: "https://developers.zomato.com/api",
        },
        {
          name: "Map URLS",
          link:
            "https://developers.google.com/maps/documentation/urls/get-started",
        },
      ],
    },
    {
      icon: "fab fa-css3-alt",
      title: "CSS Framework",
      items: [
        {
          name: "Bulma",
          link: "https://bulma.io/documentation/",
        },
      ],
    },
  ],
};
