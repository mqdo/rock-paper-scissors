import React from 'react'

const Waving = () => {
  return (
    <>
      <div className='w-32 h-32 md:w-52 md:h-52  mx-3 md:mx-4 rounded-full animate-wave-1 absolute top-0 md:top-[60px] bg-secondary-200 z-40'></div>
      <div className='w-32 h-32 md:w-52 md:h-52  mx-3 md:mx-4 rounded-full animate-wave-2 absolute top-0 md:top-[60px] bg-secondary-300 z-30'></div>
      <div className='w-32 h-32 md:w-52 md:h-52  mx-3 md:mx-4 rounded-full animate-wave-3 absolute top-0 md:top-[60px] bg-background-700 z-20'></div>
      <div className='w-32 h-32 md:w-52 md:h-52  mx-3 md:mx-4 rounded-full animate-wave-4 absolute top-0 md:top-[60px] bg-background-700 z-10'></div>
    </>
  )
}

export default Waving