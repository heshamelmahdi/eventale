"use client";
import { anton } from "@/lib/fonts";
import { gradualIncreaseY } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function BackgroundOverlayCard({
  beforeBg,
  afterBg1,
  afterBg2,
  title,
  description,
  index,
}: {
  beforeBg: string;
  afterBg1: string;
  afterBg2: string;
  title: string;
  description: string;
  index: number;
}) {
  const before1 = `${beforeBg} bg-cover`;
  const after1 = `${afterBg1} before:z-[-1]`;
  const after2 = `${afterBg2}`;
  return (
    <motion.div
      className="sm:max-w-xs w-full"
      variants={gradualIncreaseY(index * 0.5)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          before1,
          // Preload hover image by setting it in a pseudo-element
          after1,
          after2,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 grayscale hover:filter-none hover:opacity-100"
        )}
      >
        <div className="text relative z-50 h-full flex flex-col justify-between">
          <h1
            className={cn(
              "font-bold text-xl md:text-3xl text-black relative group-hover:text-primary transition-all duration-75",
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
