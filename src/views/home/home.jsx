import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Home = () => {
  const { language, content } = useContext(LanguageContext);
  const imageUrl =
    "http://res.cloudinary.com/dkdounmsa/image/upload/v1705598510/hpctstn2gv1uvezszeyd.png";
  return (
    <div
      id="home"
      className={`home background h-screen flex justify-center items-center flex-col`}>
      <img
        src={imageUrl}
        className="rounded-full w-[300px] h-[300px] sm:w-[250px] sm:h-[250px] object-cover"></img>
      <div className="text-center w-full flex flex-col items-center gap-2 sm:px-4">
        <span className="text-violet text-xl">
          {content?.home[language].title}
        </span>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            `${content?.home[language].sequence1}`,
            1500,
            `${content?.home[language].sequence2}`,
            1500,
            `${content?.home[language].sequence3}`,
            1500,
            `${content?.home[language].sequence4}`,
            1500,
          ]}
          wrapper="span"
          speed={50}
          className="text-7xl  sm:mb-3 md:text-4xl sm:text-3xl text-white font-bold"
          repeat={Infinity}
        />
        <p className="w-3/4 sm:w-full text-ellipsis text-xl text-gray">
          {content?.home[language].subtitle}{" "}
          <span className="text-cyan">
            {content.home[language].subtitleCyan}
          </span>
          ! {":)"}
        </p>
      </div>
    </div>
  );
};

export default Home;
