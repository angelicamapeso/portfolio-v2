import React from "react";
import displayImg from "./bitGora_display.png";
import iconImg from "./bitGora_icon.png";

export const bitGora = {
  title: "BitGora",
  infoPage: "/bitgora",
  url: "https://bitgora.herokuapp.com/",
  repo: "https://github.com/ZiyongHe/bitGora",
  tagline: "A marketplace for buying and selling goods with Bitcoin",
  img: {
    display: displayImg,
    icon: iconImg,
  },
  description: (
    <>
      <p>
        BitGora is your marketplace to buy and sell goods using Bitcoin. Your
        dashboard will display other users' postings and your posts will be
        available to other users. If you see a post that you're interested in,
        BitGora comes with a chat function to arrange meet-ups or negotiate
        price.
      </p>
      <p>
        We created BitGora because we noticed a gap in being able to spend or
        gain Bitcoin without having to trade it. We wanted to extend the usage
        of Bitcoin and fill this gap with BitGora. BitGora provides an easier
        opportunity at gaining Bitcoin with smaller and more familiar
        transactions of buying/selling goods.
      </p>
      <p>
        Because of BitGora's chat functions, BitGora also builds a community and
        connects Bitcoin enthusiats together.
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
      ],
    },
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
