"use client";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import Logo from "/public/Logo.svg";
import Telegram from "/public/images/Telegram.svg";
import Twitter from "/public/images/Twitter.svg";
import Discord from "/public/images/Discord.svg";

interface NavLink {
  name: string;
  href: string;
  status: boolean;
}

const navLinks: NavLink[] = [
  {
    name: "Creon Pass",
    href: "/",
    status: true,
  },
  {
    name: "Token",
    href: "#",
    status: false,
  },
  {
    name: "AI Revenue",
    href: "#",
    status: false,
  },
  {
    name: "AI Launchpad",
    href: "#",
    status: false,
  },
];

const LogoLink = memo(({ href }) => (
  <Link href={href} aria-label="Creon Logo">
    <Image src={Logo} alt="Creon Logo" width={140} height={39} />
  </Link>
)) as React.FC<{ href: string }>;
LogoLink.displayName = "LogoLink";

const StickyHeader = memo(
  ({
    isSticky,
    children,
  }: {
    isSticky: boolean;
    children: React.ReactNode;
  }) => (
    <nav
      className={`${
        isSticky
          ? "sticky top-0 z-50 backdrop-filter backdrop-blur-lg"
          : "absolute top-0 z-50 w-full"
      } p-4`}
    >
      {children}
    </nav>
  )
) as React.FC<{ isSticky: boolean; children: React.ReactNode }>;

StickyHeader.displayName = "StickyHeader";

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const MainMenu = memo(({ navLinks }) => (
    <div className="hidden md:flex space-x-4 items-center font-satoshi-bold text-lg">
      {navLinks.map((item, index) => (
        <Link
          className={`hover:text-blue-500 ${
            item.status ? "" : "pointer-events-none"
          }`}
          key={index}
          href={item.href}
        >
          {item.name}
          {!item.status && (
            <sup className="bg-black text-purple-500 rounded-full text-xs px-2 py-1 ml-1">
              SOON
            </sup>
          )}
        </Link>
      ))}
      <button className="relative border min-h-12 border-white rounded-md px-4 py-2 overflow-hidden inline-flex hover:bg-blue-500 hover:border-blue-500 transition-all duration-500 ease-in-out group">
        <span className="relative w-full text-left transition-all duration-500 ease-in-out group-hover:h-0 group-hover:mt-[-6rem]">
          Connect
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-500 ease-in-out bg-blue-500 group-hover:h-full group-hover:py-2">
          Connect
        </span>
      </button>
    </div>
  )) as React.FC<{ navLinks: NavLink[] }>;
  MainMenu.displayName = "MainMenu";

  const MobileMenu = memo(({ navLinks }) => (
    <div className="absolute flex flex-row-reverse font-satoshi-bold text-sm h-screen w-screen top-0 left-0 bg-black/50 backdrop-filter backdrop-blur-sm transition-all duration-300">
      <div className="flex flex-col justify-between bg-black w-1/2 px-6 py-4">
        <div className="inline-flex flex-col gap-8 place-items-start">
          <button className="relative border min-h-10 border-white rounded-md px-6 py-2 overflow-hidden hover:bg-blue-500 hover:border-blue-500 transition-all duration-500 ease-in-out group">
            <span className="relative w-full text-left transition-all duration-500 ease-in-out group-hover:h-0 group-hover:mt-[-6rem]">
              Connect
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-500 ease-in-out bg-blue-500 group-hover:h-full group-hover:py-3">
              Connect
            </span>
          </button>
          {navLinks.map((item, index) => (
            <Link
              className={`hover:text-blue-500 ${
                item.status ? "" : "pointer-events-none"
              }`}
              key={index}
              href={item.href}
            >
              {item.name}
              {!item.status && (
                <sup className="bg-black text-purple-500 rounded-full text-xs px-2 py-1 ml-1">
                  SOON
                </sup>
              )}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <Image
            src={Telegram}
            alt="Telegram Icon"
            width={34}
            height={34}
            className="hover:bg-blue-500 rounded-full"
          />
          <Image
            src={Discord}
            alt="Discord Icon"
            width={34}
            height={34}
            className="hover:bg-blue-500 rounded-full"
          />
          <Image
            src={Twitter}
            alt="Twitter Icon"
            width={34}
            height={34}
            className="hover:bg-blue-500 rounded-full"
          />
        </div>
      </div>
    </div>
  )) as React.FC<{ navLinks: NavLink[] }>;
  MobileMenu.displayName = "MobileMenu";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StickyHeader isSticky={isSticky}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0 z-50">
          <LogoLink href="#" />
        </div>
        <MainMenu navLinks={navLinks} />
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`group relative z-50 flex h-9 w-9 cursor-pointer items-center justify-center rounded p-2 ${
              isOpen ? "bg-blue-500" : "bg-transparent"
            } transition-all duration-300`}
          >
            <div className="space-y-2">
              <span
                className={`block rounded-full bg-white ${
                  isOpen
                    ? " h-1 w-6 transition-transform ease-in-out translate-y-1.5 rotate-45"
                    : " h-1 w-10 origin-center"
                }`}
              ></span>
              <span
                className={`block rounded-full bg-white ${
                  isOpen
                    ? "h-1 w-6 transition-transform ease-in-out group-hover:-translate-y-1.5 group-hover:-rotate-45"
                    : "h-1 w-8 origin-center"
                }`}
              ></span>
            </div>
          </button>
          {isOpen && <MobileMenu navLinks={navLinks} />}
        </div>
      </div>
    </StickyHeader>
  );
};

export default Header2;
