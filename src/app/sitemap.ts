import { MetadataRoute } from "next";
import { events } from "./past-events/[projectName]/eventData";
import { EventKeys } from "./past-events/[projectName]/layout";

export default function sitemap(): MetadataRoute.Sitemap {
  const seoMap = [
    {
      url: "https://www.eventale.co",
      lastModified: new Date(),
      priority: 1,
    },
  ];

  Object.keys(events).forEach((event) => {
    seoMap.push({
      url: `https://www.eventale.co/past-events/${event}`,
      lastModified: new Date(),
      priority: 0.9,
    });
  });
  return seoMap;
}
