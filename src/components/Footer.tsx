import localFont from "next/font/local";
import { staggerUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { navItems } from "./Navbar";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {
  openAstraWebs,
  openFacebookPage,
  openInstagramPage,
} from "@/lib/socialActions";

const archicoco = localFont({ src: "../../public/fonts/archicoco.otf" });

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      id="footer"
      className={cn(
        "w-[80vw] flex flex-col items-center justify-center p-0 mt-6",
        className
      )}
    >
      <div className="w-full h-full overflow-hidden flex justify-start">
        <h1
          className={cn(
            "text-[70px] md:text-[100px] text-primary tracking-tighter",
            archicoco.className
          )}
        >
          eventale
        </h1>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex justify-between w-full">
        <Copyright />
        <NavLinks />
        <SocialLinks />
      </div>

      {/*  Mobile */}
      <div className="flex md:hidden flex-col justify-between gap-3 w-full items-center">
        <NavLinks />
        <div className="flex justify-between w-full">
          <Copyright />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const Copyright = () => {
  return (
    <div className="text-sm font-thin w-fit min-w-44">
      Site by{" "}
      <span
        className="cursor-pointer hover:underline transition-all duration-700"
        onClick={() => openAstraWebs()}
      >
        AstraWebs
      </span>{" "}
      &copy; {new Date().getFullYear()}
    </div>
  );
};

const NavLinks = () => {
  return (
    <motion.div
      className="w-full flex items-center justify-start md:justify-center gap-4 text-white"
      variants={staggerUp}
      initial="initial"
      animate="animate"
      custom={0.1}
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="text-xs md:text-sm font-thin cursor-pointer hover:text-primary transition-all duration-300 z-50"
        >
          {item.title}
        </Link>
      ))}
    </motion.div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <FaFacebook
        className="text-white text-2xl hover:text-primary cursor-pointer"
        onClick={() => openFacebookPage()}
      />
      <AiFillInstagram
        className="text-white text-2xl hover:text-primary cursor-pointer"
        onClick={() => openInstagramPage()}
      />
    </div>
  );
};
