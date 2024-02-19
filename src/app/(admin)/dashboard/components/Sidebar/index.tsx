// 'use client';
// import { useState } from 'react';

// export default function Sidebar2({ setActiveComponent }) {
//   const [activeMenuItem, setActiveMenuItem] = useState(null);

//   const handleMenuItemClick = (menuItem) => {
//     setActiveComponent(menuItem);
//   };


//   return (
//     <div className="lx ql alm">
//       <div className="lx si yr">
//         <div className="lx ut yr aat adj afk afu alm arj">
//           <div className="lx nl ur yz">
//             <img
//               className="og tm"
//               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//               alt="LarkPro"
//             />
//           </div>
//           <nav className="lx um yr">
//             <ul role="list" className="lx um yr aav">
//               <li>
//                 <ul role="list" className="ga abo">
//                   <li>
//                     <button
//                       className="aio bqe lx aaf adu aqp avz awo awf axs"
//                       onClick={() => handleMenuItemClick('product-list')}
//                     >
                    
//                       {/* Icon */}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         className="oc se ur axo"
//                       >
//                         {/* Icon path */}
//                       </svg>
//                       Product List
//                     </button>
//                   </li>
//                   <li>
//                     <div data-headlessui-state="">
//                       <button
//                         className="big lx yz tn avj adu aqp aaf avz awo awf axs"
//                         id="headlessui-disclosure-button-1"
//                         type="button"
//                         aria-expanded="false"
//                         data-headlessui-state=""
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           aria-hidden="true"
//                           className="oc se ur axo"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
//                           />
//                         </svg>
//                         Teams
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                           aria-hidden="true"
//                           className="axo ke nz sb ur"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </li>
//                   <li>
//                     <div data-headlessui-state="">
//                       <button
//                         className="big lx yz tn avj adu aqp aaf avz awo awf axs"
//                         id="headlessui-disclosure-button-3"
//                         type="button"
//                         aria-expanded="false"
//                         data-headlessui-state=""
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           aria-hidden="true"
//                           className="oc se ur axo"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
//                           />
//                         </svg>
//                         Projects
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                           aria-hidden="true"
//                           className="axo ke nz sb ur"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="big bqe lx aaf adu aqp avz awo awf axs"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         className="oc se ur axo"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                         />
//                       </svg>
//                       Calendar
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="big bqe lx aaf adu aqp avz awo awf axs"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         className="oc se ur axo"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
//                         />
//                       </svg>
//                       Documents
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="big bqe lx aaf adu aqp avz awo awf axs"
//                       onClick={() => handleMenuItemClick('report')}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         className="oc se ur axo"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
//                         />
//                       </svg>
//                       Reports
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="ge lp">
//                 <a href="#" className="lx yz aag arj ary avz awf awo axu big">
//                   <img
//                     className="og sj ads aio"
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     alt=""
//                   />
//                   <span className="t">Your profile</span>
//                   <span aria-hidden="true">Tom Cook</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar2() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const router = useRouter();

  const handleMenuItemClick = () => {
    // setActiveComponent(menuItem);
    console.log("click dashboard")
    router.push('/dashboard/product');
  };

 


  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 flex items-center justify-between p-4 bg-indigo-600">
        <div className="flex items-center">
          <img
            className="w-8 h-8 mr-2"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="LarkPro"
          />
          <span className="text-white text-lg font-bold">LarkPro</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <ul className="space-y-2">
          <li>
            <button
              className="flex items-center space-x-2 p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:border-indigo-300"
              onClick={handleMenuItemClick}
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                {/* Icon path */}
              </svg>
              <span>Product List</span>
            </button>
          </li>
          <li>
            {/* Dropdown Button */}
            <button
              className="flex items-center space-x-2 p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:border-indigo-300"
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <span>Teams</span>
            </button>
          </li>
          <li>
            {/* Another Dropdown Button */}
            <button
              className="flex items-center space-x-2 p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:border-indigo-300"
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021 18.75V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              <span>Projects</span>
            </button>
          </li>
          <li>
            {/* Calendar Button */}
            <a
              href="#"
              className="flex items-center space-x-2 p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:border-indigo-300"
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            {/* Documents Button */}
            <a
              href="#"
              className="flex items-center space-x-2 p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:border-indigo-300"
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
              <span>Documents</span>
            </a>
          </li>
          <li>
            {/* Reports Button */}
            <a
              href="#"
              className="flex items-center space-x-2 p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:border-indigo-300"
              onClick={() => handleMenuItemClick('report')}
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>
              <span>Reports</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        {/* Your profile section */}
      </div>
    </div>
  );
}
