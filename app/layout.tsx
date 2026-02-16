import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["latin", "thai"],
});


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
        className={`${notoSansThai.variable} ${notoSansThai.className} antialiased`}
      >
        
        <ul className="flex space-x-4 items-center justify-center py-4 bg-blue-200">
          <li><Link href="/">หน้าหลัก</Link></li>
          <li><Link href="/about">เกี่ยวกับ</Link></li>
          <li><Link href="/contact">ติดต่อ</Link></li>
          <li><Link href="/user">ผู้ใช้</Link></li>
          <li><Link href="/counter">ตัวนับ</Link></li>
          <li><Link href="/blog">บล็อก</Link></li>
        </ul>

        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
