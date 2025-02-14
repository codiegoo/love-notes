import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"]
})


export const metadata = {
  title: "NotesOfMyLove",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
