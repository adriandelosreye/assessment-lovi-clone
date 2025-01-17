import { initHeroAnimations } from "./animations/index";
import { initFooterAnimation } from "./animations/footer";
import { initCarouselAnimation } from "./animations/carousel";
import { initCardAnimation } from "./animations/card";

document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimations();
  initFooterAnimation();
  initCarouselAnimation();
  initCardAnimation();
});
