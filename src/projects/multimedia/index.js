import { MULTIMEDIA_SECTION } from "../tags";
import { audioVisualizer } from "./audioVisualizer";
import { mindless } from "./mindless";
import { sumSoul } from "./sum_soul";

const projects = [sumSoul, audioVisualizer, mindless];
export default projects.map((projectData) => {
  projectData.category = MULTIMEDIA_SECTION.title;
  return projectData;
});