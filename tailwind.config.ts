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
          "url(https://storage.googleapis.com/eventale-website-media/services/corporate-1.jpg)",
        "corporate-2":
          "url(https://storage.googleapis.com/eventale-website-media/services/corporate-2.jpg)",
        "office-1":
          "url(https://storage.googleapis.com/eventale-website-media/services/office-1.jpg)",
        "office-2":
          "url(https://storage.googleapis.com/eventale-website-media/services/office-2.jpg)",
        "outdoor-1":
          "url(https://storage.googleapis.com/eventale-website-media/services/outdoor-1.jpg)",
        "outdoor-2":
          "url(https://storage.googleapis.com/eventale-website-media/services/outdoor-2.jpg)",
        "conference-1":
          "url(https://storage.googleapis.com/eventale-website-media/services/conference-1.jpg)",
        "conference-2":
          "url(https://storage.googleapis.com/eventale-website-media/services/conference-2.jpg)",
        "byoutak-1":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/1.png)",
        "byoutak-2":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/2.PNG)",
        "byoutak-3":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/3.JPG)",
        "byoutak-4":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/4.JPG)",
        "byoutak-5":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/5.JPG)",
        "byoutak-6":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/6.png)",
        "byoutak-7":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/7.png)",
        "byoutak-8":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/8.png)",
        "byoutak-gif-1":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/6.gif)",
        "byoutak-gif-2":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/7.gif)",
        "byoutak-gif-3":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/8.gif)",
        "byoutak-gif-4":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/9.gif)",
        "byoutak-gif-5":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/byoutak/10.gif)",
        "phieg-1":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/1.JPG)",
        "phieg-2":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/2.JPG)",
        "phieg-3":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/3.png)",
        "phieg-gif-1":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/1.gif)",
        "phieg-gif-2":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/2.gif)",
        "phieg-gif-3":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/3.gif)",
        "phieg-gif-4":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/4.gif)",
        "phieg-gif-5":
          "url(https://storage.googleapis.com/eventale-website-media/past-events/phieg/5.gif)",
        mostafa:
          "url(https://storage.googleapis.com/eventale-website-media/team/mostafa.JPG)",
        samar:
          "url(https://storage.googleapis.com/eventale-website-media/team/samar.JPG)",
        ahmed:
          "url(https://storage.googleapis.com/eventale-website-media/team/ahmed.jpeg)",
        bahy: "url(https://storage.googleapis.com/eventale-website-media/team/bahy.jpeg)",
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
