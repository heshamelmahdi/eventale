const randomize = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const phiegTitle = "Phieg Beach Day";
const phiegDescription =
  "Hosted a day of fun at the beach. Transforming the Phieg office into a beach paradise.";
const phiegLocation = "Phieg Marketing Agency";
const phiegTheme = "Beach Day";
const phiegProjectName = "phieg-beach-day";
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

const byoutakTitle = "Byoutak's The Godfather";
const byoutakDescription =
  "Hosted a Godfather-themed day of fun at the office. With custom artwork, games, and food!";
const byoutakLocation = "Byoutak's Office";
const byoutakTheme = "The Godfather";
const byoutakProjectName = "byoutak-the-godfather";
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
