export function initCarouselAnimation() {
  const carousel = document.querySelector<HTMLElement>(
    ".testimonials__carousel"
  );
  if (!carousel) {
    return;
  }

  const slides = document.querySelectorAll<HTMLElement>(".testimonials__slide");
  if (!slides || slides.length === 0) {
    return;
  }

  const cloneSlides = () => {
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true) as HTMLElement;
      carousel.appendChild(clone);
    });
  };

  cloneSlides();

  const totalWidth = () => {
    const totalSlides = document.querySelectorAll<HTMLElement>(
      ".testimonials__slide"
    );
    let width = 0;
    totalSlides.forEach((slide) => {
      width += slide.offsetWidth + 20;
    });
    return width;
  };

  const totalWidthSize = totalWidth();
  const style = document.createElement("style");
  style.textContent = `
      @keyframes carouselAnimation {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(calc(-${totalWidthSize / 2}px));
        }
      }
    `;
  document.head.appendChild(style);
}
