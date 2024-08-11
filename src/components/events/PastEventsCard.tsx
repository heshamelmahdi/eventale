"use client";
import { anton } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export function PastEventsCard({
  beforeBg,
  afterBg1,
  afterBg2,
  title,
  description,
  location,
  theme,
  projectName,
}: {
  beforeBg: string;
  afterBg1: string;
  afterBg2: string;
  title: string;
  description: string;
  location: string;
  theme: string;
  projectName: string;
}) {
  const before1 = `${beforeBg} bg-cover`;
  const after1 = `${afterBg1} before:z-[-1]`;
  const after2 = `${afterBg2}`;

  const router = useRouter();
  const handleOpenProject = () => {
    router.push(`/past-events/${projectName}`);
  };
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full overflow-hidden relative card h-96 shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          before1,
          // Preload hover image by setting it in a pseudo-element
          after1,
          after2,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 grayscale hover:filter-none opacity-20 hover:opacity-100"
        )}
      >
        <div className="text relative z-50 h-full flex flex-col justify-between">
          <h1
            className={cn(
              "font-bold text-xl md:text-3xl text-black relative group-hover:text-primary transition-all duration-75",
              anton.className
            )}
          >
            {title}
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-xs text-white">
                Location: {location}
              </p>
              <p className="font-semibold text-xs text-white">Theme: {theme}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-normal text-gray-50 relative text-[10px] leading-3">
                {description}
              </p>
              <div className="bg-secondary rounded-full h-fit w-fit p-4">
                <FaArrowRight
                  className="cursor-pointer text-white h-8 w-8 rotate-[-45deg] group-hover:rotate-0 transition-all duration-300"
                  onClick={handleOpenProject}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
