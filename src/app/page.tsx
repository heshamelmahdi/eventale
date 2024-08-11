import ContactUs from "@/components/ContactUs";
import PastEvents from "@/components/events/PastEvents";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/services/WhatWeDo";
import TheTeam from "@/components/team/TheTeam";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <PastEvents />
      <TheTeam />
      <ContactUs />
    </main>
  );
}
