import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        previewing main page
        <Link href={'/example'}>back to main</Link>
      </div>
    </>
  )
}
