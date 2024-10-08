import { theTeamHeader } from "../sectionCopy";
import SectionHeader from "../SectionHeader";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { TeamMemberCard } from "./TeamMemberCard";

const TheTeam = () => {
  const teamMembers = [
    {
      bg: "bg-ahmed",
      title: "Ahmed El-Mahdi",
      description: "Co-Founder",
    },
    {
      bg: "bg-bahy",
      title: "Bahy Amer",
      description: "Co-Founder",
    },
    {
      bg: "bg-mostafa",
      title: "Mostafa Ahmed",
      description: "Co-Founder",
    },
    {
      bg: "bg-samar",
      title: "Samar Sabeck",
      description: "Co-Founder",
    },
  ];

  return (
    <section
      id="the-team"
      className="flex flex-col z-50 bg-primary pt-10 items-center gap-8"
    >
      <SectionHeader
        topLine={theTeamHeader.topLine}
        description={theTeamHeader.description}
        line1={theTeamHeader.line1}
        line2={theTeamHeader.line2}
        className="text-black"
      />
      <div className="hidden md:grid md:grid-cols-2 xl:flex xl:flex-row w-fit">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            bg={member.bg}
            title={member.title}
            description={member.description}
            index={index}
          />
        ))}
      </div>
      <div className="flex md:hidden">
        <InfiniteMovingCards speed="fast" direction="left" pauseOnHover={false}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              bg={member.bg}
              title={member.title}
              description={member.description}
              index={index}
            />
          ))}
        </InfiniteMovingCards>
      </div>
    </section>
  );
};
export default TheTeam;
