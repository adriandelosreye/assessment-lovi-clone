import { heroMainAnimation, heroImagesAnimation } from "./hero";

export function initHeroAnimations() {
  heroMainAnimation();
  heroImagesAnimation();
}

function revealTextOnScroll() {
  const infoContainer = document.querySelector<HTMLElement>(".info__container");

  if (!infoContainer) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          infoContainer.classList.add("in-viewport");


          const paragraphs = infoContainer.querySelectorAll('p')
                    paragraphs.forEach((paragraph, i) => {
                        paragraph.style.setProperty('--delay', `${i * 0.3}s`);
                    })


          observer.unobserve(infoContainer);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(infoContainer);
}

document.addEventListener("DOMContentLoaded", () => {
  revealTextOnScroll();
});
