"use client";

import { staggerUp, staggerUpWithShaddow } from "@/lib/motion";
import { motion } from "framer-motion";

export const staggerUpWithShadowText = (text: string) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={staggerUpWithShaddow}
      initial="initial"
      animate="animate"
      custom={index}
      style={{ display: "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};
export const staggerUpText = (text: string) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={staggerUp}
      initial="initial"
      animate="animate"
      custom={index}
      style={{ display: "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};
