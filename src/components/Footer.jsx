import React, { useState } from 'react';

const Footer = ({ mode, setScore, setMode, setPlaying, setToggleRules }) => {
  const handleChangeMode = () => {
    if (mode === 'basics') {
      setMode('advanced');
    } else {
      setMode('basics');
    }
    setScore(0);
    setPlaying(false);
  }

  const handleToggleRules = () => {
    setToggleRules((prev) => !prev);
  };

  return (
    <div className='flex justify-between w-full md:max-w-[720px] mx-auto'>
      <button
        className='h-8 px-4 border-2 border-secondary-200 rounded-md text-sm font-semibold uppercase tracking-widest'
        onClick={handleChangeMode}
      >
        Mode: {mode}
      </button>
      <button
        className='h-8 px-4 border-2 border-secondary-200 rounded-md text-sm font-semibold uppercase tracking-widest'
        data-type='toggle'
        onClick={handleToggleRules}
      >
        Rules
      </button>
    </div>
  )
}

export default Footer