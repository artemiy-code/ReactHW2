import React from 'react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <input type="text" placeholder="Search" />
      <label>
        <input type="checkbox" /> Товары в наличии
      </label>
      <select>
        <option>Все Категории</option>
        <option>Бытовая техника</option>
        <option>Электроника</option>
        <option>Новая категория 1</option>
        <option>Новая категория 2</option>
        <option>Новая категория 3</option>
      </select>
    </aside>
  );
};

export default Sidebar;