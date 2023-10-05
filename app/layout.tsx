import { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import { ReactNode } from "react";
import "../index.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--bebas-neue",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--outfit",
});

export const metadata: Metadata = {
  title: "Electron Volts 7393",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
