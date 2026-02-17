import type { Metadata } from "next";
// import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../public/fonts/notosansthai/NotoSansThai-Regular.ttf',
})

// const notoSansThai = Noto_Sans_Thai({
//   variable: "--font-noto-sans-thai",
//   subsets: ["latin", "thai"],
// });

export const metadata: Metadata = {
  title: "First Next.js App",
  description: "A simple Next.js application with multiple pages and layouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} antialiased`}
      >
        <Navbar />
        <main className="p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
