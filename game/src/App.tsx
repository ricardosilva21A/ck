import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ClickerArea from './components/ClickerArea';
import UpgradeMenu from './components/UpgradeMenu';
import StatsPanel from './components/StatsPanel';
import Shop from './components/Shop';
import Missions from './components/Missions';
import Settings from './components/Settings';

function App() {
  const [cookies, setCookies] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(50);
  const [nextClickValue, setNextClickValue] = useState(1.5);

  return (
    <div className="App">
      <Header />
      <ClickerArea 
        cookies={cookies} 
        setCookies={setCookies} 
        clickValue={clickValue} 
      />
      <UpgradeMenu 
        cookies={cookies} 
        setCookies={setCookies} 
        clickValue={clickValue} 
        setClickValue={setClickValue} 
        upgradeCost={upgradeCost} 
        setUpgradeCost={setUpgradeCost} 
        nextClickValue={nextClickValue} 
        setNextClickValue={setNextClickValue} 
      />
      <StatsPanel 
        cookies={cookies} 
        clickValue={clickValue} 
        upgradeCost={upgradeCost} 
        nextClickValue={nextClickValue} 
      />
      <Shop />
      <Missions />
      <Settings />
    </div>
  );
}

export default App;
