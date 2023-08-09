import Image from "next/image";
import React from "react";

interface SkillsCardProps {
  skills: any;
}

export const Extras = ({ skills }: SkillsCardProps) => {
  return (
    <div className="dark:bg-neutral-900/80 bg-white/70 border dark:border-neutral-700 backdrop-blur-lg rounded-xl drop-shadow-md w-full max-w-2xl h-full md:h-52 flex p-4 items-center flex-col">
      <p className="text-gray-600 font-medium text-xl dark:text-gray-100">
        Extras
      </p>
      <div className="flex justify-center flex-wrap gap-2 mt-4 text-gray-700 dark:text-gray-200 pb-4">
        {skills?.map((skill: any) => (
          <div
            key={skill.name}
            className="flex items-center justify-center flex-col mx-5 mt-2 gap-1"
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              width={56}
              height={56}
              className="rounded-lg"
            />
            <p className="font-medium  text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
