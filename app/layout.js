import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raat Biraat - Order your food online and get your food delivered now",
  description: "RaatBiraat is one of the leading franchise for the students studying all night.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  );
}
