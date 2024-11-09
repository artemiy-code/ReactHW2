// src/App.tsx

import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import './App.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <NavigationBar />
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Закрыть меню' : 'Открыть меню'}
      </button>
      <div className="content">
        <Sidebar isOpen={isSidebarOpen} />
        <ProductList />
      </div>
    </div>
  );
};

export default App;
