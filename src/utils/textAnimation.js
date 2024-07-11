// utils/TextAnimation.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const animateTextOnScroll = (elementRef, bgColor, fgColor) => {
  const splitTypes = elementRef.current.querySelectorAll(".reveal-type");

  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars" });

    gsap.fromTo(
      text.chars,
      {
        color: bgColor,
      },
      {
        color: fgColor,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
          toggleActions: "play play reverse reverse",
        },
      }
    );
  });
};
