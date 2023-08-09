"use client";

import React from "react";
import { SkillsCard } from "./SkillsCard";
import { Extras } from "./Extras";
import Image from "next/image";
import {
  BackendSkills,
  FrontendSkills,
  OtherSkills,
} from "@/mocks/Technologies";
import { motion } from "framer-motion";

import Vscode from "@/assets/images/VSCode.svg";
import LaptopAsset from "@/assets/images/Laptop-asset.png";
import { fadeIn } from "@/utils/variants";

interface SkillsProps {
  subtitle: string;
  title: string;
}

export const Skills = ({ subtitle, title }: SkillsProps) => {
  return (
    <section className="relative pt-36" id="skills">
      <div className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-semibold"
        >
          {subtitle}
        </motion.h2>
        <h1 className="text-4xl font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h1>
      </div>
      <div className="flex gap-10 justify-center mt-14 flex-wrap">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <SkillsCard title="Frontend" skills={FrontendSkills} />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <SkillsCard title="Backend" skills={BackendSkills} />
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center mt-10 mx-8 md:mx-0"
        variants={fadeIn("down", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <Extras skills={OtherSkills} />
      </motion.div>

      <Image
        src={Vscode}
        alt=""
        width={370}
        className="absolute top-0 opacity-10 left-52"
      />
      <Image
        src={LaptopAsset}
        alt=""
        width={370}
        className="absolute bottom-0 right-52"
      />
    </section>
  );
};
