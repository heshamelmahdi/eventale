"use client";
import { anton } from "@/lib/fonts";
import { gradualIncreaseY } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function TeamMemberCard({
  bg,
  title,
  description,
  index,
}: {
  bg: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className="sm:max-w-xs sm:w-[20rem] w-screen"
      variants={gradualIncreaseY(index * 0.5)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          `${bg} bg-cover`
        )}
      >
        <div className="text relative z-50 h-full flex flex-col justify-end">
          <h1
            className={cn(
              "font-bold text-xl md:text-3xl text-white relative group-hover:text-primary transition-all duration-75",
              anton.className
            )}
          >
            {title}
          </h1>
          <p className="font-normal text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
