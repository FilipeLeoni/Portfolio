"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectsCard } from "./ProjectsCard";
import { ProjectsEN } from "@/mocks/Projects/en";
import { ProjectsPT } from "@/mocks/Projects/pt";
import { fadeIn } from "@/utils/variants";

export const Projects = ({ subtitle, title, code, locale }: any) => {
  return (
    <section
      className="min-h-screen flex justify-center pt-44 mx-8 lg:mx-0"
      id="projects"
    >
      <div className="w-full max-w-6xl">
        <div className="flex flex-col ">
          <motion.h2
            className="text-3xl font-semibold"
            variants={fadeIn("left", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.h2>
          <motion.h1
            className="text-5xl font-semibold text-gray-700 dark:text-gray-200"
            variants={fadeIn("left", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            {title}
          </motion.h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="divider mt-12" />
          {locale === "en" ? (
            <>
              {ProjectsEN?.map((project: any) => (
                <motion.div
                  key={project.name}
                  variants={fadeIn("up", 0.5)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: true }}
                >
                  <ProjectsCard project={project} tcode={code} />
                </motion.div>
              ))}
            </>
          ) : (
            <>
              {ProjectsPT?.map((project: any) => (
                <motion.div
                  key={project.name}
                  variants={fadeIn("up", 0.5)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: true }}
                >
                  <ProjectsCard project={project} tcode={code} />
                </motion.div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
