import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mauricio Meza — Mechanical Designer & Mechatronics Engineer",
  description:
    "Portfolio of Mauricio Meza: 7+ years mechanical design and manufacturing engineering, EE / mechatronics background, pursuing MS Robotics at ASU. Phoenix, AZ.",
  keywords: [
    "mechanical designer",
    "mechatronics engineer",
    "SolidWorks",
    "CSWP",
    "robotics",
    "Phoenix AZ",
    "Tempe AZ",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/portfolio-32.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
