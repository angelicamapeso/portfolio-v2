import React from "react";
import displayImg from "./codeQuiz_display.png";
import iconImg from "./codeQuiz_icon.png";

export const codeQuiz = {
  title: "JavaScript Code Quiz",
  infoPage: "/code-quiz",
  url: "https://angelicamapeso.github.io/code-quiz/",
  repo: "https://github.com/angelicamapeso/code-quiz",
  tagline: "A timed quiz to test your JavaScript",
  img: {
    display: displayImg,
    icon: iconImg,
  },
  description: (
    <>
      <p>
        If you're learning JavaScript or just want to test your knowledge, this
        quiz can be a helpful review. The quiz is made up of 5 questions with 60
        seconds on the clock. If you get a question wrong, 10 seconds is
        deducted from the timer.
      </p>
      <p>
        Your final score is the amount of time left after you answer all 5
        questions or a score of 0 if your time runs out before then. Once
        complete, you can save your score with your initials and compare against
        your friends.
      </p>
      <p>Scores are saved using Local Storage.</p>
    </>
  ),
  lists: [
    {
      icon: "fab fa-css3-alt",
      title: "CSS",
      items: [
        {
          name: "CSS Transitions",
        },
        {
          name: "Breakpoints",
        },
      ],
    },
    {
      icon: "fab fa-js-square",
      title: "JavaScript",
      items: [
        {
          name: "Classes",
        },
        {
          name: "Event Listeners",
        },
        {
          name: "setTimeout/setInterval",
        },
        {
          name: "Local Storage",
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
