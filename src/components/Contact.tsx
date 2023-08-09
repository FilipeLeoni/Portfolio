"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Mail from "@/assets/images/mail.svg";
import At from "@/assets/images/At.svg";
import { fadeIn } from "@/utils/variants";

interface ContactProps {
  title: string;
  button: string;
}

export const Contact = ({ title, button }: ContactProps) => {
  return (
    <section
      className="h-full pb-44 pt-20 flex items-center gap-20 flex-col relative px-6"
      id="contact"
    >
      <motion.div
        className="flex flex-col text-center"
        variants={fadeIn("down", 0)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <h1 className="md:text-5xl text-3xl font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h1>
      </motion.div>
      <motion.div
        className="z-20 w-full max-w-4xl backdrop-blur-sm dark:bg-neutral-900/80 dark:border-gray-700 bg-white/70 drop-shadow-lg border flex-col items-center h-64 rounded-lg justify-center flex"
        variants={fadeIn("up", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <div className="items-center justify-center flex cursor-pointer px-16  bg-gray-300 dark:bg-gray-600 font-medium text-gray-800 dark:text-gray-300 h-12 rounded-lg">
          {button}
        </div>
        <div className="flex mt-6 justify-center items-center gap-4 text-gray-700 dark:text-gray-400">
          <a
            href="https://www.linkedin.com/in/filipe-leoni/"
            className="hover:text-blue-700"
          >
            <BsLinkedin size={30} />
          </a>
          <a
            href="https://github.com/FilipeLeoni"
            className="hover:text-blue-700"
          >
            <BsGithub size={32} />
          </a>
          <a
            href="https://www.instagram.com/filipeleoni/"
            className="hover:text-blue-700"
          >
            <AiFillInstagram size={38} />
          </a>
        </div>
      </motion.div>
      <Image src={Mail} alt="mail" className="absolute left-32 z-10" />
      <Image src={At} alt="mail" className="absolute bottom-36 right-32 z-10" />
    </section>
  );
};
