import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export const Badges = ({ children }: BadgeProps) => {
  return (
    <div className="px-4 bg-gray-300 rounded-full py-px text-gray-600 dark:bg-gray-600 dark:text-gray-200">
      <p>{children}</p>
    </div>
  );
};
