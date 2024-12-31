'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false); 
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-lime-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Commerce Site</h1>

        {/* Mobile Menu Button (Hamburger Icon for xs and sm screens) */}
        <button 
          className="sm:hidden text-white" 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navbar Links (hidden on small screens by default, shown when the menu is toggled) */}
        <ul className={`absolute sm:static sm:flex sm:space-x-6 bg-gray-800 w-full sm:w-auto top-16 left-0 sm:top-0 ${isOpen ? 'block' : 'hidden'} sm:block sm:bg-transparent sm:p-0 sm:space-x-6`}>
          <li className="p-2">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-2">
            <Link href="/cartPage">Cart ({cart.length})</Link>
          </li>
          <li className="p-2">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
