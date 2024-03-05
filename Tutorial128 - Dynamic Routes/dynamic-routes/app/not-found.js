import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p className="text-xl">Could not find requested resource</p>
      <Link 
        className="text-blue-600 text-lg"
        href="/"
      >
        Return Home
      </Link>
    </div>
  )
}