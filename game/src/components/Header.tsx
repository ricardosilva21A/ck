import React from 'react';
import './Header.css'; // Certifique-se de que o arquivo CSS está no mesmo diretório

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Counter-Strike Clicker</h1>
        <nav className="nav">
          <a href="https://github.com/ricardosilva21a" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com/ricardofsilva0" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com/ricardofsilva0" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="/about-us">About Us</a>
        </nav>
        <button className="start-button">Iniciar Jogo</button>
      </div>
    </header>
  );
}

export default Header;
