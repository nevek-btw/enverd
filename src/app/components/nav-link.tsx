'use client'

import { Link, NavbarItem } from '@nextui-org/react'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavLink ({ href, children }: { href: string, children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment()
  const active = href === `/${segment}`
  return (
    <NavbarItem>
        <Link href={href} className={active ? 'text-success' : 'text-white'}>
          {children}
        </Link>
    </NavbarItem>
  )
}
