"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next-intl/client";

import React, { useState } from "react";
import { useLocale } from "next-intl";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const locales = useLocale();
  const pathname = usePathname();
  const [locale, setLocale] = useState(locales);

  function changeLanguage() {
    if (locales === "en") {
      setLocale("pt");
      router.replace(pathname, { locale: "pt" });
    } else {
      setLocale("en");
      router.replace(pathname, { locale: "en" });
    }
  }

  return (
    <div>
      <label className=" swap swap-rotate">
        <input
          type="checkbox"
          onChange={changeLanguage}
          checked={locale === "en" ? false : true}
        />

        <Image
          className="swap-off fill-current"
          src="https://hatscripts.github.io/circle-flags/flags/br.svg"
          width={40}
          height={40}
          alt="Brasil"
        />

        <Image
          className="swap-on fill-current"
          src="https://hatscripts.github.io/circle-flags/flags/us.svg"
          width={40}
          height={40}
          alt="USA"
        />
      </label>
    </div>
  );
};
