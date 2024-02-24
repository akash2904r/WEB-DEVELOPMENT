// "use client"

// import { useEffect, useState } from "react";
import fs from "fs/promises"
import Navbar from "@/components/Navbar"

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("Hey there, server !!!")

  let a = fs.readFile(".gitignore")
  a.then(e => console.log(e.toString()))

  return (
    <div>
      <Navbar />
      I am an component
      {/* <div className="text-3xl font-bold">
        The count is {count}
      </div>
      <button 
        className="bg-gray-700 p-2 text-lg rounded-lg"
        onClick={() => setCount(count + 1)}
        >
        Click Me
      </button> */}
    </div>
  );
}
