import React, { useState, useEffect } from 'react';

import { useLocalStorage } from './hooks';
import { Header, Body, Footer } from './components';

const App = () => {
  const [type, setType] = useState('basics');
  const [score, setScore] = useLocalStorage('score', 0);

  useEffect(() => {
    setScore(0);
  }, [type]);

  return (
    <div className=' bg-gradient-to-b from-background-400 to-background-700 w-full h-[100vh] p-6 md:p-8 text-white'>
      <Header type={type} score={score} />
      <Body type={type} setScore={setScore} />
      <Footer type={type} setType={setType} />
    </div>
  )
}

export default App