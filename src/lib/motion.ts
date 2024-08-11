export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromTop(delay: number) {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromBottom(delay: number) {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const generateAnimationValues = (
  start: number,
  end: number,
  steps: number = 100
) => {
  const step = (end - start) / steps;
  const values = [];
  for (let i = 0; i <= steps; i++) {
    values.push(start + step * i);
  }

  return values;
};

export const staggerUpWithShaddow = {
  initial: {
    opacity: 0,
    y: 120,
    rotate: 10,
    textShadow:
      "-10px -30px 2px rgba(255,222,89, 0.8), -10px -40px 2px rgba(219,74,43, 0.8)",
  }, // Characters start below and invisible
  animate: (index: number) => ({
    opacity: generateAnimationValues(0, 1),
    y: generateAnimationValues(120, 0),
    rotate: generateAnimationValues(10, 0),
    textShadow:
      "0px 0px 0px rgba(0, 0, 0, 0.0), 0px 0px 0px rgba(0, 0, 0, 0.0)",
    transition: {
      delay: 0.02 * index,
      duration: 0.5,
      ease: "easeOut",
      times: generateAnimationValues(0, 1),
    },
  }),
};
export const staggerUp = {
  initial: {
    opacity: 0,
    y: 120,
    rotate: 10,
  }, // Characters start below and invisible
  animate: (index: number) => ({
    opacity: generateAnimationValues(0, 1),
    y: generateAnimationValues(120, 0),
    rotate: generateAnimationValues(10, 0),

    transition: {
      delay: 0.02 * index,
      duration: 0.5,
      ease: "easeOut",
      times: generateAnimationValues(0, 1),
    },
  }),
};

export const gradualIncreaseY = (delay: number) => {
  return {
    initial: {
      clipPath: "inset(100% 0 0 0)",
    },
    animate: {
      clipPath: "inset(0% 0 0 0)",
      transition: {
        duration: 1,
        delay,
        ease: "easeOut",
      },
    },
  };
};
