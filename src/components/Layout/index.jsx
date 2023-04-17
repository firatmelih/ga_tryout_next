import { Nav, Footer } from '@/components/Organism'
export function Layout({ children }) {
  return (
    <div>
      <Nav />
      <section>
        <a href="https://main--willowy-wisp-f52e35.netlify.app/">Direkt</a>
        <a
          target="_blank"
          href="https://main--willowy-wisp-f52e35.netlify.app/"
        >
          Blank
        </a>
      </section>
      {children}
      <Footer />
    </div>
  )
}
