import React from 'react';

import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import iconLizard from '../../assets/images/icon-lizard.svg';
import iconSpock from '../../assets/images/icon-spock.svg';

const gradients = {
  rock: ' bg-gradient-to-b from-primary-rock-400 to-primary-rock-700',
  paper: ' bg-gradient-to-b from-primary-paper-400 to-primary-paper-700',
  scissors: ' bg-gradient-to-b from-primary-scissors-400 to-primary-scissors-700',
  lizard: ' bg-gradient-to-b from-primary-lizard-400 to-primary-lizard-700',
  spock: ' bg-gradient-to-b from-primary-spock-400 to-primary-spock-700',
};

const imgSrc = {
  rock: iconRock,
  paper: iconPaper,
  scissors: iconScissors,
  lizard: iconLizard,
  spock: iconSpock
}

const Button = ({ mode, type, handlePlay }) => {
  if (mode === 'playing') return (
    <div
      className={`w-32 h-32 md:w-52 md:h-52 mx-3 md:mx-4 rounded-full grid place-items-center ${gradients[type]} shadow-inner relative z-50`}
    >
      <div className={` w-24 h-24 md:w-40 md:h-40 rounded-full grid place-items-center bg-white shadow-inner`}>
        <img src={imgSrc[type]} alt={type} className='w-12 h-12 md:w-20 md:h-20' />
      </div>
    </div>
  )

  return (
    <div
      className={`${mode === 'advanced' ? 'w-20 h-20 md:w-32 md:h-32' : 'w-28 h-28 md:w-40 md:h-40'}  mx-3 md:mx-4 rounded-full grid place-items-center ${gradients[type]} shadow-inner cursor-pointer hover:scale-105 relative z-50`}
      onClick={() => handlePlay(mode, type)}
    >
      <div className={`${mode === 'advanced' ? 'w-16 h-16 md:w-24 md:h-24' : 'w-[85px] h-[85px] md:w-[120px] md:h-[120px]'}  rounded-full grid place-items-center bg-white shadow-inner`}>
        <img src={imgSrc[type]} alt={type} className={`${mode === 'advanced' ? 'w-7 h-7 md:h-12 md:w-12' : 'w-[36px] h-[36px] md:w-14 md:h-14'}`} />
      </div>
    </div>
  )
}

export default Button