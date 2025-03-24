"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Importing icons

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Combo Sales", href: "/combo" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Blogs", href: "/blogs" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container container m-auto header-wrapper py-4 bg-[--default-bg] flex items-center justify-between">
      {/* Logo */}
      <Image src={Logo} alt="Logo" width={180} className="w-[117px] custom:w-[80px]" />

      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Menu */}
      <nav className={`md:flex items-center ${menuOpen ? "block" : "hidden"} absolute md:relative top-[60px] md:top-0 left-0 md:left-auto w-full md:w-auto bg-[--default-bg] md:bg-transparent transition-all`}>
        <ul className="flex flex-col md:flex-row text-[16px] uppercase text-[#efefef] p-5 md:p-0 space-y-4 md:space-y-0 md:space-x-8">
          {NAV_LINKS.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={pathname} // Prevents navigation by keeping the same path
                className={`cursor-pointer hover:text-[#FF693B] transition-all ${pathname === href ? "text-[#FF693B] font-bold" : "text-gray-400"
                  } cursor-default`} // cursor-default disables clicking
                onClick={(e) => {
                  e.preventDefault(); // Stops default navigation
                  setMenuOpen(false); // Closes the menu on mobile
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Button */}
      <button className="header-pricing-btn hidden md:block envo-btn py-[20px] px-[80px] rounded-[4px]">
        See Pricing
      </button>
    </header>
  );
};

export default Header;
