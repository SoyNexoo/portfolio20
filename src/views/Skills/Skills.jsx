import {
  FaPaintBrush,
  FaReact,
  FaSass,
  FaCog,
  FaTools,
  FaGit,
  FaGithub,
  FaSlack,
  FaDiscord,
} from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiVisualstudio,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiFigma,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import Appear from "../../components/Appear";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Skills = () => {
  const { language, content } = useContext(LanguageContext);

  const list = {
    frontend: [
      {
        icon: <FaReact className="sm:w-[70px]" size={120}></FaReact>,
        name: "React / Native",
      },
      {
        icon: <SiNextdotjs className="sm:w-[70px]" size={120}></SiNextdotjs>,
        name: "NextJS",
      },
      {
        icon: (
          <SiTailwindcss className="sm:w-[70px]" size={120}></SiTailwindcss>
        ),
        name: "Tailwind CSS",
      },
      {
        icon: <SiRedux className="sm:w-[70px]" size={120}></SiRedux>,
        name: "Redux",
      },
      {
        icon: <SiHtml5 className="sm:w-[70px]" size={120}></SiHtml5>,
        name: "HTML",
      },
      {
        icon: <SiCss3 className="sm:w-[70px]" size={120}></SiCss3>,
        name: "CSS",
      },
      {
        icon: <FaSass className="sm:w-[70px]" size={120}></FaSass>,
        name: "Sass",
      },
      {
        icon: <SiBootstrap className="sm:w-[70px]" size={120}></SiBootstrap>,
        name: "Bootstrap",
      },
      {
        icon: (
          <TbBrandFramerMotion
            className="sm:w-[70px]"
            size={120}></TbBrandFramerMotion>
        ),
        name: "Framer Motion",
      },
    ],
    backend: [
      {
        icon: <SiJavascript className="sm:w-[70px]" size={120} />,
        name: "JavaScript",
      },
      {
        icon: <SiTypescript className="sm:w-[70px]" size={120} />,
        name: "TypeScript",
      },
      {
        icon: <SiNodedotjs className="sm:w-[70px]" size={120}></SiNodedotjs>,
        name: "NodeJS",
      },
      {
        icon: <SiExpress className="sm:w-[70px]" size={120}></SiExpress>,
        name: "Express",
      },
      {
        icon: <SiMongodb className="sm:w-[70px]" size={120}></SiMongodb>,
        name: "MongoDB",
      },
      {
        icon: <SiMongoose className="sm:w-[70px]" size={120}></SiMongoose>,
        name: "Mongoose",
      },
      {
        icon: <SiPostgresql className="sm:w-[70px]" size={120}></SiPostgresql>,
        name: "PostgreSQL",
      },
      {
        icon: <SiMysql className="sm:w-[70px]" size={120}></SiMysql>,
        name: "MySQL",
      },
    ],
    tools: [
      {
        icon: <SiFigma className="sm:w-[70px]" size={120}></SiFigma>,
        name: "Figma",
      },
      {
        icon: <FaGit className="sm:w-[70px]" size={120}></FaGit>,
        name: "Git",
      },
      {
        icon: <FaGithub className="sm:w-[70px]" size={120}></FaGithub>,
        name: "GitHub",
      },
      {
        icon: <FaSlack className="sm:w-[70px]" size={120}></FaSlack>,
        name: "Slack",
      },
      {
        icon: <FaDiscord className="sm:w-[70px]" size={120}></FaDiscord>,
        name: "Discord",
      },
      {
        icon: (
          <SiVisualstudio className="sm:w-[70px]" size={120}></SiVisualstudio>
        ),
        name: "VSCode",
      },
    ],
  };
  return (
    <div
      id="skills"
      className="h-auto bg-lightGray w-full flex flex-col text-black justify-center gap-20 items-center p-20 sm:p-5 ">
      <div className="text-left sm:items-center sm:w-fit md:w-fit flex flex-col justify-left w-full items-left">
        <h1 className="text-7xl sm:text-5xl font-bold text-cyan">
          {content.skills[language].title}
        </h1>
        <div className="pb-2 bg-darkCyan sm:mr-auto sm:w-[20%] md:w-[15%]  w-[4%]"></div>
      </div>
      <div className="flex flex-col gap-5  w-full items-end">
        <div className="flex gap-4 text-right justify-right items-center  text-darkCyan">
          <span className="text-5xl font-bold">Frontend</span>
          <FaPaintBrush size={40}></FaPaintBrush>
        </div>
        <div className="flex gap-5 sm:gap-2  flex-wrap w-[60%] sm:w-full md:w-full text-darkCyan justify-end ">
          <Appear props={list.frontend}></Appear>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full items-start">
        <div className="flex gap-4 items-center sm:items-end   text-darkCyan">
          <FaCog size={50}></FaCog>
          <span className="text-5xl font-bold">Backend</span>
        </div>
        <div className="flex gap-5 flex-wrap sm:gap-2 sm:w-full w-[60%] md:w-full text-darkCyan justify-start ">
          <Appear props={list.backend}></Appear>
        </div>
      </div>
      <div className="flex flex-col gap-5  w-full sm:items-center items-end">
        <div className="flex gap-4 sm:text-center sm:justify-center text-right justify-right items-center  text-darkCyan">
          <span className="text-5xl sm:text-[2.8rem] font-bold">
            {content.skills[language].tools}
          </span>
          <FaTools size={40}></FaTools>
        </div>
        <div className="flex gap-5 sm:gap-2 sm:w-full flex-wrap w-[60%] md:w-full text-darkCyan justify-end ">
          <Appear props={list.tools}></Appear>
        </div>
      </div>
    </div>
  );
};

export default Skills;
