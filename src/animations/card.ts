interface IntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
}

export class CardAnimation {
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

export function initCardAnimation() {
  const cardAnimation = new CardAnimation();
}
