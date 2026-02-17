"use client";
import Link from "next/link";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100">

      <div>BTS</div>

      <ul className="flex space-x-4 items-center justify-center py-4">
          <li><Link href="/">หน้าหลัก</Link></li>
          <li><Link href="/about">เกี่ยวกับ</Link></li>
          <li><Link href="/contact">ติดต่อ</Link></li>
          <li><Link href="/user">ผู้ใช้</Link></li>
          <li><Link href="/counter">ตัวนับ</Link></li>
          <li><Link href="/blog">บล็อก</Link></li>
      </ul>

      <Button onClick={() => alert("Button clicked!")}>Login</Button> 
       
    </div>
  )
}
