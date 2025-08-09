import Link from "next/link";
import logo from "../../../public/images/logo-rm.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* اسم أو شعار */}
        {/* <div className="mb-6 md:mb-0 text-amber-400 font-bold text-2xl">
          RealBurger
        </div> */}
         <Image src={logo} className="w-20 md:w-40" alt="Restaurant Logo" />
        {/* روابط */}
        <nav className="flex gap-8 mb-6 md:mb-0">
          <Link href="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <Link href="#menu" className="hover:text-amber-400 transition">
            Menu
          </Link>
          <Link href="#orders" className="hover:text-amber-400 transition">
            Orders
          </Link>
          <Link href="#contact" className="hover:text-amber-400 transition">
            Contact
          </Link>
        </nav>

        {/* تواصل اجتماعي */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-amber-400 transition"
          >
            {/* Facebook SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-amber-400 transition"
          >
            {/* Instagram SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
              ></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-amber-400 transition"
          >
            {/* Twitter SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.11 9.11 0 01-2.88 1.1 4.5 4.5 0 00-7.65 4.1A12.79 12.79 0 013 4.6a4.48 4.48 0 001.39 6.02A4.48 4.48 0 012 9.9v.05a4.5 4.5 0 003.6 4.4 4.5 4.5 0 01-2.03.07 4.5 4.5 0 004.2 3.14A9 9 0 012 19.54a12.75 12.75 0 006.92 2.03c8.3 0 12.84-6.87 12.84-12.83 0-.2 0-.4-.02-.6A9.25 9.25 0 0023 3z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center text-gray-600 mt-10 text-sm">
        &copy; {new Date().getFullYear()} RealBurger. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
