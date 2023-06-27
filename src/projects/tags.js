// Web and Mobile
export const WEB_MOBILE_SECTION = {
  title: "Web & Mobile",
  icon: "fas fa-laptop",
  tags: {
    MOBILE_TAG: "Mobile",
    FULL_STACK_TAG: "Full-Stack",
    FRONT_END_TAG: "Front-End",
    REACT_TAG: "React",
    REACT_NATIVE_TAG: "React Native",
    PURE_HTML_CSS_JS_TAG: "Pure HTML, CSS and JavaScript",
  },
};

// Graphic Design & Illustration
export const GRAPHIC_DESIGN_ILLUSTRATION_SECTION = {
  title: "Graphic Design & Illustration",
  icon: "fas fa-pen-nib",
  tags: {
    WEB_DESIGN_TAG: "Web Design",
    APP_DESIGN_TAG: "App Design",
    ILLUSTRATION_TAG: "Illustration",
  },
};

// Multimedia
export const MULTIMEDIA_SECTION = {
  title: "Multimedia",
  icon: "fas fa-icons",
  tags: {
    C2PLUS_TAG: "C++",
    UNITY_TAG: "Unity",
    VR_WEB_TAG: "VR Web",
  },
};

const categories = [WEB_MOBILE_SECTION, GRAPHIC_DESIGN_ILLUSTRATION_SECTION, MULTIMEDIA_SECTION]

export function getCategory(categoryTitle) {
  const category = categories.find((inList) => inList.title === categoryTitle);
  if (!category) {
    throw new Error('Category does not exist!');
  }

  return category;
};

export default categories;