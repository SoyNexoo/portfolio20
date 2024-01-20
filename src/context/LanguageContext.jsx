/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import contentHome from "../views/home/HomeContent";
import contentAboutMe from "../views/AboutMe/AboutMeContent";
import contentServices from "../views/Technologies/ServicesContent";
import contentSkill from "../views/Skills/SkillsContent";
import contentContact from "../views/Contact/ContactContent";
import contentProjects from "./../views/Projects/ProjectsContent";
const actualLanguage = localStorage.getItem("language");
export const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    actualLanguage != "en" ? "es" : "en"
  );
  const [content, setContent] = useState({
    home: contentHome,
    aboutMe: contentAboutMe,
    services: contentServices,
    skills: contentSkill,
    projects: contentProjects,
    contact: contentContact,
  });
  const handleLanguageChange = () => {
    if (language == "es") localStorage.setItem("language", "en");
    else localStorage.setItem("language", "es");
    window.location.href = window.location.pathname;
    setLanguage(localStorage.getItem("language"));
  };

  useEffect(() => {
    setContent({
      home: contentHome,
      aboutMe: contentAboutMe,
      services: contentServices,
      skills: contentSkill,
      projects: contentProjects,
      contact: contentContact,
    });
  }, [language]);

  const data = { content, handleLanguageChange, language };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
