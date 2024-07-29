import localFont from "next/font/local";

export const font = localFont({
  src: [
    {
      path: "../../../public/fonts/chirp/regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/chirp/medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/chirp/bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/chirp/heavy.woff",
      weight: "900",
      style: "normal",
    },
  ],
  //   preload: true,
  weight: "400 500 700 900",
});
