import Link from 'next/link';

export default function MenuItem({ href, children, onClick, id, animationDelay }) {
  return (
    <li className="fade-in-up group relative inline-block" id={`${id}`} style={{ animationDelay: animationDelay }}>
      <Link href={href} className="relative z-10 py-2 text-gray-800 hover:text-gray-900" onClick={onClick}>
        {children}
        <span className="absolute bottom-0 right-0 h-1 w-0 bg-customPurple-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}
