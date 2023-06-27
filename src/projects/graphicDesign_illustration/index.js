import { GRAPHIC_DESIGN_ILLUSTRATION_SECTION } from "../tags";
import { canadaBuys } from "./canadaBuys";
import { simplet } from "./simplet";
import { survivalOfTheFittest } from "./survivalOfTheFittest";

const projects = [simplet, canadaBuys, survivalOfTheFittest];
export default projects.map((projectData) => {
  projectData.category = GRAPHIC_DESIGN_ILLUSTRATION_SECTION.title;
  return projectData;
});