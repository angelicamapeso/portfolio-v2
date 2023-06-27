import { WEB_MOBILE_SECTION } from "../tags";
import { bitGora } from "./bitGora";
import { nominateIt } from "./nominate-it";
import { pokemonWeather } from "./pokemonWeather";
import { ikeaClone } from "./ikeaClone";
import { delish } from "./delish";

const projects = [pokemonWeather, bitGora, nominateIt, ikeaClone, delish];
export default projects.map((projectData) => {
  projectData.category = WEB_MOBILE_SECTION.title;
  return projectData;
});