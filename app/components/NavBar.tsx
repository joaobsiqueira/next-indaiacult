"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-5 px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <li className="list-none">
            <Link href="/pages/home">
              <span className="text-primary text-3xl font-bold">Indaia</span>
              <span className="text-secondary text-3xl font-bold">Cult</span>
            </Link>
          </li>
        </div>

        <div className="flex items-center">
          <div
            className={`hidden md:flex space-x-8 items-center ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link href="/pages/artistas" className="text-secondary text-lg">
              Artistas
            </Link>
            <Link href="/pages/obras" className="text-secondary text-lg">
              Obras
            </Link>
            <Link href="/pages/sobre" className="text-secondary text-lg">
              Sobre
            </Link>
          </div>

          <button
            onClick={toggleNavBar}
            className="text-black focus:outline-none block md:hidden focus:text-black"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:bg- rounded-xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <div className="flex flex-col space-y-2">
            <Link href="/pages/artistas" className="text-secondary text-xl">
              Artistas
            </Link>
            <Link href="/pages/obras" className="text-secondary text-xl">
              Obras
            </Link>
            <Link href="/pages/sobre" className="text-secondary text-xl">
              Sobre
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
