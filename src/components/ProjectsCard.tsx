import Image from "next/image";
import React from "react";
import Link from "next/link";

import MockupDark from "@/assets/images/MockupDark.svg";
import MockupLight from "@/assets/images/MockupLight.svg";
import { Badges } from "./Badges";
import { BsGithub } from "react-icons/bs";
import { useTranslations } from "next-intl";

export const ProjectsCard = ({ project }: any) => {
  const t = useTranslations("Projects");

  return (
    <div>
      <div className="flex ">
        <Link
          target="_blank"
          href={project?.preview}
          className="w-[550px] h-64 overflow-hidden drop-shadow-xl mr-20 flex flex-col"
        >
          <Image
            src={MockupDark}
            alt="Mockup"
            className="hidden dark:inline z-20"
          />

          <Image
            src={MockupLight}
            alt="Mockup"
            className="inline dark:hidden z-20"
          />

          <div className="flex -mt-8">
            <Image
              src={project?.image}
              alt={project?.name}
              className="z-10 pt-6"
              width={550}
              height={256}
              objectFit="cover"
            />
          </div>
        </Link>
        <div className="flex-col flex gap-4">
          <h2 className="text-3xl font-medium text-gray-700 dark:text-gray-200">
            {project?.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 max-w-4xl">
            {project?.description}
          </p>
          <Link href={project?.code} target="_blank">
            <div className="flex gap-2 items-center text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white">
              <BsGithub size={20} /> {t("code")}
            </div>
          </Link>
          <div className="flex gap-3 mt-5">
            {project?.techs?.map((tech: any) => (
              <Badges key={tech}>{tech}</Badges>
            ))}
          </div>
        </div>
      </div>
      <div className="divider mt-8" />
    </div>
  );
};
