import React from "react";

import displayImg from "./sumSoul_display.png";
import { beatBarTest, decodePuzzle } from "./images";

import { MULTIMEDIA_SECTION } from "../../tags";
const { UNITY_TAG } = MULTIMEDIA_SECTION.tags;

export const sumSoul = {
  title: "Sum & Soul",
  infoPage: "/sum-soul",
  url: "https://squishyeggstudios.itch.io/sum-and-soul",
  tagline: "A single-player, action RPG in a world filled with music and food!",
  img: displayImg,
  tags: [UNITY_TAG],
  description: (
    <>
      <p>
        Sum & Soul is a story-driven and beat-driven game. You play as a
        dumpling that wakes up in this unfamiliar food-filled world. Your guide,
        another dumpling who calls himself your brother, needs your help! You
        must traverse this world by fighting enemies and solving puzzles, all
        while rocking out to some great beats.
      </p>
    </>
  ),
  additionalSections: [
    {
      title: "My Role as a Main Programmer",
      description: (
        <>
          <p>
            There are several aspects to this game, but I focused on its
            programming. Using unity, I worked on the following features:
          </p>
          <ul>
            <li>The Beat Bar</li>
            <li>The game's second level</li>
            <li>The game's puzzles</li>
          </ul>
          <p>
            The most difficult feature I worked on was the beat bar. The beat
            bar is the mechanism at the bottom of the screen that the player
            would use to build combos; once the green ticks reach the center of
            the bar, signaling that there's a beat the player should hit, the
            player must perform an attack or dash to increase their combo. Doing
            these actions while off-beat would be counted as a miss and the
            player would lose their combo. Combos are an important mechanic of
            the game as they would make their attacks more powerful.
          </p>
          <p>
            While the beat bar is a visual indicator of the beats that a player
            should hit, the background music that the MIDI file is matched to is
            the main beat source that the player could rely on.
          </p>
          <p>
            To get the timing of the beats, I used a library called Dry Wet MIDI
            to process MIDI files that would contain data on the significant
            beats of the song. I would then use this data to position the green
            ticks on the beat bar and ensured that my code would process and
            accept changes to MIDI files in realtime (ex. when a level changes,
            a new song and MIDI file would need to be loaded).
          </p>
          <p>
            To put this feature together, I heavily relied on{" "}
            <a href="https://www.youtube.com/watch?v=ev0HsmgLScg">
              Skyan Sam's Tutorial
            </a>
            .
          </p>
          <p>
            This feature required a lot of testing and constantly had bugs
            throughout development. I finally perfected it near the final stages
            of the project.
          </p>
        </>
      ),
      images: [beatBarTest, decodePuzzle],
    },
  ],
  team: {
    items: [
      {
        name: "Austin Empaynado",
        link: "https://www.linkedin.com/in/austin-empaynado-73b567168/",
      },
      {
        name: "Cindy Huang",
        link: "https://www.linkedin.com/in/cindy-huang-942315178/",
      },
      {
        name: "Damon Yip",
        link: "https://www.linkedin.com/in/damon-yip-203177187/",
      },
      {
        name: "Jenny Liu",
        link: "https://www.linkedin.com/in/jenny-liu-nn/",
      },
      {
        name: "Noreen Qureshi",
        link: "https://www.linkedin.com/in/noreenqureshi/",
      },
    ],
  },
  technology: [
    {
      icon: "fas fa-desktop",
      title: "Libraries",
      items: [
        {
          name: "Dry Wet MIDI",
          link: "https://melanchall.github.io/drywetmidi/index.html",
        },
      ],
    },
  ],
};
