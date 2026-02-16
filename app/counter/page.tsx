// rfc
"use client";

import { useState } from "react";

export default function CounterPage() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={() => setCounter(counter + 1)}
        className="border-2 p-2 bg-green-400 cursor-pointer rounded-full h-16 w-16"
      >
        Up
      </button>
      <h2 className="text-8xl my-4 border rounded-full w-36 h-36 flex items-center justify-center">{counter}</h2>
      <button
        onClick={() => setCounter(counter - 1)}
        className="border-2 p-2 bg-red-500 cursor-pointer rounded-full h-16 w-16"
      >
        Down
      </button>
    </div>
  )
}
