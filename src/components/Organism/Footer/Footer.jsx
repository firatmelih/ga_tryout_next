import { useEffect, useState } from 'react'
import { usePrivacyStore } from '@/store/privacy'
export function Footer() {
  const { allowed, setAllowed } = usePrivacyStore()
  useEffect(() => {}, [])
  return (
    <footer>
      {allowed ? (
        'You have now accepted terms and being tracked under CSP, click Green Button to deactivate.'
      ) : (
        <div>
          This is personal GA4 testing website and clicking Red Button means you
          are accepting all terms of Google Analytics 4
          <a href="https://support.google.com/analytics/answer/12017362?hl=en#:~:text=Google%20Analytics%204%20does%20not%20log%20or%20store%20individual%20IP,and%20ID%2Dbased%20counterparts).">
            Check for more
          </a>
        </div>
      )}
      <span onClick={() => setAllowed(!allowed)} data-ison={allowed} />
    </footer>
  )
}
