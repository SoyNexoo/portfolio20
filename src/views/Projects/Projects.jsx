import Project from "../../components/Project";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Projects = () => {
  const { language, content } = useContext(LanguageContext);

  return (
    <div
      id="experience"
      className="h-full bg-gray  w-full flex flex-col text-black justify-center text-center gap-20 items-center p-10 pb-[80px]">
      <div className="">
        <h1 className="text-7xl sm:text-5xl font-bold strokeText ">
          {content.projects[language].title}
        </h1>
        <p className="text-[#303030]">{content.projects[language].subtitle}</p>
      </div>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-1 ">
        {content.projects[language].list.map((ele, index) => (
          <Project
            title={ele.title}
            description={ele.description}
            image={ele.imageUrl}
            key={index}
            list={ele.list}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
