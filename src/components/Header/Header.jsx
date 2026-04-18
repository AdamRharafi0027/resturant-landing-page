"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo-rm.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const navLinks = [
  // ["Home", "About", "Orders", "Menu"]
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Menu", href: "/menu" }
];
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        
        {/* Logo */}
        <Image
          src={logo}
          alt="Restaurant Logo"
          className="w-24 md:w-32"
          priority
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg text-white hover:text-amber-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href="#footer">
            <button className="bg-amber-400 text-black font-semibold px-5 py-2 rounded-md hover:bg-amber-500 transition">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white z-50"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu (full screen overlay) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 text-white text-2xl transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="hover:text-amber-400 transition"
          >
            {item.name}
          </Link>
        ))}

        <Link href="#footer" onClick={() => setMenuOpen(false)}>
          <button className="mt-4 bg-amber-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-amber-500 transition">
            Contact
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;