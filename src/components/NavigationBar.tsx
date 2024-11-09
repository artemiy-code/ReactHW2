
import React from 'react';

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <button>Меню</button>
      <button>Товары</button>
      <button>Склады</button>
      <button>О системе</button>
      <button>Пользователь</button>
    </nav>
  );
};

export default NavigationBar;