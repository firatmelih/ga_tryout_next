import Link from 'next/link'

export function Nav() {
  return (
    <nav>
      <Link id="home" href="/">
        GA TRYOUT
      </Link>
      <div>
        <Link id="shop" href={'#'}>
          Shop
        </Link>
        <Link id="contact" href={'#'}>
          Contact
        </Link>
        <Link id="call" href={'#'}>
          Call
        </Link>
      </div>
    </nav>
  )
}
