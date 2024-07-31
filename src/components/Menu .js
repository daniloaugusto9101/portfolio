'use client';
import Image from 'next/image';
import Link from 'next/link';
import MenuItem from './MenuItem';
import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Importa o ícone de download

const menuItem = [
  {
    href: 'projetos',
    text: 'Projetos',
  },
  // {
  //   href: '#recomendacoes',
  //   text: 'Recomendações',
  // },
  {
    href: 'contatos',
    text: 'Contatos',
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    console.log('Clucoi mobile');
    setIsOpen(false); // Fecha o menu ao clicar em um item
  };

  const handleScroll = (e, sectionId) => {
    console.log('clicou scrol id: ' + sectionId);
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
      <ul className="hidden items-center space-x-6 lg:flex">
        {menuItem.map((item, index) => (
          <MenuItem key={index} href={item.href} onClick={(e) => handleScroll(e, item.href)}>
            {item.text}
          </MenuItem>
        ))}
        <li>
          <a
            href="https://docs.google.com/document/d/1n_C74Xar5k2OEt9G8y0yOoZB1y1Z5PXE/edit?usp=sharing&ouid=114784739266491652751&rtpof=true&sd=true" // Substitua pelo caminho do seu arquivo de currículo
            target="_blank" // Abre o link em uma nova guia
            rel="noopener noreferrer" // Adiciona segurança ao link
            className="flex items-center justify-center rounded-lg bg-customPurple-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-customPurple-600"
          >
            <FaDownload className="mr-2" /> {/* Ícone de download */}
            Resume
          </a>
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
            <MenuItem key={index} href={item.href} onClick={handleMenuItemClick}>
              {item.text}
            </MenuItem>
          ))}
          <li>
            <a
              href="https://docs.google.com/document/d/1n_C74Xar5k2OEt9G8y0yOoZB1y1Z5PXE/edit?usp=sharing&ouid=114784739266491652751&rtpof=true&sd=true" // Substitua pelo caminho do seu arquivo de currículo
              target="_blank" // Abre o link em uma nova guia
              rel="noopener noreferrer" // Adiciona segurança ao link
              className="flex items-center justify-center rounded-lg bg-customPurple-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-customPurple-600"
            >
              <FaDownload className="mr-2" />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
