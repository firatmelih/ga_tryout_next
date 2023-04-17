import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <p>You are at Index page</p>
        <br />
        <br />
        <Link href={'/example'}>go to example route</Link>
      </div>
    </>
  )
}
