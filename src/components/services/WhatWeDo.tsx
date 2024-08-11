import SectionHeader from "../SectionHeader";
import { BackgroundOverlayCard } from "../ui/background-overlay-card";
import { whatWeDoHeader } from "../sectionCopy";

const WhatWeDo = () => {
  const services = [
    {
      beforeBg: "bg-corporate-1",
      afterBg1: "before:bg-corporate-2",
      afterBg2: "hover:bg-corporate-2",
      title: "Corporate Events",
      description:
        "We create impactful corporate events that blend professionalism with entertainment, leaving a lasting impression on your clients and team.",
    },
    {
      beforeBg: "bg-office-1",
      afterBg1: "before:bg-office-2",
      afterBg2: "hover:bg-office-2",
      title: "Bringing Fun to Work",
      description:
        "Energize your workspace with engaging in-office events that foster team spirit, creativity, and collaboration without leaving the office.",
    },
    {
      beforeBg: "bg-outdoor-1",
      afterBg1: "before:bg-outdoor-2",
      afterBg2: "hover:bg-outdoor-2",
      title: "Unwind and Reconnect",
      description:
        "Our retreats offer a perfect balance of relaxation and team-building, designed to rejuvenate your team and strengthen bonds in inspiring settings.",
    },
    {
      beforeBg: "bg-conference-1",
      afterBg1: "before:bg-conference-2",
      afterBg2: "hover:bg-conference-2",
      title: "Conference Events",
      description:
        "Whether you have 100 or 1000 attendees, we manage every detail of your conference to ensure a seamless experience that exceeds expectations.",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="flex flex-col z-50 bg-primary pt-20 items-center gap-24"
    >
      <SectionHeader
        topLine={whatWeDoHeader.topLine}
        description={whatWeDoHeader.description}
        line1={whatWeDoHeader.line1}
        line2={whatWeDoHeader.line2}
        className="text-black"
      />
      <div className="flex flex-col md:flex-row w-fit">
        {services.map((service, index) => (
          <BackgroundOverlayCard
            key={index}
            beforeBg={service.beforeBg}
            afterBg1={service.afterBg1}
            afterBg2={service.afterBg2}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
export default WhatWeDo;
