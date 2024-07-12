// ScrollAnimation.jsx
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ children }) => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: 'chars' });

      gsap.fromTo(text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse'
          }
        });
    });
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default ScrollAnimation;
