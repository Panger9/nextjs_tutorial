import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3x1">We hit a brick wall :( </h2>
      <p>We could not finde the ticket you were looking for</p>
      <p>Go back to the <Link href="/tickets">tickets</Link></p>
    </main>
  )
}
