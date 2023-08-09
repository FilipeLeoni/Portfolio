"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NextIntlClientProvider } from "next-intl";

interface HeaderProps {
  home: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
  locale: string;
}

export const Header = ({
  home,
  skills,
  experience,
  projects,
  contact,
  locale,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-gray-700 dark:bg-gray-200 transition ease transform duration-300`;

  return (
    <motion.div
      className="z-50 w-full flex dark:bg-gray-950/40 dark:text-gray-100 max-w-sm md:max-w-3xl lg:max-w-4xl dark-mode justify-between items-center px-8 mx-auto  bg-white/50 text-gray-800 backdrop-blur-lg py-2 top-4 rounded-3xl drop-shadow-sm border dark:border-gray-700 fixed left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="text-lg font-medium hidden lg:inline">Filipe Leoni</div>
      <div className="hidden md:flex">
        <Link
          href={"#home"}
          className="hover:bg-white/50 dark:hover:bg-gray-800 py-4 px-5 rounded-lg"
        >
          {home}
        </Link>
        <Link
          href={"#skills"}
          className="hover:bg-white/50 dark:hover:bg-gray-800 py-4 px-5 rounded-lg"
        >
          {skills}
        </Link>
        <Link
          href={"#projects"}
          className="hover:bg-white/50 dark:hover:bg-gray-800 py-4 px-5 rounded-lg"
        >
          {projects}
        </Link>
        <Link
          href={"#experience"}
          className="hover:bg-white/50 dark:hover:bg-gray-800 py-4 px-5 rounded-lg"
        >
          {experience}
        </Link>

        <Link
          href={"#contact"}
          className="hover:bg-white/50 dark:hover:bg-gray-800 py-4 px-5 rounded-lg"
        >
          {contact}
        </Link>
      </div>
      <ThemeSwitcher />
      <NextIntlClientProvider locale={locale}>
        <LanguageSwitcher />
      </NextIntlClientProvider>

      <button
        className="flex flex-col h-12 w-12 rounded justify-center items-center group md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? "rotate-45 translate-y-3 group-hover:opacity-100"
              : " group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen ? "opacity-0" : "group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? "-rotate-45 -translate-y-1  "
              : " group-hover:opacity-100"
          }`}
        />
      </button>

      {isMenuOpen && (
        <div
          className="absolute top-20 -mt-4 rounded-xl backdrop-blur-3xl left-0 w-full bg-white/50 text-gray-800 dark:bg-gray-950/60 dark:text-gray-100 flex justify-center items-center"
          onClick={toggleMenu}
        >
          <ul className=" text-2xl flex flex-col items-center gap-6 p-10">
            <Link href={"#home"} className="font-medium text-sm cursor-pointer">
              {home}
            </Link>
            <Link
              href={"#skills"}
              className="font-medium text-sm cursor-pointer"
            >
              {skills}
            </Link>
            <Link
              href={"#projects"}
              className="font-medium text-sm cursor-pointer"
            >
              {projects}
            </Link>
            <Link
              href={"#experience"}
              className="font-medium text-sm cursor-pointer"
            >
              {experience}
            </Link>
            <Link
              href={"#contact"}
              className="font-medium text-sm cursor-pointer"
            >
              {contact}
            </Link>
          </ul>
        </div>
      )}
    </motion.div>
  );
};
