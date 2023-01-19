import React, { useState } from 'react';

import { useLocalStorage } from './hooks';
import { Header, Body, Footer, Rules } from './components';

const App = () => {
  const [mode, setMode] = useState('basics');
  const [score, setScore] = useLocalStorage('score', 0);
  const [playing, setPlaying] = useState(false);
  const [toggleRules, setToggleRules] = useState(false);

  const handleCloseRules = (e) => {
    if (e.target.dataset.type === 'toggle') return;
    setToggleRules(false);
  }

  return (
    <div>
      <div
        className={`bg-gradient-to-b from-background-400 to-background-700 w-full min-h-[100vh] p-6 md:p-8 text-white flex flex-col justify-between relative overflow-hidden ${toggleRules ? 'brightness-50' : ''}`}
        onClick={handleCloseRules}
      >
        <Header mode={mode} score={score} />
        <Body mode={mode} setScore={setScore} playing={playing} setPlaying={setPlaying} />
        <Footer mode={mode} setScore={setScore} setMode={setMode} setPlaying={setPlaying} setToggleRules={setToggleRules} />
      </div>
      <Rules mode={mode} toggleRules={toggleRules} setToggleRules={setToggleRules} />
    </div>
  )
}

export default App