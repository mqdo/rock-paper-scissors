import React from 'react'

const Title = ({ type }) => {
  if (type === 'basics') return (
    <div className='flex flex-col uppercase font-bold text-md md:text-3xl leading-[0.8rem] md:leading-6'>
      <span>Rock</span>
      <span>Paper</span>
      <span>Scissors</span>
    </div>
  )
  return (
    <div className='flex flex-col uppercase font-bold text-sm md:text-base leading-[0.65rem] md:leading-4'>
      <span>Rock</span>
      <span>Paper</span>
      <span>Scissors</span>
      <span>Lizard</span>
      <span>Spock</span>
    </div>
  )
}

const Header = ({ type, score }) => {

  return (
    <div className='w-full md:max-w-[680px] h-20 md:h-[120px] mx-auto border-secondary-200 border-[3px] p-4 md:px-5 rounded-md md:rounded-xl flex items-center justify-between'>
      <Title type={type} />
      <div className='bg-white w-[72px] md:w-[120px] h-14 md:h-[90px] rounded-md translate-x-[5px] md:translate-x-0 flex flex-col items-center justify-center'>
        <span className='mt-2 md:mt-4 text-secondary-400 text-[10px] md:text-sm uppercase tracking-wide md:tracking-widest font-bold'>Score</span>
        <span className='mb-2 md:mb-4 text-secondary-300 text-3xl md:text-5xl leading-none font-bold'>{score}</span>
      </div>
    </div>
  )
}

export default Header