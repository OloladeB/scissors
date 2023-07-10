import { Poppins } from "next/font/google";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Scissors - Cut your URLs",
  description: "AltSchool Capstone Project by Ololade Banjo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
