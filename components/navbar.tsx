import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const routes = [
    {
      url: '/',
      text: 'Home',
    },
    {
      url: '/characters',
      text: 'All characters',
    },
    {
      url: '/locations',
      text: 'Locations',
    },
    {
      url: '/episodes',
      text: 'Episodes',
    },
    {
      url: '/search',
      text: 'Search'
    }
  ]

  return (
    <nav>
      <ul className='flex gap-4 pb-4 text-sm md:text-md lg:text-lg'>
        {routes.map((route, i) => (
          <li key={i}>
            <Link href={route.url} passHref>
              <a>{route.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
