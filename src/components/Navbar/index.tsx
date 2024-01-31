'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center w-full px-4 sm:px-8 md:px-16 lg:px-32 bg-white">
      <div className="flex items-center justify-between w-full">
        <Image
          src="/Logo.jpg"
          alt="Logo"
          className="w-16 h-auto"
          width={100}
          height={132}
        />
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'flex' : 'hidden'} absolute md:hidden flex-col gap-4 items-center w-full mt-8 pb-4 bg-white top-0 left-0 z-40`}>
        <span className="cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black px-4 py-2">Home</span>
        <span className="cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black px-4 py-2">About</span>
        <span className="cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black px-4 py-2">Services</span>
        <span className="cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black px-4 py-2">Contact</span>
        <span className="cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black px-4 py-2">More</span>
      </div>
      <div className="hidden md:flex gap-4">
        <span className="cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black px-4 py-2">Home</span>
        <span className="cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black px-4 py-2">About</span>
        <span className="cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black px-4 py-2">Services</span>
        <span className="cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black px-4 py-2">Contact</span>
        <span className="cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-black px-4 py-2">More</span>
      </div>
    </div>
  );
}