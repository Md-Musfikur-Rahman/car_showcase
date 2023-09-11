"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { SignInButton } from ".";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <SignInButton />
      </nav>
    </header>
  );
};

export default Navbar;
