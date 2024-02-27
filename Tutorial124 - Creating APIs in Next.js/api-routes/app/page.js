"use client"

export default function Home() {
  let handleClick = async () => {
    let data = {
      name: "Akash",
      role: "Web Developer"
    }

    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    
    let res = await a.json()
    console.log(res)
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-5">Next.js API routes Demo</h1>
      <button 
        className="bg-cyan-500 px-4 py-2 rounded-3xl font-bold text-lg w-fit" onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
}
