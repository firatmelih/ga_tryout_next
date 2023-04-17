import Link from 'next/link'

export default function Home() {
  return (
    <div>
      previewing example pages
      <Link href={'/'}>back to main</Link>
      <br />
      <br />
      <a href="https://main--willowy-wisp-f52e35.netlify.app/">
        {' '}
        Go to cross domain website
      </a>
      <br />
      <br />
      <a target="_blank" href="https://main--willowy-wisp-f52e35.netlify.app/">
        {' '}
        Go to cross domain website
      </a>
    </div>
  )
}
