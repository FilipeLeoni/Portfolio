"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsCalendarFill } from "react-icons/bs";
import { fadeIn } from "@/utils/variants";

interface ExperienceProps {
  subtitle: string;
  title: string;
  jobTitle1: string;
  jobTitle2: string;
  company1: string;
  company2: string;
  description1: string;
  description2: string;
}

export const Experience = ({
  subtitle,
  title,
  jobTitle1,
  jobTitle2,
  company1,
  company2,
  description1,
  description2,
}: ExperienceProps) => {
  return (
    <section
      className="min-h-screen flex flex-col items-center pt-40"
      id="experience"
    >
      <h2 className="text-3xl font-semibold text-gray-400 dark:text-gray-500">
        {subtitle}
      </h2>
      <h1 className="text-5xl font-semibold text-gray-700 dark:text-gray-200">
        {title}
      </h1>
      <div className="container max-w-5xl mx-auto w-full h-full pt-20">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-white/30 h-full border left-14 md:left-2/4"></div>
          <div className="mb-8 flex md:justify-between items-center w-full right-timeline">
            <div className="md:order-1 md:w-5/12"></div>
            <motion.div
              className="z-20 flex items-center md:order-1 bg-gray-800 dark:bg-gray-300 shadow-xl w-10 h-10 rounded-full"
              variants={fadeIn("down", 0)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <h1 className="mx-auto font-semibold text-lg text-white dark:text-gray-800">
                <BsCalendarFill size={16} />
              </h1>
            </motion.div>
            <motion.div
              className="order-1 dark:bg-neutral-900/80 w-full dark:text-gray-300 dark:border-gray-800 bg-white/70 text-gray-800 border backdrop-blur-lg drop-shadow-md rounded-lg shadow-xl md:w-5/12 px-6 py-4"
              variants={fadeIn("left", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ margin: "120px" }}
            >
              <h3 className="font-bold text-xl">{jobTitle1}</h3>
              <p className=" font-semibold mb-3 text-blue-800 dark:text-blue-400">
                {company1}
              </p>
              <p className="text-sm leading-snug tracking-wide  text-opacity-100">
                {description1}
              </p>
            </motion.div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline text-neutral-800">
            <div className="md:order-1 md:w-5/12"></div>
            <motion.div
              className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-300 shadow-xl w-10 h-10 rounded-full"
              variants={fadeIn("down", 0)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <h1 className="mx-auto  font-semibold text-lg text-white dark:text-gray-800">
                <BsCalendarFill size={16} />
              </h1>
            </motion.div>
            <motion.div
              className="md:order-1 w-full dark:bg-neutral-900/80 dark:text-gray-300 dark:border-gray-800 bg-white/70 text-gray-800 border backdrop-blur-lg drop-shadow-md rounded-lg shadow-xl md:w-5/12 px-6 py-4 relative"
              variants={fadeIn("right", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ margin: "120px" }}
            >
              <p className="absolute -top-10 right-0"></p>
              <h3 className=" font-bold  text-xl">{jobTitle2}</h3>
              <p className=" font-semibold mb-3 text-blue-800 dark:text-blue-400">
                {company2}
              </p>
              <p className="text-sm font-medium leading-snug tracking-wide  text-opacity-100">
                {description2}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
