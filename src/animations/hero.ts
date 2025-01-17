import gsap from "gsap";

export function heroMainAnimation() {
  gsap.fromTo(
    ".hero__main",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    }
  );
}

export function heroImagesAnimation() {
  gsap.fromTo(
    ".hero__images",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const womanImage: HTMLImageElement | null =
    document.querySelector(".hero__women img");
  const textElement: HTMLParagraphElement | null =
    document.querySelector(".hero__text p");
    const scanLine: HTMLElement | null = document.querySelector('.hero__scanline');
    const products: HTMLElement | null = document.querySelector('.hero__products');


  setTimeout(() => {
    if (womanImage && textElement && scanLine && products) {
      womanImage.src = "./images/women3.avif";
      womanImage.alt = "A woman with scanned skin";
      textElement.textContent = "Here's a set of tailored skincare:";
      scanLine.style.display = 'none';
      products.style.display = 'flex';
    }
  }, 5000);
});

