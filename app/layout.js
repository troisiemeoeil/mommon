import "./globals.css";
// import { Inter } from "next/font/google";
import Theming from "@/components/providers/Theme";
// import UiProvider from "@/components/providers/UiProvider";

import HeaderPage from "./(Header)/Header/Page";
import Footer from "./components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        {/* <body className={`${font.className} `}> */}
        <Theming>
          <HeaderPage />
          {children}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
