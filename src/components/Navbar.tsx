"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerUp } from "@/lib/motion";
import HamburgerNavbar from "./HamburgerNavbar";

export const navItems = [
  {
    title: "About Us",
    link: "/#the-team",
  },
  {
    title: "What We Do",
    link: "/#what-we-do",
  },
  {
    title: "Past Events",
    link: "/#past-events",
  },
  {
    title: "Contact Us",
    link: "/#contact-us",
  },
];
const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 z-50 h-[65px] p-5 overflow-hidden flex items-center">
      <div className="flex justify-between items-center w-full">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="Eventale Logo"
            width={200}
            height={25}
            className="object-cover w-[150px] h-[18.75px] md:w-[200px] md:h-[25px]"
          />
        </Link>

        {/* Laptop */}
        <motion.div
          className="hidden md:flex items-center justify-center gap-4 text-white"
          variants={staggerUp}
          initial="initial"
          animate="animate"
          custom={0.1}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-sm font-thin cursor-pointer hover:text-primary transition-all duration-300 z-50"
            >
              {item.title}
            </Link>
          ))}
        </motion.div>

        {/* Mobile */}
        <div className="block md:hidden">
          <HamburgerNavbar />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
