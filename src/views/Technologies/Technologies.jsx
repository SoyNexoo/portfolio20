import { Card } from "../../components/Card";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Technologies = () => {
  const { language, content } = useContext(LanguageContext);

  return (
    <>
      <section className="triangle sm:hidden"></section>
      <div
        id="technologies"
        className="bg-violet  w-full flex flex-col text-gray justify-center gap-20 items-center p-10 pb-[80px]">
        <div className="text-right flex flex-col sm:items-center sm:w-fit justify-right w-full items-end">
          <h1 className="text-7xl sm:text-5xl font-bold ">
            {content?.services[language].title}
          </h1>
          <div className="pb-2 bg-darkViolet sm:ml-auto sm:w-[20%] md:w-[15%]  w-[4%]"></div>
        </div>
        <div className="flex sm:flex-col md:flex-col gap-10 items-stretch md:items-center sm:items-center mx-auto justify-center w-full">
          {content?.services[language].list.map((ele, index) => (
            <Card
              key={index}
              icon={ele.icon}
              title={ele.title}
              description={ele.description}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Technologies;
