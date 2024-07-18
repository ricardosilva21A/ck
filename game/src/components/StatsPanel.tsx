import React from 'react';

interface StatsPanelProps {
  cookies: number;
  clickValue: number;
  upgradeCost: number;
  nextClickValue: number;
}

function StatsPanel({ cookies, clickValue, upgradeCost, nextClickValue }: StatsPanelProps) {
  return (
    <div className="stats-panel">
      <p>Total de Cookies: {cookies}</p>
      <p>Valor do Clique: {clickValue}</p>
      <p>Próximo Custo de Upgrade: {upgradeCost}</p>
      <p>Próximo Valor de Clique: {nextClickValue}</p>
    </div>
  );
}

export default StatsPanel;
