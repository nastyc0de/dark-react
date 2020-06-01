import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'

import './App.css';
import Switch from './components/Switch';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq){
    setDarkMode(mq.matches)
    setChecked(mq.matches)  
  }

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        mq.addListener(changeMedia)
        setDarkMode(mq.matches)
        setChecked(mq.matches)
    }, [])

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setDarkMode}
          checked = {checked}
          setChecked = {setChecked}
        />
      </Header>
      <SectionOne/>
      <SectionTwo/>
   </main>
  );
}

export default App;
