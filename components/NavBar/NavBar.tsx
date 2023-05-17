"use client";

import Link from "next/link";
import Image from "next/image";
import {DropMenu, DropMenuItem} from "../DropMenu";
import { useState } from "react";

export default function NavBar({}) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className="flex justify-between w-full mb-2 p-2 bg-white">
      {/* Nav Logo */}
      <div>
        <Link href="/" className="flex justify-between align-center gap-2">
          <Image
            src="/assets/icons/home.png"
            alt="Home Logo"
            width={28}
            height={28}
            className="object-contain"
          />
          <p className="hidden sm:inline text-xl text-normal">PortFolio</p>
        </Link>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex">
        <DropMenu
          toggleShow={
            <div className="flex_row gap-2 relative">
              <Image
                src="/assets/icons/menu.png"
                alt="Menu Icon"
                width={28}
                height={28}
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
        <div className="flex_row gap-2">
          <Link href="/dashboard" className="black_btn">
            Dashboard
          </Link>
          <Link href="/resume" className="blue_btn">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
