'use client'

import Areas from './components/areas'
import Card from './components/card'
import Hero from './components/hero'
import Nav from './components/navbar'
import Reviews from './components/reviews'

export default function Home () {
  return (
    <div className='bg-dark overflow-hidden min-h-screen'>
      <div className='absolute left-0 hidden lg:block h-[250px] w-full opacity-40'>
        <img
          src='/assets/shine-55cb8124.webp'
          className='m-auto object-cover h-full w-full'
        />
      </div>
      <div className='absolute left-0 flex items-center justify-center w-full top-2'>
        <img src='/assets/abstract-d07c2a8a.svg' className='w-full' />
      </div>
      <Nav />
      <Hero />
      <Card>
        <Areas />
      </Card>
      <Reviews />
    </div>
  )
}
