import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NextIntlClientProvider, useLocale, useTranslations } from "next-intl";

export const Header = () => {
  const locale = useLocale();
  const t = useTranslations("Header");

  return (
    <div className="z-50 w-full dark:bg-gray-950/40 dark:text-gray-100 max-w-4xl flex dark-mode justify-between items-center px-8 mx-auto  bg-white/50 text-gray-800 backdrop-blur-lg py-2 top-4 rounded-3xl drop-shadow-sm border dark:border-gray-700 fixed left-1/2 transform -translate-x-1/2">
      <div className="text-lg font-medium">Filipe Leoni</div>
      <div className="flex">
        <Link
          href={"3"}
          className="hover:bg-white/50 dark:hover:bg-gray-800 py-4 px-5 rounded-lg"
        >
          {t("home")}
        </Link>
        <Link
          href={"3"}
          className="hover:bg-white/50 dark:hover:bg-gray-800 py-4 px-5 rounded-lg"
        >
          {t("skills")}
        </Link>
        <Link
          href={"3"}
          className="hover:bg-white/50 dark:hover:bg-gray-800 py-4 px-5 rounded-lg"
        >
          {t("experience")}
        </Link>
        <Link
          href={"3"}
          className="hover:bg-white/50 dark:hover:bg-gray-800 py-4 px-5 rounded-lg"
        >
          {t("projects")}
        </Link>
        <Link
          href={"3"}
          className="hover:bg-white/50 dark:hover:bg-gray-800 py-4 px-5 rounded-lg"
        >
          {t("contact")}
        </Link>
      </div>
      <ThemeSwitcher />
      <NextIntlClientProvider locale={locale}>
        <LanguageSwitcher />
      </NextIntlClientProvider>
    </div>
  );
};
