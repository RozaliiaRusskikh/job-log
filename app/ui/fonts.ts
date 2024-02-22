import { Roboto, Nunito_Sans } from "next/font/google";

export const roboto = Roboto({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const nunito_sans = Nunito_Sans({
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
