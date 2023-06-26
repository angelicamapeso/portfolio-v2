import React from "react";
import displayImg from "./pokemonWeather_display.png";
import { WEB_MOBILE_SECTION } from "../../tags";
import { REACT_NATIVE_TECH, EXPO_TECH } from "../mobile_tech";

const { MOBILE_TAG, REACT_NATIVE_TAG } = WEB_MOBILE_SECTION.tags;

export const pokemonWeather = {
  title: "Pokémon Weather App",
  infoPage: "/pokemon-weather",
  url: "",
  repo: "https://github.com/angelicamapeso/pokemon-weather/",
  tagline: "A React Native weather app ... with Pokémon!",
  img: displayImg,
  tags: [MOBILE_TAG, REACT_NATIVE_TAG],
  description: (
    <>
      <p>
        Based on Pokémon Go's concept of finding Pokémon depending on the
        weather, this weather app provides a more detailed view of Pokémon that
        the player might run into during the week.
      </p>
      <p>To run, this app relies on two APIs.</p>
      <p>
        The weather data for the current day and week is grabbed from the Open
        Weather API. Each weather type is then matched to a Pokémon type or
        multiple Pokémon types. This is loosely based on{" "}
        <a href="https://pokemongohub.net/post/generation-iii/weather-guide/">
          Pokémon Go's Weather Chart
        </a>
        .
      </p>
      <p>
        Then, a call to the Poké API retrieves Pokémon with the types matched
        from the weather. Pokémon are then picked from these lists to be
        displayed on the related day.
      </p>
    </>
  ),
  technology: [
    {
      icon: "fas fa-desktop",
      title: "Mobile",
      items: [REACT_NATIVE_TECH, EXPO_TECH],
    },
    {
      icon: "fas fa-paper-plane",
      title: "API",
      items: [
        {
          name: "Poké API",
          link: "https://pokeapi.co/",
        },
        {
          name: "Open Weather API",
          link: "https://openweathermap.org/api",
        },
      ],
    },
  ],
};
