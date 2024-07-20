"use client";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";
import React from "react";

const menuItem = [
  {
    href: "/",
    text: "Início",
  },
  {
    href: "/",
    text: "Projetos",
  },
  {
    href: "/",
    text: "Recomendações",
  },
  {
    href: "/",
    text: "Contatos",
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
    <nav className="flex items-center justify-between p-4">
      {/* Logo */}
      <div>
        <Link href="/" title="Página inicial">
          <Image
            src="/images/logo.png"
            alt="Logo do Portfolio de Danilo Augusto Pereira"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* Menu Icon */}
      <button
        className="block lg:hidden px-2 py-1 text-gray-800"
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6">
        {menuItem.map((item, index) => (
          <MenuItem key={index} href={item.href}>
            {item.text}
          </MenuItem>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div
        className={`text-right px-2 lg:hidden absolute top-16 right-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {menuItem.map((item, index) => (
            <MenuItem
              key={index}
              href={item.href}
              onClick={handleMenuItemClick}
            >
              {item.text}
            </MenuItem>
          ))}
        </ul>
      </div>
    </nav>
  );
}
