import SectionHeader from "../SectionHeader";
import PastEventsBackdrop from "./PastEventsBackdrop";
import { pastEvents } from "./PastEventsCopy";

const PastEvents = () => {
  const topLine = "Events We've Done";
  const description =
    "Discover the success stories of our past events, where creativity met excellence to deliver unforgettable experiences that left a lasting impression on all attendees.";
  const titleLine1 = [
    {
      word: "See",
      className: "",
    },
    {
      word: "It",
      className: "",
    },
    {
      word: "To",
      className: "text-primary",
    },
  ];

  const titleLine2 = [
    {
      word: "Believe",
      className: "",
    },
    {
      word: "It",
      className: "text-primary",
    },
  ];

  return (
    <section
      id="past-events"
      className="relative h-full justify-center flex flex-col z-50 bg-black pt-4 items-center gap-24"
    >
      <div className="z-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <PastEventsBackdrop pastEvents={pastEvents} />
      </div>
      <SectionHeader
        topLine={topLine}
        description={description}
        line1={titleLine1}
        line2={titleLine2}
        className="z-10 absolute w-fit h-fit left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
};
export default PastEvents;
