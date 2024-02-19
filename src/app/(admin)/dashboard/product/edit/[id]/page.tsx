'use client';
import Editer from '@/components/Editor';
import Navbar from '@/components/Navbar';
import Sidebar2 from '../../../components/Sidebar';


export default function EditProduct() {

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="shadow w-44">
        <Sidebar2 />
      </aside>

      {/* Content Area */}
      <div className="flex-1">
        {/* Header */}
        <Navbar />

        {/* Page Content */}
        <div className="mx-auto p-4 overflow-auto h-full"><Editer/></div>
      </div>
    </div>
  );
}
