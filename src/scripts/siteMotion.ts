import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// One reveal per content group keeps the rhythm consistent across pages.
// Existing hero and proof-band entrances remain in CSS to avoid overlapping motion.
const revealGroups = [
  ['.home-intro-grid', ':scope > *'],
  ['.section-lines .section-heading', ':scope > *'],
  ['.line-illustration-grid', ':scope > *'],
  ['.line-custom-order', ':scope > *'],
  ['.narrative-grid', ':scope > *'],
  ['.home-social-inner', ':scope > *'],
  ['.contact-grid', ':scope > *'],
  ['.contact-visit', ':scope > *'],
  ['.story-grid', ':scope > *'],
  ['.institutional-section .section-heading', ':scope > *'],
  ['.institutional-grid', ':scope > *'],
  ['.commitment-grid', ':scope > :not(.commitment-values)'],
  ['.commitment-values', ':scope > *'],
  ['.reasons-section .section-heading', ':scope > *'],
  ['.reason-grid', ':scope > *'],
  ['.coverage-intro', ':scope > *'],
  ['.coverage-destinations', ':scope > *'],
  ['.coverage-map-wrap', ':scope'],
  ['.coverage-other', ':scope > *'],
  ['.line-detail-heading', ':scope > *'],
  ['.line-detail-list', ':scope > *'],
  ['.line-detail-closing-inner', ':scope > *'],
  ['.line-related-inner', ':scope > *'],
  ['.not-found-content', ':scope > *'],
] as const;

const motion = gsap.matchMedia();

motion.add('(prefers-reduced-motion: no-preference)', () => {
  for (const [groupSelector, itemSelector] of revealGroups) {
    for (const group of document.querySelectorAll<HTMLElement>(groupSelector)) {
      const items = itemSelector === ':scope' ? [group] : [...group.querySelectorAll<HTMLElement>(itemSelector)];
      if (!items.length) continue;

      gsap.from(items, {
        opacity: 0,
        y: 18,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: group,
          start: 'top 88%',
          once: true,
        },
      });
    }
  }
});
