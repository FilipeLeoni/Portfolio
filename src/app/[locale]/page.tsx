import { Header } from "@/components/Header";
import LeftBg from "@/assets/images/left-hero.png";
import RightBg from "@/assets/images/right-hero.png";
import Image from "next/image";
import { SkillsCard } from "@/components/SkillsCard";
import Me from "@/assets/images/Me.png";
import {
  BackendSkills,
  FrontendSkills,
  OtherSkills,
} from "@/mocks/Technologies";
import Vscode from "@/assets/images/VSCode.svg";
import LaptopAsset from "@/assets/images/Laptop-asset.png";
import Mail from "@/assets/images/mail.svg";
import At from "@/assets/images/At.svg";
import { Extras } from "@/components/Extras";
import { ProjectsCard } from "@/components/ProjectsCard";
import { ProjectsEN } from "@/mocks/Projects/en";
import { ProjectsPT } from "@/mocks/Projects/pt";
import { BsLinkedin, BsGithub, BsCalendarFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Footer } from "@/components/Footer";
import { NextIntlClientProvider, useLocale, useTranslations } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations("Main");
  const Tskills = useTranslations("Skills");
  const TProjects = useTranslations("Projects");
  const TExperience = useTranslations("Experience");
  const TAboutMe = useTranslations("AboutMe");
  const TContact = useTranslations("Contact");
  const tHeader = useTranslations("Header");

  return (
    <div>
      <NextIntlClientProvider locale={locale}>
        <Header
          home={tHeader("home")}
          skills={tHeader("skills")}
          experience={tHeader("experience")}
          projects={tHeader("projects")}
          contact={tHeader("contact")}
          locale={locale}
        />
      </NextIntlClientProvider>

      <main
        className="h-screen relative flex justify-center items-center flex-col text-center md:px-0 px-4 -mb-40"
        id="home"
      >
        <h2 className="text-xl text-gray-600 dark:text-gray-200">
          {t("greetings")}
        </h2>
        <h1 className="text-4xl md:text-5xl text-gray-700 dark:text-gray-50">
          {t("title")}
        </h1>
        <p className="max-w-2xl text-gray-600 text-center mt-4 dark:text-gray-200">
          {t("description")}
        </p>
        <div className="absolute top-16 left-0">
          <Image src={LeftBg} alt="Techs" />
        </div>
        <div className="absolute top-16 right-0">
          <Image src={RightBg} alt="Techs" />
        </div>
      </main>
      <section className="relative pt-20" id="skills">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">{Tskills("title.my")}</h2>
          <h1 className="text-4xl font-semibold text-gray-700 dark:text-gray-200">
            {Tskills("title.skills")}
          </h1>
        </div>
        <div className="flex gap-10 justify-center mt-14 flex-wrap">
          <SkillsCard title="Frontend" skills={FrontendSkills} />
          <SkillsCard title="Backend" skills={BackendSkills} />
        </div>
        <div className="flex justify-center mt-10 mx-8 md:mx-0">
          <Extras skills={OtherSkills} />
        </div>

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
      <section
        className="min-h-screen flex justify-center pt-44 mx-8 lg:mx-0"
        id="projects"
      >
        <div className="w-full max-w-6xl">
          <div className="flex flex-col ">
            <h2 className="text-3xl font-semibold ">{TProjects("my")}</h2>
            <h1 className="text-5xl font-semibold text-gray-700 dark:text-gray-200">
              {TProjects("projects")}
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <div className="divider mt-12" />
            {locale === "en" ? (
              <>
                {ProjectsEN?.map((project: any) => (
                  <ProjectsCard key={project.name} project={project} />
                ))}
              </>
            ) : (
              <>
                {ProjectsPT?.map((project: any) => (
                  <ProjectsCard key={project.name} project={project} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      <section
        className="min-h-screen flex flex-col items-center pt-40"
        id="experience"
      >
        <h2 className="text-3xl font-semibold">{TExperience("title.my")}</h2>
        <h1 className="text-5xl font-semibold text-gray-700 dark:text-gray-200">
          {TExperience("title.experience")}
        </h1>
        <div className="container max-w-5xl mx-auto w-full h-full pt-20">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-white/30 h-full border left-14 md:left-2/4"></div>
            <div className="mb-8 flex md:justify-between items-center w-full right-timeline">
              <div className="md:order-1 md:w-5/12"></div>
              <div className="z-20 flex items-center md:order-1 bg-gray-800 dark:bg-gray-300 shadow-xl w-10 h-10 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white dark:text-gray-800">
                  <BsCalendarFill size={16} />
                </h1>
              </div>
              <div className="order-1 dark:bg-neutral-900/80 w-full dark:text-gray-300 dark:border-gray-800 bg-white/70 text-gray-800 border backdrop-blur-lg drop-shadow-md rounded-lg shadow-xl md:w-5/12 px-6 py-4">
                <h3 className="font-bold  text-xl">
                  {TExperience("SouJunior.title")}
                </h3>
                <p className=" font-semibold mb-3 text-blue-800 dark:text-blue-400">
                  {TExperience("SouJunior.company")}
                </p>
                <p className="text-sm leading-snug tracking-wide  text-opacity-100">
                  {TExperience("SouJunior.description")}
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline text-neutral-800">
              <div className="md:order-1 md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-300 shadow-xl w-10 h-10 rounded-full">
                <h1 className="mx-auto  font-semibold text-lg text-white dark:text-gray-800">
                  <BsCalendarFill size={16} />
                </h1>
              </div>
              <div className="md:order-1 w-full dark:bg-neutral-900/80 dark:text-gray-300 dark:border-gray-800 bg-white/70 text-gray-800 border backdrop-blur-lg drop-shadow-md rounded-lg shadow-xl md:w-5/12 px-6 py-4 relative">
                <p className="absolute -top-10 right-0"></p>
                <h3 className=" font-bold  text-xl">
                  {TExperience("InsightLab.title")}
                </h3>
                <p className=" font-semibold mb-3 text-blue-800 dark:text-blue-400">
                  {TExperience("InsightLab.company")}
                </p>
                <p className="text-sm font-medium leading-snug tracking-wide  text-opacity-100">
                  {TExperience("InsightLab.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="min-h-screen pt-36 flex justify-center items-center flex-col pb-40 px-6"
        id="about"
      >
        <div className="flex flex-col text-center ">
          <h2 className="text-3xl font-semibold">{TAboutMe("title.my")}</h2>
          <h1 className="text-5xl font-semibold text-gray-700 dark:text-gray-200">
            {TAboutMe("title.history")}
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-20 mt-20">
          <div className="md:w-96 md:h-96 w-60 h-60 rounded-xl md:mb-20">
            <Image src={Me} alt="Filipe Leoni" className="rounded-xl" />
          </div>
          <p className="max-w-2xl md:text-lg whitespace-pre-line break-all lg:break-normal mt-2 text-gray-600 dark:text-gray-300 font-medium text-sm">
            {TAboutMe("description")}
          </p>
        </div>
      </section>

      <section
        className="h-full pb-44 pt-20 flex items-center gap-20 flex-col relative px-6"
        id="contact"
      >
        <div className="flex flex-col text-center">
          <h1 className="md:text-5xl text-3xl font-semibold text-gray-700 dark:text-gray-200">
            {TContact("title")}
          </h1>
        </div>
        <div className="z-20 w-full max-w-4xl backdrop-blur-sm dark:bg-neutral-900/80 dark:border-gray-700 bg-white/70 drop-shadow-lg border flex-col items-center h-64 rounded-lg justify-center flex">
          <div className="items-center justify-center flex cursor-pointer px-16  bg-gray-300 dark:bg-gray-600 font-medium text-gray-800 dark:text-gray-300 h-12 rounded-lg">
            {TContact("btn")}
          </div>
          <div className="flex mt-6 justify-center items-center gap-4 text-gray-700 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/filipe-leoni/"
              className="hover:text-blue-700"
            >
              <BsLinkedin size={30} />
            </a>
            <a
              href="https://github.com/FilipeLeoni"
              className="hover:text-blue-700"
            >
              <BsGithub size={32} />
            </a>
            <a
              href="https://www.instagram.com/filipeleoni/"
              className="hover:text-blue-700"
            >
              <AiFillInstagram size={38} />
            </a>
          </div>
        </div>
        <Image src={Mail} alt="mail" className="absolute left-32 z-10" />
        <Image
          src={At}
          alt="mail"
          className="absolute bottom-36 right-32 z-10"
        />
      </section>
      <Footer />
    </div>
  );
}
