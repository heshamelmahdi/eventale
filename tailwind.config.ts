import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "corporate-1":
          "url(https://storage.googleapis.com/eventale-website-media/services/corporate-1.webp)",
        "corporate-2":
          "url(https://storage.googleapis.com/eventale-website-media/services/corporate-2.webp)",
        "office-1":
          "url(https://storage.googleapis.com/eventale-website-media/services/office-1.webp)",
        "office-2":
          "url(https://storage.googleapis.com/eventale-website-media/services/office-2.webp)",
        "outdoor-1":
          "url(https://storage.googleapis.com/eventale-website-media/services/outdoor-1.webp)",
        "outdoor-2":
          "url(https://storage.googleapis.com/eventale-website-media/services/outdoor-2.webp)",
        "conference-1":
          "url(https://storage.googleapis.com/eventale-website-media/services/conference-1.webp)",
        "conference-2":
          "url(https://storage.googleapis.com/eventale-website-media/services/conference-2.webp)",
        // "byoutak-1":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/1.webp)",
        // "byoutak-2":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/2.webp)",
        // "byoutak-3":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/3.webp)",
        // "byoutak-4":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/4.webp)",
        // "byoutak-5":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/5.webp)",
        // "byoutak-6":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/6.webp)",
        // "byoutak-7":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/7.webp)",
        // "byoutak-8":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/8.webp)",
        // "byoutak-gif-1":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/byoutak-1.webm)",
        // "byoutak-gif-2":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/byoutak-2.webm)",
        // "byoutak-gif-3":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/byoutak-3.webm)",
        // "byoutak-gif-4":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/byoutak-4.webm)",
        // "byoutak-gif-5":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/byoutak-5.webm)",
        // "phieg-1":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/1.webp)",
        // "phieg-2":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/2.webp)",
        // "phieg-3":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/3.webp)",
        // "phieg-gif-1":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/1.gif)",
        // "phieg-gif-2":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/2.gif)",
        // "phieg-gif-3":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/3.gif)",
        // "phieg-gif-4":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/4.gif)",
        // "phieg-gif-5":
        //   "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/5.gif)",
        mostafa:
          "url(https://storage.googleapis.com/eventale-website-media/team/mostafa.webp)",
        samar:
          "url(https://storage.googleapis.com/eventale-website-media/team/samar.webp)",
        ahmed:
          "url(https://storage.googleapis.com/eventale-website-media/team/ahmed.webp)",
        bahy: "url(https://storage.googleapis.com/eventale-website-media/team/bahy.webp)",
      },
      colors: {
        primary: "#ffde59",
        secondary: "#db4a2b",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        move: "move 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
