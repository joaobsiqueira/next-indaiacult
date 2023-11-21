"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Artistas", href: "/pages/artistas" },
  { name: "Obras", href: "/pages/obras" },
  { name: "Sobre", href: "/pages/sobre" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/pages/home">
            <li className="list-none">
              <span className="text-primary text-3xl font-bold">Indaia</span>
              <span className="text-secondary text-3xl font-bold">Cult</span>
            </li>
          </Link>
        </div>

        <div className="flex items-center">
          <div
            className={`hidden md:flex space-x-16 items-center ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={
                    isActive
                      ? "text-secondary font-extrabold text-lg relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                      : "text-secondary font-medium text-lg relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <button
            onClick={toggleNavBar}
            className="text-secondary focus:outline-none block md:hidden focus:text-black"
          >
            {isOpen ? (
              ""
            ) : (
              <Image src="/menu.svg" alt="icon" width="24" height="26" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`bg-gray-200 fixed top-0 right-0 w-44 h-full ${
            isOpen ? "trasnlate-x-0" : "translate-x-full"
          } ease-in-out duration-300`}
        >
          <button className="fixed top-4 right-4" onClick={toggleNavBar}>
            <Image src="/close.svg" alt="fechar" width="24" height="26" />
          </button>
          <div className="p-5 flex flex-col mt-7 space-y-5 text-secondary text-xl ">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={
                    isActive
                      ? "text-secondary font-extrabold text-lg "
                      : "text-secondary font-medium text-lg "
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
