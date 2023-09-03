'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { IconLeaf, IconBrandGoogle } from '@tabler/icons-react'
import NavLink from './nav-link'

export default function Nav () {
  /* const icons = {
    computing: <IconDeviceImacCode className="text-warning" size={30} />,
    accounting: <IconAddressBook className='text-blue-500' size={30} />,
    marketing: <IconBuildingStore className='text-orange-500' size={30} />,
    gastronomy: <IconChefHat className='text-red-500' size={30} />,
    nursing: <IconHeart className='text-green-500' size={30} />,
    chevron: <IconChevronDown size={16} />
  } */

  const items = [
    {
      label: 'Recursos',
      href: '/recursos'
    },
    {
      label: 'Calendario',
      href: '/calendario'
    },
    {
      label: 'FAQ',
      href: '/faq'
    }
  ]

  return (
      <Navbar isBordered className='bg-transparent'>
        <NavbarBrand>
          <IconLeaf />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="start">
        {items.map((item) => (
          <NavLink href={item.href} key={item.label}>
            {item.label}
          </NavLink>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="success" href="#" variant="flat" startContent={<IconBrandGoogle />}>
            Iniciar Sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
