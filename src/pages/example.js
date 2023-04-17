import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>You are at Example page</p>
      <br />
      <br />
      <Link href={'/'}>back to main</Link>
      <br />
      <br />
      <p>Links for Netlify Hosted Vite+React website</p>
      <a href="https://main--willowy-wisp-f52e35.netlify.app/">
        Go to with this tab
      </a>
      <br />
      <br />
      <a target="_blank" href="https://main--willowy-wisp-f52e35.netlify.app/">
        Go to with new tab
      </a>
    </div>
  )
}
