'use client';
import Link from 'next/link';
import MenuItem from './MenuItem';
import React, { useEffect, useState } from 'react';
import ButtonResume from './ButtonResume';

const menuItem = [
  {
    href: '#projetos',
    text: 'Projetos',
  },
  // {
  //   href: '#recomendacoes',
  //   text: 'Recomendações',
  // },
  {
    href: '#contatos',
    text: 'Contatos',
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    console.log('Clicou mobile');
    setIsOpen(false); // Fecha o menu ao clicar em um item
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const offset = 70; // Altura do menu fixo
      const top = section.getBoundingClientRect().top - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-white p-4 transition-shadow duration-300 ${hasShadow ? 'shadow-md' : ''}`}
    >
      {/* Logo */}

      <div className="m-auto flex max-w-7xl items-center justify-between">
        <Link href="/" style={{ animationDelay: '0.2s' }} className="fade-in-up">
          <p className="bg-customPurple-500 px-1 py-2 text-2xl font-bold text-white">DAP</p>
        </Link>

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
        <ul className="fadeInUp hidden items-center space-x-6 lg:flex">
          {menuItem.map((item, index) => (
            <MenuItem
              key={index}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              animationDelay={`${index * 0.1}s`}
            >
              {item.text}
            </MenuItem>
          ))}
          <li>
            <ButtonResume />
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`absolute right-0 top-16 w-full bg-white px-2 text-right shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            {menuItem.map((item, index) => (
              <MenuItem
                key={index}
                href={item.href}
                onClick={(e) => {
                  handleMenuItemClick(e);
                  handleScroll(e, item.href);
                }}
              >
                {item.text}
              </MenuItem>
            ))}
            <li>
              <ButtonResume />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
