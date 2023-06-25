import React from "react";
import displayImg from "./bitGora_display.png";

export const bitGora = {
  title: "BitGora",
  infoPage: "/bitgora",
  url: "",
  repo: "https://github.com/ZiyongHe/bitGora",
  tagline: "A marketplace for buying and selling goods with Bitcoin",
  img: displayImg,
  description: (
    <>
      <p>
        BitGora is a community for Bitcoin enthusiasts to connect and buy & sell
        goods. To sell items, you can create posts with your item's image,
        description and cost. To buy, you can view other people's posts on your
        dashboard. If you see a post that you're interested in, BitGora comes
        with a chat function to arrange meet-ups or negotiate price.
      </p>
      <p>
        We created BitGora because we noticed a gap in being able to spend or
        gain Bitcoin without having to trade it. We wanted to extend the usage
        of Bitcoin and fill this gap with BitGora. BitGora provides an easier
        opportunity at gaining Bitcoin with smaller and more familiar
        transactions of buying/selling goods.
      </p>
    </>
  ),
  team: [
    {
      name: "Ziyong He",
      link: "https://github.com/ZiyongHe",
    },
  ],
  technology: [
    {
      icon: "fas fa-desktop",
      title: "Front-End",
      items: [
        {
          name: "React",
          link: "https://reactjs.org/",
        },
        {
          name: "React-Bootstrap",
          link: "https://react-bootstrap.github.io/",
        },
        {
          name: "Font Awesome",
          link: "https://fontawesome.com/",
        },
        {
          name: "Socket.io (Client)",
          link: "https://socket.io/",
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
          name: "Passport",
          link: "http://www.passportjs.org/",
        },
        {
          name: "Cloudinary",
          link: "https://cloudinary.com/",
        },
        {
          name: "Socket.io (Server)",
          link: "https://socket.io/",
        },
      ],
    },
    {
      icon: "fas fa-paper-plane",
      title: "API",
      items: [
        {
          name: "Coindesk API",
          link: "https://www.coindesk.com/coindesk-api",
        },
      ],
    },
  ],
};
