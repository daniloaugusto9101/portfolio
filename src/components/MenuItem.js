import Link from "next/link";

export default function MenuItem({ href, children, onClick }) {
  return (
    <li className="relative group inline-block">
      <Link
        href={href}
        className="relative z-10 py-2 text-gray-800 hover:text-gray-900"
        onClick={onClick}
      >
        {children}
        <span className="absolute bottom-0 right-0 w-0 h-1 bg-customPurple-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}
