import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-800">

      <section className="relative">
        <div className="relative h-[420px] max-w-6xl mx-auto px-6 py-10">
          <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://www.bts.co.th/assets/images/home/bts-car.png"
              alt="BTS train"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl text-white mt-6">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow">Move smarter with BTS</h1>
            <p className="mt-3 text-lg">Fast. Reliable. Connected. Explore routes, fares, and services.</p>
            <div className="mt-6 flex gap-3">
              <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md shadow">Plan Your Trip</Link>
              <Link href="#" className="bg-white/80 text-black px-5 py-3 rounded-md shadow">View Timetable</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="font-semibold text-lg">Fares & Passes</h3>
          <p className="mt-2 text-sm text-slate-600">Find ticket prices and smart pass options.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="font-semibold text-lg">Service Updates</h3>
          <p className="mt-2 text-sm text-slate-600">Latest news on routes and maintenance.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="font-semibold text-lg">Customer Support</h3>
          <p className="mt-2 text-sm text-slate-600">Contact us for help and feedback.</p>
        </div>
      </section>

      <footer className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between">
          <div>© {new Date().getFullYear()} BTS — All rights reserved</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}