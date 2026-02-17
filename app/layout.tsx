import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'

const notosanthai = localFont({
  src: [
    {
      path: '../public/fonts/notosansthai/NotoSansThai-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ]
})

const sarabun = localFont({
  src: [
    {
      path: '../public/fonts/sarabun/sarabun.woff2',
      weight: '400',
      style: 'normal',
    },
  ]
})

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
        className={`${notosanthai.className} antialiased`}
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
