"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { contactUsHeader } from "./sectionCopy";
import SectionHeader from "./SectionHeader";
import {
  openFacebookPage,
  openInstagramPage,
  openWhatsAppChat,
} from "@/lib/socialActions";
import LiftUpButton from "./ui/lift-up-borders-button";
import Footer from "./Footer";

const ContactUs = () => {
  const contClassName = "flex gap-2 items-center justify-center";
  const contacts = [
    {
      text: (
        <span className={contClassName}>
          Message <FaWhatsapp />
        </span>
      ),
      link: () => openWhatsAppChat(),
    },
    {
      text: (
        <span className={contClassName}>
          Message <FaInstagram />
        </span>
      ),
      link: () => openInstagramPage(),
    },
    {
      text: (
        <span className={contClassName}>
          Message <FaFacebookF />
        </span>
      ),
      link: () => openFacebookPage(),
    },
  ];

  return (
    <section
      id="contact-us"
      className="flex flex-col z-50 bg-black py-20 items-center gap-8"
    >
      <SectionHeader
        topLine={contactUsHeader.topLine}
        description={contactUsHeader.description}
        line1={contactUsHeader.line1}
        line2={contactUsHeader.line2}
      />
      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-2 mb-10">
        {contacts.map((cont, idx) => (
          <LiftUpButton key={idx} text={cont.text} onClick={cont.link} />
        ))}
      </div>
      {/* Line Break */}
      {/* <div> */}
      {/* <div className="h-px w-[90vw] bg-white" /> */}
      <Footer />
      {/* </div> */}
    </section>
  );
};
export default ContactUs;
