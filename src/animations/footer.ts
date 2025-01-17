export function initFooterAnimation() {
  const footer = document.querySelector(".footer") as HTMLElement;
  const footerContent = document.querySelector(
    ".footer__content"
  ) as HTMLElement;
  const imageSection = document.querySelector(".image__section") as HTMLElement;

  window.addEventListener("scroll", () => {
    if (!footer || !footerContent || !imageSection) {
      return;
    }

    const scrollPosition: number = window.scrollY;
    const footerPosition: number = footer.offsetTop;
    const adjustedScroll: number = scrollPosition - footerPosition;

    const contentDisplacement = Math.max(0, adjustedScroll / 1.8);

    footerContent.style.transform = `translateY(${contentDisplacement}px)`;
  });
}
