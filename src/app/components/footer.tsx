import { IconLeaf, IconBrandTwitterFilled, IconBrandFacebookFilled } from '@tabler/icons-react'

export default function Footer () {
  return (
    <div className='flex flex-col w-full items-center sm:flex-row justify-between max-w-[1160px] mb-20 mx-auto px-10 xl:px-0 sm:gap-0 gap-8'>
      <div className='w-1/3'>
        <div className='flex items-center justify-start relative'>
          <IconLeaf size={40} />
          <span className='text-white text-2xl font-bold ml-2 uppercase'>Enverd</span>
        </div>
      </div>
      <div className='flex gap-4 w-1/3 justify-center'>
        <a href="">
          <IconBrandTwitterFilled size={24} className='text-white/30' />
        </a>
        <a href="">
          <IconBrandFacebookFilled size={24} className='text-white/30' />
        </a>
      </div>
      <div className='flex flex-col items-center sm:items-end sm:w-1/3 text-center sm:text-right'>
        <p className='text-xs text-[#9195ab]'>Derechos reservados © - 6to Informática</p>
      </div>
    </div>
  )
}
