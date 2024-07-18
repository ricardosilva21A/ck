import React from 'react';

interface UpgradeMenuProps {
  cookies: number;
  setCookies: React.Dispatch<React.SetStateAction<number>>;
  clickValue: number;
  setClickValue: React.Dispatch<React.SetStateAction<number>>;
  upgradeCost: number;
  setUpgradeCost: React.Dispatch<React.SetStateAction<number>>;
  nextClickValue: number;
  setNextClickValue: React.Dispatch<React.SetStateAction<number>>;
}

function UpgradeMenu({
  cookies,
  setCookies,
  clickValue,
  setClickValue,
  upgradeCost,
  setUpgradeCost,
  nextClickValue,
  setNextClickValue,
}: UpgradeMenuProps) {
  const handleUpgrade = () => {
    if (cookies >= upgradeCost) {
      setCookies(cookies - upgradeCost);
      setClickValue(nextClickValue);
      setUpgradeCost(upgradeCost * 2); // Exemplo de aumento de custo
      setNextClickValue(nextClickValue * 2); // Exemplo de aumento do próximo valor de clique
    }
  };

  return (
    <div className="upgrade-menu">
      <p>Custo do Upgrade: {upgradeCost} cookies</p>
      <button onClick={handleUpgrade}>Comprar Upgrade</button>
    </div>
  );
}

export default UpgradeMenu;
