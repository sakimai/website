"use client";

import { Grand_Hotel } from "next/font/google";

import { useRouter } from "next/navigation";
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const grandHotel = Grand_Hotel({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (path: string) => {
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <nav className="flex justify-between py-10 px-10 z-10">
      <button
        className={` text-3xl ${grandHotel.className}`}
        onClick={() => router.push("/")}
      >
        Saki imai
      </button>
      {/* Hamburger menu icon */}
      <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-blacks hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            <AiOutlineMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="mt-2 px-4 py-3 space-y-1">
            <li>
              <a
                href="#"
                onClick={() => handleMenuItemClick('/')}
                className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleMenuItemClick('/aboutMe')}
                className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleMenuItemClick('/contact')}
                className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                onClick={() => handleMenuItemClick('/')}
                className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleMenuItemClick('/aboutMe')}
                className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleMenuItemClick('/contact')}
                className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Header;
