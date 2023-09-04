export default function Reviews () {
  return (
    <div className='w-full py-10 lg:py-20 mt-5 relative max-w-3xl mx-auto'>
      <h2 className='sm:text-4xl text-h3 text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E3E8FF] to-[#9396A8] relative mx-auto max-w-lg w-full'>
        Comentarios de nuestro proyecto Enverd
      </h2>
      <div className='mt-14'>
        <div className='grid grid-cols-1 gap-4 text-center transition-all duration-200'>
          <div className='relative mx-auto'>
            <img
              src='/assets/ade3481c.jpg'
              className='w-[60px] h-[60px] mx-auto rounded-full'
            />
            <img
              src='/assets/quote-7336532a.svg'
              className='absolute -bottom-1 -right-1'
            />
          </div>
          <p className='text-dark-300 font-medium text-2xl'>
            “Look, I aint gonna lie, MEE6 AI is pretty dope. It keeps things
            livin and adds a bunch of cool features. Plus, its like having a
            virtual assistant that keeps the server in check. Get it, trust me!”
          </p>
          <p className='text-dark-400 text-sm font-medium mt-2'>
            Bart Simpson, the master of mischief
          </p>
        </div>
      </div>
    </div>
  )
}
