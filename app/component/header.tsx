"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg"; // Ensure this path is correct
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="header-wrapper py-[16px] bg-[#03135b] flex items-center">
      <div className="flex items-center justify-between w-full">
        <Image src={Logo} alt="Logo" width={240} />
        <ul className="flex space-x-10 text-[16px] uppercase text-[#efefef]">
          {NAV_LINKS.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-[#FF693B] transition-all ${pathname === href ? "text-[#FF693B] font-bold" : "text-gray-400"
                  }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="button">  See Pricing        </button>
      </div>
    </nav>
  );
};

export default Header;
