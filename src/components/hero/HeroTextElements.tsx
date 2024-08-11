"use client";

import { anton } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { staggerUpWithShadowText } from "../CustomMotions";
import { fadeIn, slideInFromBottom } from "@/lib/motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

export const HeroTitle = ({ className }: { className: string }) => {
  const ref = useRef(null);
  const screenWidth = window.innerWidth;
  const transformMapKey =
    screenWidth < 768 ? "mobile" : screenWidth < 1280 ? "large" : "xLarge";

  const { scrollYProgress } = useScroll();

  // Map scroll position to transform value
  const transformMap = {
    mobile: {
      scroll: [0, 0.05],
      transform: [-20, 500],
    },
    large: {
      scroll: [0, 0.2],
      transform: [-40, 500],
    },
    xLarge: {
      scroll: [0, 0.25],
      transform: [-75, 500],
    },
  };
  const transformValues = transformMap[transformMapKey];
  const yTransform = useTransform(
    scrollYProgress,
    transformValues.scroll,
    transformValues.transform
  );

  const titleClassName = cn(
    "text-center text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-extrabold md:overflow-hidden z-[8]",
    anton.className
  );

  return (
    <motion.div
      className={cn("flex flex-col items-center justify-center", className)}
      ref={ref}
      style={{ y: yTransform }}
    >
      <h1 className={cn(titleClassName)}>
        {staggerUpWithShadowText("THE NEXT EVENT FOR")}
      </h1>
      <h1 className={cn(titleClassName, "text-primary")}>
        {staggerUpWithShadowText("YOUR COMPANY")}
      </h1>
    </motion.div>
  );
};

export const HeroDescription = ({ className }: { className: string }) => {
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 768;
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-center text-sm md:text-xl font-thin tracking-tighter text-white z-[15]",
        className
      )}
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.p className="translate-y-24 lg:translate-y-32 min-[1300px]:translate-y-36 min-[1600px]:translate-y-52 w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-center">
        {isMobile
          ? "Unforgettable entertainment, immersive experiences, and moments that inspire."
          : "Elevating corporate events in Egypt with unforgettable entertainment, immersive experiences, and moments that inspire."}
      </motion.p>
    </motion.div>
  );
};

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 translate-y-40 p-4 md:translate-y-60 min-[1300px]:translate-y-[18rem] min-[1600px]:translate-y-[22rem] bg-primary rounded-full cursor-pointer">
      <Link
        href="#past-events"
        className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] xl:w-[130px] xl:h-[130px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/past-projects.png"
          width={148}
          height={148}
          alt="See Projects Button"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-xl md:text-4xl group-hover:translate-x-2 transition-all duration-300 text-black" />
      </Link>
    </div>
  );
};

export const ProjectsBtnLargeScreen = ({
  className,
}: {
  className: string;
}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={cn(className, "flex flex-col items-center justify-center")}
    >
      <ProjectsBtn />
    </motion.div>
  );
};
