'use client';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa'; // Importa o ícone de seta para cima

export default function ScrollToTopButton() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Link href="#" onClick={handleScrollToTop} className="fixed bottom-4 right-4 flex items-center">
      <button
        title="Voltar para cima"
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-customPurple-500 text-white shadow-lg transition-colors duration-300 hover:bg-customPurple-600"
      >
        <FaArrowUp />
      </button>
    </Link>
  );
}
