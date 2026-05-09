import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm md:text-[10px]">
          Welcome to Jujutsu Kaisen
        </h2>
        <AnimatedTitle
          title="Witness<b> </b>Most Awaited Battle
      <br/>In Anime History"
          containerClass="mt-5 !text-black text-center"
        />
        <div className="about-subtext">
          <p>{`The "Honored One" vs. the "King of Curses."`}</p>
          <p>{`A clash of god-like power where modern mastery meets ancient, absolute malice. Only one remains.`}</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/domain-clash.webp"
            alt="about"
            className="absolute left-0 top-0 size-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
