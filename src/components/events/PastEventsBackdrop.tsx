"use client";
import useScreenWidth from "@/hooks/getScreenWidth";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { PastEventsCard } from "./PastEventsCard";
import { pastEvents } from "./PastEventsCopy";

export type PastEventsType = {
  beforeBg: string;
  afterBg1: string;
  afterBg2: string;
  title: string;
  description: string;
  location: string;
  theme: string;
  projectName: string;
}[];

const PastEventsBackdrop = ({ pastEvents }: { pastEvents: PastEventsType }) => {
  const screenWidth = useScreenWidth();
  const transformMapKey =
    screenWidth < 768 ? "mobile" : screenWidth < 1280 ? "large" : "xLarge";

  const sliceEventsMap = {
    mobile: 24,
    large: 16,
    xLarge: 24,
  };
  const slice = sliceEventsMap[transformMapKey];

  if (transformMapKey === "mobile") {
    return (
      <div>
        <InfiniteMovingCards items={pastEvents} speed="slow" direction="left" />
        <InfiniteMovingCards
          items={pastEvents}
          speed="slow"
          direction="right"
        />
        <InfiniteMovingCards items={pastEvents} speed="slow" direction="left" />
      </div>
    );
  } else {
    return pastEvents
      .slice(0, slice)
      .map((proj, index) => (
        <PastEventsCard
          key={index}
          beforeBg={proj.beforeBg}
          afterBg1={proj.afterBg1}
          afterBg2={proj.afterBg2}
          title={proj.title}
          description={proj.description}
          location={proj.location}
          theme={proj.theme}
          projectName={proj.projectName}
        />
      ));
  }
};
export default PastEventsBackdrop;
