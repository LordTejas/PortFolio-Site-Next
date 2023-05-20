"use client";

import Link from "next/link";
import Image from "next/image";
import {DropMenu, DropMenuItem} from "../DropMenu";
import { useState, useEffect } from "react";

export default function NavBar({}) {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className={`sticky top-0 w-full flex flex-row justify-between py-2 bg-white px-3 z-30 transition-opacity duration-500 opacity-100`}>
      {/* Nav Logo */}
      <div>
        <Link href="/" className="flex h-full justify-between align-center gap-2">
          <Image
            src="/assets/icons/home.png"
            alt="Home Logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <p className="hidden sm:inline-block h-full text-xl text-normal text-center py-5">PortFolio</p>
        </Link>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex">
        <DropMenu
          toggleShow={
            <div className="flex_row gap-2 relative h-full">
              <Image
                src="/assets/icons/menu.png"
                alt="Menu Icon"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
          }
          toggleOption={toggleMenu}
          toggleOptionHandle={handleToggleMenu}
        >
          <DropMenuItem href="/">Home</DropMenuItem>
          <DropMenuItem href="/dashboard">DashBoard</DropMenuItem>
          <DropMenuItem href="/resume">View Resume</DropMenuItem>
        </DropMenu>
      </div>

      {/* Desktop View */}
      <div className="sm:flex hidden">
        <div className="flex_row gap-2 items-center">
          <Link href="/dashboard" className="black_btn h-12">
            Dashboard
          </Link>
          <Link href="/resume" className="blue_btn h-12">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
