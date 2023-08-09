import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLocale, useTranslations } from "next-intl";
import { Greetings } from "@/components/Greetings";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { AboutMe } from "@/components/AboutMe";
import { calculateAge } from "@/utils/calculateAge";
import { Contact } from "@/components/Contact";

export default function Home() {
  const locale = useLocale();
  const tHome = useTranslations("Main");
  const Tskills = useTranslations("Skills");
  const TProjects = useTranslations("Projects");
  const TExperience = useTranslations("Experience");
  const TAboutMe = useTranslations("AboutMe");
  const TContact = useTranslations("Contact");
  const tHeader = useTranslations("Header");
  const age = calculateAge();

  return (
    <div>
      <Header
        home={tHeader("home")}
        skills={tHeader("skills")}
        experience={tHeader("experience")}
        projects={tHeader("projects")}
        contact={tHeader("contact")}
        locale={locale}
      />
      <Greetings
        greetings={tHome("greetings")}
        title={tHome("title")}
        description={tHome("description")}
      />

      <Skills subtitle={Tskills("title.my")} title={Tskills("title.skills")} />

      <Projects
        subtitle={TProjects("my")}
        title={TProjects("projects")}
        locale={locale}
        code={TProjects("code")}
      />

      <Experience
        subtitle={TExperience("title.my")}
        title={TExperience("title.experience")}
        jobTitle1={TExperience("SouJunior.title")}
        jobTitle2={TExperience("InsightLab.title")}
        company1={TExperience("SouJunior.company")}
        company2={TExperience("InsightLab.company")}
        description1={TExperience("SouJunior.description")}
        description2={TExperience("InsightLab.description")}
      />

      <AboutMe
        subtitle={TAboutMe("title.my")}
        title={TAboutMe("title.history")}
        description={TAboutMe("description", { age: age })}
      />

      <Contact title={TContact("title")} button={TContact("btn")} />
      <Footer />
    </div>
  );
}
