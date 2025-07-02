"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBoxOpen, FaClosedCaptioning } from "react-icons/fa";


const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-50 shadow z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="font-bold text-xl sm:text-2xl">
          <p className="-mx-1">
            Ariful Islam <br className="hidden sm:block" /> Rijon
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex font-bold text-base sm:text-lg gap-5 sm:gap-7">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaBoxOpen/> : <FaClosedCaptioning/> }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-100 px-6 pb-4 font-semibold space-y-3 text-base">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:underline">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:underline">About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block hover:underline">Projects</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:underline">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navber;
