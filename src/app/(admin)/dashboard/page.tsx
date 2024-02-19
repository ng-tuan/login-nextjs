import Navbar from '@/components/Navbar';
import Sidebar2 from './components/Sidebar';
import ProductList2 from './product/page';
export default function dashboard() {
  return (
   <>
    <div className="flex">
      <aside className="shadow w-64">
        <Sidebar2 />
      </aside>

      {/* <div className="flex-1">
        <Navbar />

        <div className="mx-auto p-4 overflow-auto h-full">
          
        </div>
      </div> */}
    </div>
    <p>dashboard</p>
   </>
  );
}
