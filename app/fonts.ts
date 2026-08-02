import localFont from "next/font/local";

export const nunitoSans = localFont({
  src: [
    {
      path: "../public/branding/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "../public/branding/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-nunito-sans",
  display: "swap",
});
