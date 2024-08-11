"use client";

import Image from "next/image";
import {
  HeroDescription,
  HeroTitle,
  ProjectsBtnLargeScreen,
} from "./HeroTextElements";

const Hero = () => {
  return (
    <div className="w-full h-[26rem] md:h-full relative">
      <div className="w-full">
        <Image
          src="/skyline-top.png"
          alt="Cairo Skyline"
          width={4000}
          height={1579}
          className="w-full brightness-[0.1] object-cover relative hidden md:block"
          priority
        />
        <Image
          src="/skyline-bottom.png"
          alt="Cairo Skyline"
          width={4000}
          height={420}
          className="w-full brightness-[0.1] z-10 object-cover relative hidden md:block"
          priority
        />
        <Image
          src="/pyramid.png"
          alt="Egypt Pyramids"
          width={3000}
          height={2000}
          className="absolute bottom-0 left-[50%] translate-x-[-50%] w-full md:w-[50%] h-[50%] brightness-[0.1] z-10 bg-blend-color-burn"
          priority
        />
        <HeroTitle className="absolute inset-0" />
        <HeroDescription className="absolute inset-0" />
        <ProjectsBtnLargeScreen className="absolute inset-0 z-[15]" />
      </div>
    </div>
  );
};
export default Hero;
