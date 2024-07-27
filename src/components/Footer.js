// components/Footer.js
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-lg font-bold">Contatos</h2>
          <p>Email: danilloagt@gmail.com</p>
        </div>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/daniloaugusto9101/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-full bg-white p-2 transition-colors duration-300 hover:bg-customPurple-600"
          >
            <FaLinkedin className="h-6 w-6 text-black transition-colors duration-300 group-hover:text-white" />
          </a>
          <a
            href="https://github.com/daniloaugusto9101"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-full bg-white p-2 transition-colors duration-300 hover:bg-customPurple-600"
          >
            <FaGithub className="h-6 w-6 text-black transition-colors duration-300 group-hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
