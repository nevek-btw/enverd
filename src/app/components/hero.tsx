export default function Hero () {
  return (
    <header className='relative z-[3] max-w-[710px] w-full lg:max-w-[748px] flex flex-col mt-10 lg:mt-28 mx-auto items-center px-4'>
      <h1 className='sm:text-7xl text-displaySmall text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E3E8FF] to-[#9396A8] relative'>
      Cultivando un mundo{' '}
        <span className='from-green-500 to-green-300 bg-gradient-to-r bg-clip-text text-transparent block lg:inline-block'>
          más verde
        </span>
      </h1>
      <div className='flex w-full justify-center mt-8'>
        <div className='bg-[#17181e] select-none p-1 rounded-lg self-start flex items-center w-auto gap-1'>
          <div
            className='cursor-pointer rounded py-4 px-6 flex flex-1 justify-center items-center text-base transition-all text-dark-400 hover:text-dark-100 duration-200 hover:bg-green-400 relative bg-[#313442] !text-white'
            style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -5px 24px inset' }}
          >
            <div className='flex'>
              <div className='leading-4 tracking-wider whitespace-nowrap text-sm'>
                Vota tu huerto preferido
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
