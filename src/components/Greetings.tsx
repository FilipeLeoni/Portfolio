"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import LeftBg from "@/assets/images/left-hero.png";
import RightBg from "@/assets/images/right-hero.png";

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
      className="h-screen relative flex justify-center items-center flex-col text-center md:px-0 px-4 -mb-40"
      id="home"
    >
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
      <div className="absolute top-16 left-0">
        <Image src={LeftBg} alt="Techs" />
      </div>
      <div className="absolute top-16 right-0">
        <Image src={RightBg} alt="Techs" />
      </div>
    </main>
  );
};
