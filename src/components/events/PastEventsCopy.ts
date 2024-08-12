const randomize = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const PROJECT_SPLIT = 12;
const generateEventArray = (
  title: string,
  imgSrc: string,
  videoSrc: string,
  description: string,
  location: string,
  theme: string,
  projectName: string,
  imageRange: number,
  videoRange: number
) => {
  const eventsArray = [];
  for (let i = 1; i <= imageRange; i++) {
    for (let j = 1; j <= videoRange; j++) {
      eventsArray.push({
        image: `${imgSrc}${i}.webp`,
        video: `${videoSrc}${j}.webm`,
        title,
        description,
        location,
        theme,
        projectName,
      });
    }
  }

  return randomize(eventsArray).slice(0, PROJECT_SPLIT);
};

const phiegTitle = "Phieg Beach Day";
const phiegDescription =
  "Hosted a day of fun at the beach. Transforming the Phieg office into a beach paradise.";
const phiegLocation = "Phieg Marketing Agency";
const phiegTheme = "Beach Day";
const phiegProjectName = "phieg-beach-day";
const phiegImgSrc =
  "https://storage.googleapis.com/eventale-website-media/past-events/phieg/";
const phiegVideoSrc =
  "https://storage.googleapis.com/eventale-website-media/past-events/phieg/phieg-";

// const phiegEvent = generateEventArray(
//   phiegTitle,
//   phiegImgSrc,
//   phiegVideoSrc,
//   phiegDescription,
//   phiegLocation,
//   phiegTheme,
//   phiegProjectName,
//   3,
//   5
// );

const byoutakTitle = "Byoutak's The Godfather";
const byoutakDescription =
  "Hosted a Godfather-themed day of fun at the office. With custom artwork, games, and food!";
const byoutakLocation = "Byoutak's Office";
const byoutakTheme = "The Godfather";
const byoutakProjectName = "byoutak-the-godfather";
const byoutakImgSrc =
  "https://storage.googleapis.com/eventale-website-media/past-events/byoutak/";
const byoutakVideoSrc =
  "https://storage.googleapis.com/eventale-website-media/past-events/byoutak/byoutak-";

// const byoutakEvent = generateEventArray(
//   byoutakTitle,
//   byoutakImgSrc,
//   byoutakVideoSrc,
//   byoutakDescription,
//   byoutakLocation,
//   byoutakTheme,
//   byoutakProjectName,
//   8,
//   5
// );

const phiegEvent = [
  {
    beforeBg: `bg-phieg-1`,
    afterBg1: `before:bg-phieg-gif-1`,
    afterBg2: `hover:bg-phieg-gif-1`,
    title: phiegTitle,
    description: phiegDescription,
    location: phiegLocation,
    theme: phiegTheme,
    projectName: phiegProjectName,
  },
  {
    beforeBg: `bg-phieg-1`,
    afterBg1: `before:bg-phieg-gif-5`,
    afterBg2: `hover:bg-phieg-gif-5`,
    title: phiegTitle,
    description: phiegDescription,
    location: phiegLocation,
    theme: phiegTheme,
    projectName: phiegProjectName,
  },
  {
    beforeBg: `bg-phieg-2`,
    afterBg1: `before:bg-phieg-gif-1`,
    afterBg2: `hover:bg-phieg-gif-1`,
    title: phiegTitle,
    description: phiegDescription,
    location: phiegLocation,
    theme: phiegTheme,
    projectName: phiegProjectName,
  },
  {
    beforeBg: `bg-phieg-2`,
    afterBg1: `before:bg-phieg-gif-3`,
    afterBg2: `hover:bg-phieg-gif-3`,
    title: phiegTitle,
    description: phiegDescription,
    location: phiegLocation,
    theme: phiegTheme,
    projectName: phiegProjectName,
  },
  {
    beforeBg: `bg-phieg-3`,
    afterBg1: `before:bg-phieg-gif-2`,
    afterBg2: `hover:bg-phieg-gif-2`,
    title: phiegTitle,
    description: phiegDescription,
    location: phiegLocation,
    theme: phiegTheme,
    projectName: phiegProjectName,
  },
  {
    beforeBg: `bg-phieg-3`,
    afterBg1: `before:bg-phieg-gif-4`,
    afterBg2: `hover:bg-phieg-gif-4`,
    title: phiegTitle,
    description: phiegDescription,
    location: phiegLocation,
    theme: phiegTheme,
    projectName: phiegProjectName,
  },
];

const byoutakEvent = [
  {
    beforeBg: `bg-byoutak-1`,
    afterBg1: `before:bg-byoutak-gif-1`,
    afterBg2: `hover:bg-byoutak-gif-1`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-1`,
    afterBg1: `before:bg-byoutak-gif-3`,
    afterBg2: `hover:bg-byoutak-gif-3`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-2`,
    afterBg1: `before:bg-byoutak-gif-2`,
    afterBg2: `hover:bg-byoutak-gif-2`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-2`,
    afterBg1: `before:bg-byoutak-gif-4`,
    afterBg2: `hover:bg-byoutak-gif-4`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-3`,
    afterBg1: `before:bg-byoutak-gif-2`,
    afterBg2: `hover:bg-byoutak-gif-2`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-3`,
    afterBg1: `before:bg-byoutak-gif-5`,
    afterBg2: `hover:bg-byoutak-gif-5`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-4`,
    afterBg1: `before:bg-byoutak-gif-1`,
    afterBg2: `hover:bg-byoutak-gif-1`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-4`,
    afterBg1: `before:bg-byoutak-gif-5`,
    afterBg2: `hover:bg-byoutak-gif-5`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-5`,
    afterBg1: `before:bg-byoutak-gif-2`,
    afterBg2: `hover:bg-byoutak-gif-2`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-5`,
    afterBg1: `before:bg-byoutak-gif-3`,
    afterBg2: `hover:bg-byoutak-gif-3`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-6`,
    afterBg1: `before:bg-byoutak-gif-1`,
    afterBg2: `hover:bg-byoutak-gif-1`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
  {
    beforeBg: `bg-byoutak-6`,
    afterBg1: `before:bg-byoutak-gif-4`,
    afterBg2: `hover:bg-byoutak-gif-4`,
    title: byoutakTitle,
    description: byoutakDescription,
    location: byoutakLocation,
    theme: byoutakTheme,
    projectName: byoutakProjectName,
  },
];

export const pastEvents = randomize([phiegEvent, byoutakEvent].flat()).slice(
  0,
  24
);
