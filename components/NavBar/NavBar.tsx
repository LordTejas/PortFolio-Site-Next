"use client";

import Link from "next/link";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";

export default function NavBar({}) {
  return (
    <nav className="flex justify-between w-full mb-2 p-2">
      {/* Nav Logo */}
      <div>
        <Link href="/" className="flex justify-between align-center">
          <RxDashboard className="text-2xl mr-1" />
          <p className="logo_text">Tejas</p>
        </Link>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex">
        <div>Menu</div>
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