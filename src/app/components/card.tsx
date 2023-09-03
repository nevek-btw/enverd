export default function Card ({ children }: { children: React.ReactNode }) {
  return (
    <div className=' uppercase relative flex container xl:!max-w-[1170px] mx-auto h-[388px] px-4 items-center justify-center overflow-hidden rounded-lg mt-36 mb-20'>
      <div className='flex flex-1 relative h-full items-center justify-center bg-contain bg-no-repeat rounded-lg border border-solid border-[#17181e]/10 bg-[#17181e] bg-opacity-100'>
        {children}
      </div>
    </div>
  )
}
