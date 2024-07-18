import React from 'react';
import chickenImg from '../assets/images/chicken.png'; // Verifique o caminho da imagem
import './ClickerArea.css'; // Certifique-se de que o arquivo CSS está no mesmo diretório

interface ClickerAreaProps {
  cookies: number;
  setCookies: React.Dispatch<React.SetStateAction<number>>;
  clickValue: number;
}

function ClickerArea({ cookies, setCookies, clickValue }: ClickerAreaProps) {
  const handleClick = () => {
    setCookies(cookies + clickValue);
  };

  return (
    <div className="clicker-area">
      <p>Cookies: {cookies}</p>
      <img src={chickenImg} alt="Chicken" className="click-button" onClick={handleClick} />
    </div>
  );
}

export default ClickerArea;
