import React from 'react';

import imgRulesBasics from '../assets/images/image-rules.svg';
import imgRulesAdvanced from '../assets/images/image-rules-bonus.svg';
import iconClose from '../assets/images/icon-close.svg';

const Rules = ({ mode, toggleRules, setToggleRules }) => {
  const imgSrc = mode === 'basics' ? imgRulesBasics : imgRulesAdvanced;

  return (
    <>
      {toggleRules
        ? <div className={`w-full h-full md:w-[480px] ${mode === 'basics' ? 'md:h-[420px]' : 'md:h-[450px]'} md:rounded-md bg-white absolute top-0 bottom-0 left-0 right-0 md:left-[50%] md:-translate-x-[50%] md:top-[50%] md:-translate-y-[50%] z-50 flex flex-col items-center justify-around md:justify-between md:p-8`} data-type='toggle'>
          <div className='w-full flex justify-between items-center'>
            <h3 className='text-secondary-300 uppercase text-2xl md:text-3xl font-bold'>Rules</h3>
            <button className='md:block hidden' data-type='toggle' onClick={() => setToggleRules(false)}>
              <img src={iconClose} alt='icon close' />
            </button>
          </div>
          <img src={imgSrc} alt={mode} />
          <button className='block md:hidden' onClick={() => setToggleRules(false)}>
            <img src={iconClose} alt='icon close' />
          </button>
        </div>
        : null
      }
    </>
  )
}

export default Rules