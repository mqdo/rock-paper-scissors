import React, { useState, useEffect } from 'react';

import { useLocalStorage } from './hooks';
import { Header, Body, Footer } from './components';

const App = () => {
  const [mode, setMode] = useState('basics');
  const [score, setScore] = useLocalStorage('score', 0);

  useEffect(() => {
    setScore(0);
  }, [mode]);

  return (
    <div className=' bg-gradient-to-b from-background-400 to-background-700 w-full min-h-[100vh] p-6 md:p-8 text-white flex flex-col justify-between'>
      <Header mode={mode} score={score} />
      <Body mode={mode} setScore={setScore} />
      <Footer mode={mode} setMode={setMode} />
    </div>
  )
}

export default App