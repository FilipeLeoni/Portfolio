import Image from "next/image";
import React from "react";

interface SkillsCardProps {
  title: string;
  skills?: any;
}

export const SkillsCard = ({ title, skills }: SkillsCardProps) => {
  return (
    <div className="dark:bg-neutral-900/80 bg-white/70 border dark:border-neutral-700 backdrop-blur-lg rounded-xl drop-shadow-md w-80 h-[420px] flex p-4 items-center flex-col">
      <p className="text-gray-600 font-medium text-xl dark:text-gray-100">
        {title}
      </p>
      <div className="grid grid-cols-3 gap-2 gap-y-4 mt-6 text-gray-700 dark:text-gray-200">
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
              quality={10}
            />
            <p className=" font-medium  text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
