import { useState, useEffect } from 'react'
import styles from './Paragraph.module.scss'
export function Paragraph({ children }) {
  const [hydrated, setHydrated] = useState(false)

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true)
  }, [])
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null
  }
  window.addEventListener('scroll', () => {
    setScroll(
      Math.round(
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
          100
      )
    )
  })
  return (
    <div className={styles.Paragraph}>
      <div className={styles.Paragraph__scroll}>{scroll}%</div>
      {children}
    </div>
  )
}
