import { FaDownload } from 'react-icons/fa';

export default function ButtonResume() {
  return (
    <a
      href="https://docs.google.com/document/d/1n_C74Xar5k2OEt9G8y0yOoZB1y1Z5PXE/edit?usp=sharing&ouid=114784739266491652751&rtpof=true&sd=true"
      target="_blank"
      rel="noopener noreferrer"
      className="fade-in-up flex items-center justify-center rounded-lg bg-customPurple-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-customPurple-600"
      style={{ animationDelay: '0.2s' }} // Ajuste o delay conforme necessário
    >
      <FaDownload className="mr-2" />
      Resume
    </a>
  );
}
