import {
  Anton,
  Roboto,
  Arimo,
  Inter,
  Montserrat,
  Lato,
} from "next/font/google";

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const arimo = Arimo({ subsets: ["latin"], weight: ["400", "700"] });

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400"],
});

export const lato = Lato({ subsets: ["latin"], weight: ["400"] });
