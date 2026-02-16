export default function BlogLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
        <aside className="w-64 bg-gray-100 p-4">
            <ul>
                <li>Technology</li>
                <li>Design</li>
                <li>Business</li>
                <li>Lifestyle</li>
                <li>Travel</li>
            </ul>
        </aside>
        <main className="flex-1 p-4">
            {children}
        </main>
    </div>
  )
}
