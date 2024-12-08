import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-violet-700 text-white p-4 flex justify-between items-center">
      <Link href="/"
         className="text-xl font-bold">E-Shop
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/products">
            Products
          </Link>
        </li>
        <li>
          <Link href="/cart">
            
              <FaShoppingCart className="inline-block" /> Cart
            
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
