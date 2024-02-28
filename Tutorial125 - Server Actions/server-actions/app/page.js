"use client"

import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  const ref = useRef()

  return (
    <div className="w-1/2 mx-auto">
      <form 
        ref={ref}
        className="text-center text-lg" 
        action={ (e) => {
          submitAction(e)
          ref.current.reset()
        } }
      >
        <div className="mt-20">
          <label className="font-bold" htmlFor="name">Name : &nbsp;</label>
          <input id="name" name="name" className="text-black p-2" type="text" />
        </div>
        <div className="mt-5">
          <label className="font-bold" htmlFor="address">Address : &nbsp;</label>
          <input id="address" name="address" className="text-black p-2" type="text" />
        </div>
        <div className="mt-5">
          <button className="px-4 py-2 bg-red-600 rounded-3xl font-bold">Submit</button>
        </div>
      </form>
    </div>
  );
}
