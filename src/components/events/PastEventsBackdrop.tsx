"use client";
import useScreenWidth from "@/hooks/getScreenWidth";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { PastEventsCard } from "./PastEventsCard";
import { pastEvents } from "./PastEventsCopy";

export type PastEventType = {
  beforeBg: string;
  afterBg1: string;
  afterBg2: string;
  title: string;
  description: string;
  location: string;
  theme: string;
  projectName: string;
  // image: string;
  // video: string;
};

export type PastEventsType = PastEventType[];

const PastEventsBackdrop = ({ pastEvents }: { pastEvents: PastEventsType }) => {
  const screenWidth = useScreenWidth();
  const transformMapKey =
    screenWidth < 768
      ? "mobile"
      : screenWidth < 1024
      ? "tablet"
      : screenWidth < 1280
      ? "large"
      : "xLarge";

  const sliceEventsMap = {
    mobile: 24,
    tablet: 9,
    large: 12,
    xLarge: 18,
  };
  const slice = sliceEventsMap[transformMapKey];

  const PastEventsChildren = ({
    cardClassName,
  }: {
    cardClassName?: string;
  }) => {
    return pastEvents.map((item, idx) => (
      <PastEventsCard
        key={idx}
        beforeBg={item.beforeBg}
        afterBg1={item.afterBg1}
        afterBg2={item.afterBg2}
        // image={item.image}
        // video={item.video}
        title={item.title}
        description={item.description}
        location={item.location}
        theme={item.theme}
        projectName={item.projectName}
        cardClassName={cardClassName}
      />
    ));
  };

  if (transformMapKey === "mobile") {
    return (
      <div>
        <InfiniteMovingCards speed="extraslow" direction="left">
          <PastEventsChildren cardClassName="opacity-100 filter-none" />
        </InfiniteMovingCards>
        <InfiniteMovingCards speed="extraslow" direction="right">
          <PastEventsChildren />
        </InfiniteMovingCards>
        <InfiniteMovingCards speed="extraslow" direction="left">
          <PastEventsChildren cardClassName="opacity-100 filter-none" />
        </InfiniteMovingCards>
      </div>
    );
  } else {
    return pastEvents.slice(0, slice).map((proj, index) => (
      <PastEventsCard
        key={index}
        beforeBg={proj.beforeBg}
        afterBg1={proj.afterBg1}
        afterBg2={proj.afterBg2}
        // image={proj.image}
        // video={proj.video}
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
