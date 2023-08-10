"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import LeftBg from "@/assets/images/left-hero.png";
import RightBg from "@/assets/images/right-hero.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

interface GreetingsProps {
  greetings: string;
  title: string;
  description: string;
}

export const Greetings = ({
  greetings,
  title,
  description,
}: GreetingsProps) => {
  return (
    <main
      className="h-screen relative md:px-0 px-4 -mb-40 flex  justify-center items-center"
      id="home"
    >
      <div className="flex justify-center pt-10 items-center flex-col text-center z-20 drop-shadow-sm md:drop-shadow-none">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-200"
        >
          {greetings}
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-5xl text-gray-700 dark:text-gray-50"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl text-gray-600 text-center mt-4 dark:text-gray-200"
        >
          {description}
        </motion.p>
        <motion.div
          className="flex mt-6 justify-center items-center gap-1 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/filipe-leoni/"
            className="hover:text-blue-700 p-4 hover:bg-white/40 dark:hover:bg-gray-950/40 rounded-xl transition-all"
          >
            <BsLinkedin size={30} />
          </a>
          <a
            href="https://github.com/FilipeLeoni"
            className="hover:text-black p-4 dark:hover:text-white hover:bg-white/40 dark:hover:bg-gray-950/40 rounded-xl transition-all"
          >
            <BsGithub size={32} />
          </a>
          <a
            href="https://www.instagram.com/filipeleoni/"
            className="hover:text-pink-700 p-3 hover:bg-white/40 dark:hover:bg-gray-950/40 rounded-xl transition-all"
          >
            <AiFillInstagram size={38} />
          </a>
        </motion.div>
      </div>
      <div className="absolute top-16 left-0 z-0 hidden md:inline">
        <Image src={LeftBg} alt="Techs" />
      </div>
      <div className="absolute top-16 right-0 z-0 hidden md:inline">
        <Image src={RightBg} alt="Techs" />
      </div>
    </main>
  );
};
