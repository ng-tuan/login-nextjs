'use client';
import React, { useState } from 'react';
import Product from '../Product';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(43613);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div>
      <div className="flex">
        <div
          className={`cursor-pointer p-2 ${
            activeTab === 1 ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleTabClick(43613)}
        >
          Áo
        </div>
        <div
          className={`cursor-pointer p-2 ${
            activeTab === 2 ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleTabClick(879678)}
        >
          Phụ kiện
        </div>
        <div
          className={`cursor-pointer p-2 ${
            activeTab === 3 ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleTabClick(1231641)}
        >
          Quần
        </div>
        <div
          className={`cursor-pointer p-2 ${
            activeTab === 4 ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleTabClick(1231642)}
        >
          Váy
        </div>
      </div>

      <Product id={activeTab} product={''} />
    </div>
  );
};

export default Menu;
