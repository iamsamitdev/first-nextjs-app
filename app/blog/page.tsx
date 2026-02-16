import Link from "next/link"

export default function BlogPage() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">บทความ</h1>
        <p className="mt-4">
          ยินดีต้อนรับสู่หน้า Blog
        </p>
        <Link href="/blog/post" className="text-blue-300">ดูโพสต์</Link>
      </div>
    )
}