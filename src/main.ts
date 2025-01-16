import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".hero__main",
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    }
  );
});

document.addEventListener("DOMContentLoaded", () => {
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
  });

interface IntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
}

class CardAnimation {
  private mediaContainer: Element;
  private cards: NodeListOf<Element>;
  private observer: IntersectionObserver;

  constructor() {
    this.mediaContainer = document.querySelector(".features__primary__media")!;
    this.cards = document.querySelectorAll(".card");

    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    if (this.mediaContainer) {
      this.observer.observe(this.mediaContainer);
    }
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.cards.forEach((card) => {
          card.classList.add("animate");
        });
      } else {
        this.cards.forEach((card) => {
          card.classList.remove("animate");
        });
      }
    });
  }

  public destroy(): void {
    if (this.mediaContainer) {
      this.observer.unobserve(this.mediaContainer);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const cardAnimation = new CardAnimation();
});

const footer = document.querySelector('.footer') as HTMLElement;
const footerContent = document.querySelector('.footer__content') as HTMLElement;
const imageSection = document.querySelector('.image__section') as HTMLElement;


window.addEventListener('scroll', () => {
    if (!footer || !footerContent || !imageSection) {
        return;
    }

    const scrollPosition: number = window.scrollY;
    const footerPosition: number = footer.offsetTop;
    const adjustedScroll: number = scrollPosition - footerPosition;
   

    const contentDisplacement = Math.max(0, adjustedScroll / 1.8);

     footerContent.style.transform = `translateY(${contentDisplacement}px)`;

});