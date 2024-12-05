'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navBarItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Project',
    href: '/Project',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

const Navbar = () => {
  const pathName = usePathname()

  return (
    <nav className="flex justify-center items-center w-full">
      <div className="flex  items-center gap-12 flex-1 justify-center">
        {navBarItems.map((item) => (
          <Link
            key={item.href}
            className={cn(
              'text-[0.8rem] md:text-[1rem] lg:text-[1rem] tracking-widest py-1 px-2 border border-transparent rounded-sm hover:border-primary-light hover:text-primary-light',
              pathName === item.href
                ? 'border-primary-light text-primary-light'
                : ''
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
