'use client';
import React, { useState } from 'react';
import Sidebar2 from '../Sidebar';
import Navbar from '@/components/Navbar';
import ProductList from '../../product/page';
import Report from '../Report';
import EditProduct from '@/app/(admin)/edit/[id]/page';

export default function Layout() {
  const [activeComponent, setActiveComponent] = useState('');

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'product-list':
        return <ProductList />;
      case 'report':
        return <Report />;
      
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="shadow w-64">
        <Sidebar2 setActiveComponent={setActiveComponent} />
      </aside>

      {/* Content Area */}
      <div className="flex-1">
        {/* Header */}
        <Navbar />

        {/* Page Content */}
        <div className="mx-auto p-4 overflow-auto h-full">{renderActiveComponent()}</div>
      </div>
    </div>
  );
}
