import React from "react";
import displayImg from "./weatherDashboard_display.png";
import iconImg from "./weatherDashboard_icon.png";

export const weatherDashboard = {
  title: "Weather Dashboard",
  infoPage: "/weather-dashboard",
  url: "https://angelicamapeso.github.io/weather-dashboard/",
  repo: "https://github.com/angelicamapeso/weather-dashboard",
  tagline: "A dashboard for the current weather and five-day forecast",
  img: {
    display: displayImg,
    icon: iconImg,
  },
  description: (
    <>
      <p>Use this weather dashboard to help you plan for your travels.</p>
      <p className="mb-0">The current weather panel will tell you today's:</p>
      <ul>
        <li>Temperature</li>
        <li>Humidity</li>
        <li>Wind Speed</li>
        <li>UV Index</li>
      </ul>
      <p>
        While the 5-Day Forecast focuses on the temperature and humidity of the
        day.
      </p>
      <p>
        The dashboard also displays a history of your searches for ease of
        access. When you leave the site and come back, weather data on your last
        searched city automatically populates the dashboard.
      </p>
      <p>The weather dashboard saves data using Local Storage.</p>
    </>
  ),
  lists: [
    {
      icon: "fas fa-paper-plane",
      title: "API",
      items: [
        {
          name: "Open Weather API",
          link: "https://openweathermap.org/api",
        },
      ],
    },
    {
      icon: "fab fa-css3-alt",
      title: "CSS Framework",
      items: [
        {
          name: "Bootstrap 4",
          link:
            "https://getbootstrap.com/docs/4.5/getting-started/introduction/",
        },
      ],
    },
    {
      icon: "fas fa-info-circle",
      title: "Icons",
      items: [
        {
          name: "Font Awesome 5.14",
          link: "https://fontawesome.com/",
        },
      ],
    },
  ],
};
