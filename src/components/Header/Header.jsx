"use client"
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo-rm.png";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-9 py-1  relative">
      <Image src={logo} className="w-20 md:w-40" alt="Restaurant Logo" />

      <nav className="hidden md:block">
        <ul className="flex items-center gap-12">
          <li className="text-2xl text-white hover:text-amber-400 transition-all">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-2xl text-white hover:text-amber-400 transition-all">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="text-2xl text-white hover:text-amber-400 transition-all">
            <Link href={"#orders"}>Orders</Link>
          </li>
          <li className="text-2xl text-white hover:text-amber-400 transition-all">
            <Link href={"#menu"}>Menu</Link>
          </li>
        </ul>
      </nav>

      <div className="hidden md:block">
        <Link href={"#footer"}>
          <button className="bg-amber-400 rounded-sm py-2 px-6 text-2xl cursor-pointer hover:bg-amber-500 transition-all">
            Contact
          </button>
        </Link>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white"
      >
        {menuOpen ? <X size={36} /> : <Menu size={36} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <Link
            href={"/"}
            className="text-2xl hover:text-amber-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"#about"}
            className="text-2xl hover:text-amber-400"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href={"#orders"}
            className="text-2xl hover:text-amber-400"
            onClick={() => setMenuOpen(false)}
          >
            Orders
          </Link>
          <Link
            href={"#menu"}
            className="text-2xl hover:text-amber-400"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </Link>
          <Link href={"#footer"}>
            <button className="bg-amber-400 rounded-sm py-2 px-6 text-2xl cursor-pointer hover:bg-amber-500 transition-all">
              Contact
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
