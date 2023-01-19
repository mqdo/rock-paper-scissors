import React, { useState } from 'react';

import Button from './Button';
import Waving from './Waving';
import bgPentagon from '../../assets/images/bg-pentagon.svg';
import bgTriangle from '../../assets/images/bg-triangle.svg';

const PAIRINGS = {
  'rock': ['lizard', 'scissors'],
  'paper': ['rock', 'spock'],
  'scissors': ['paper', 'lizard'],
  'lizard': ['paper', 'spock'],
  'spock': ['scissors', 'rock'],
};

const RESULTS = {
  'tied': 'Tied',
  'user': 'You win',
  'bot': 'You lose',
}

const Body = ({ mode, setScore, playing, setPlaying }) => {
  const [userPlayed, setUserPlayed] = useState('');
  const [botPlayed, setBotPlayed] = useState('');
  const [winner, setWinner] = useState('');

  const handleStartPlaying = (mode, type) => {
    setPlaying(true);
    setUserPlayed(type);
    const played = generateRandom(mode);
    setTimeout(() => {
      setBotPlayed(played);
      if (type === played) {
        setWinner('tied');
        return;
      }
      if (PAIRINGS[type].includes(played)) {
        setWinner('user');
        setScore((prev) => prev + 1);
        return;
      }
      setWinner('bot');
      return;
    }, 500)
  }

  const handlePlayAgain = () => {
    setPlaying(false);
    setUserPlayed('');
    setBotPlayed('');
    setWinner('');
  };

  if (playing) {
    return (
      <div className={`w-full ${winner !== '' ? 'md:max-w-[860px]' : 'md:max-w-[720px]'} mx-auto py-8 md:py-10 flex flex-col flex-auto items-center justify-around uppercase relative`}>
        <div className='w-full flex items-center justify-center md:justify-between gap-6 md:gap-8'>
          <div className='flex flex-col md:flex-col-reverse items-center gap-4 relative'>
            {winner === 'user'
              ? <Waving />
              : null
            }
            <Button mode='playing' type={userPlayed} />
            <span className=' text-sm md:text-xl md:tracking-widest font-semibold md:pb-4 z-50'>You picked</span>
          </div>
          <div className='flex flex-col md:flex-col-reverse items-center gap-4 relative'>
            {botPlayed
              ? <>
                {winner === 'bot'
                  ? <Waving />
                  : null
                }
                <Button mode='playing' type={botPlayed} />
              </>
              : <div className='w-32 h-32 md:w-52 md:h-52 mx-3 md:mx-4 rounded-full grid place-items-center'>
                <div className='w-24 h-24 md:w-40 md:h-40 rounded-full bg-background-700'></div>
              </div>
            }
            <span className=' text-sm md:text-xl md:tracking-widest font-semibold md:pb-4 z-50'>The House picked</span>
          </div>
        </div>
        <div className='h-[200px] flex flex-col items-center justify-center gap-4 md:absolute md:top-[50%] md:-translate-y-[40%] z-50'>
          <h1 className=' text-5xl font-bold'>{RESULTS[winner]}</h1>
          {winner
            ? <button onClick={handlePlayAgain} className='w-[200px] h-10 rounded-md bg-white text-secondary-300 uppercase font-semibold text-base tracking-wider hover:opacity-80 hover:text-primary-rock-400'>Play again</button>
            : null
          }
        </div>
      </div>
    )
  }

  if (mode === 'basics') return (
    <div className='w-[300px] md:w-[480px] mx-auto flex items-center justify-center flex-wrap gap-4 md:gap-8 relative'>
      <Button mode={mode} type='paper' handlePlay={handleStartPlaying} />
      <Button mode={mode} type='scissors' handlePlay={handleStartPlaying} />
      <Button mode={mode} type='rock' handlePlay={handleStartPlaying} />
      <div className='absolute z-10'>
        <img src={bgTriangle} className='w-[160px] md:w-[240px] h-auto' />
      </div>
    </div>
  )
  return (
    <div className='w-[300px] md:w-[480px] mx-auto flex items-center justify-center flex-wrap gap-4 relative'>
      <div className='absolute left-[50%] -translate-x-[50%] -top-32 md:-top-48 z-50'>
        <Button mode={mode} type='scissors' handlePlay={handleStartPlaying} />
      </div>
      <div className='absolute left-0 md:left-2 -top-14 md:-top-[100px]'>
        <Button mode={mode} type='spock' handlePlay={handleStartPlaying} />
      </div>
      <div className='absolute right-0 md:right-2 -top-14 md:-top-[100px]'>
        <Button mode={mode} type='paper' handlePlay={handleStartPlaying} />
      </div>
      <div className='absolute left-10 md:left-[72px] -bottom-32 md:-bottom-48'>
        <Button mode={mode} type='lizard' handlePlay={handleStartPlaying} />
      </div>
      <div className='absolute right-10 md:right-[72px] -bottom-32 md:-bottom-48'>
        <Button mode={mode} type='rock' handlePlay={handleStartPlaying} />
      </div>
      <div className='absolute z-10'>
        <img src={bgPentagon} className='w-[180px] md:w-[280px] h-auto' />
      </div>
    </div>
  )
}

export default Body

const generateRandom = (mode) => {
  const types = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let random;
  if (mode === 'basics') {
    random = Math.floor(Math.random() * 3);
  } else {
    random = Math.floor(Math.random() * 5);
  }
  return types[random];
}