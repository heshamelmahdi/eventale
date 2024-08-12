import type { Metadata } from "next";
import { montserrat } from "@/lib/fonts";
import { events } from "./eventData";
import { constructMetadata } from "@/lib/utils";

export type EventKeys = "phieg-beach-day" | "byoutak-the-godfather";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { projectName: string };
}>) {
  const project = events[params.projectName as EventKeys];

  const metadata: Metadata = project
    ? constructMetadata({
        title: project.title,
        description: project.description,
      })
    : constructMetadata();

  return (
    <html lang="en">
      <head>
        <title>{metadata.title?.toString()}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description?.toString()} />
      </head>
      <body
        className={`${montserrat.className} overflow-y-scroll overflow-x-hidden w-screen bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
