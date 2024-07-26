'use client';
import Image from 'next/image';
import Link from 'next/link';
import MenuItem from './MenuItem';
import React from 'react';

const menuItem = [
  {
    href: '/',
    text: 'Projetos',
  },
  {
    href: '/',
    text: 'Recomendações',
  },
  {
    href: '/',
    text: 'Contatos',
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Fecha o menu ao clicar em um item
  };
  return (
    <nav className="m-auto flex max-w-7xl items-center justify-between p-4">
      {/* Logo */}
      <div>
        <p className="bg-customPurple-500 px-1 py-2 text-2xl font-bold text-white">DAP</p>
      </div>

      {/* Menu Icon */}
      <button className="block px-2 py-1 text-gray-800 lg:hidden" onClick={handleMenuToggle} aria-label="Toggle menu">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden space-x-6 lg:flex">
        {menuItem.map((item, index) => (
          <MenuItem key={index} href={item.href}>
            {item.text}
          </MenuItem>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div
        className={`absolute right-0 top-16 w-full bg-white px-2 text-right shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {menuItem.map((item, index) => (
            <MenuItem key={index} href={item.href} onClick={handleMenuItemClick}>
              {item.text}
            </MenuItem>
          ))}
        </ul>
      </div>
    </nav>
  );
}
