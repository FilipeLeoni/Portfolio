"use client";

import React from "react";
import Image from "next/image";
import Me from "@/assets/images/Me.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

interface AboutMeProps {
  subtitle: string;
  title: string;
  description: string;
}

export const AboutMe = ({ subtitle, title, description }: AboutMeProps) => {
  return (
    <section
      className="min-h-screen pt-36 flex justify-center items-center flex-col pb-40 px-6"
      id="about"
    >
      <motion.div
        className="flex flex-col text-center"
        variants={fadeIn("up", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ margin: "120px" }}
      >
        <h2 className="text-3xl font-semibold">{subtitle}</h2>
        <h1 className="text-5xl font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h1>
      </motion.div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-20 mt-20">
        <motion.div
          className="md:w-96 md:h-96 w-60 h-60 rounded-xl md:mb-20"
          variants={fadeIn("right", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ margin: "120px" }}
        >
          <Image src={Me} alt="Filipe Leoni" className="rounded-xl" />
        </motion.div>
        <motion.p
          className="max-w-2xl md:text-lg whitespace-pre-line break-all lg:break-normal mt-2 text-gray-600 dark:text-gray-300 font-medium text-sm"
          variants={fadeIn("left", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ margin: "120px" }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};
