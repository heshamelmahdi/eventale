"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { events } from "./eventData";
import { cn } from "@/lib/utils";
import { anton } from "@/lib/fonts";
import { EventKeys } from "./layout";

const Page = () => {
  const pathname = usePathname();
  const projectName = pathname.split("/")[2];

  const project = events[projectName as EventKeys];

  return (
    <main className="h-full w-full flex flex-col items-center">
      <Navbar />
      <div className="w-full h-full md:max-h-[80vh] flex flex-col md:flex-row mt-[65px] p-4 md:p-36">
        <div className="flex flex-col gap-2 w-full md:max-w-[40%] md:h-[50vh] justify-between">
          <div className="flex flex-col gap-4">
            <h1 className={cn(anton.className, "text-2xl")}>{project.title}</h1>
            <p className="font-extralight">{project.description}</p>
          </div>
          <div className="flex flex-col gap-4 font-extralight">
            <p>
              <strong>Location:</strong> {project.location}{" "}
            </p>
            <p>
              <strong>Theme: </strong>
              {project.theme}
            </p>
          </div>
        </div>
        <div className="w-full h-full items-center justify-center md:justify-start py-10 md:py-0 md:ml-12 flex">
          <div className="rounded-md">
            <video
              src={project.video}
              width={281.25}
              height={500}
              className="rounded-md"
              autoPlay
              loop
              muted
              controls
            />
          </div>
        </div>
      </div>
      <Footer className="pb-10" />
    </main>
  );
};
export default Page;
