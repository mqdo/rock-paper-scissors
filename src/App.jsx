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
    <>
      <Header type={type} score={score} />
      <Body type={type} setScore={setScore} />
      <Footer type={type} setType={setType} />
    </>
  )
}

export default App