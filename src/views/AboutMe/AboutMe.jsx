import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
const AboutMe = () => {
  const { language, content } = useContext(LanguageContext);

  const laugh =
    "http://res.cloudinary.com/dkdounmsa/image/upload/v1705626848/tsl0rsqhr9ubntchotmi.png";
  const hello =
    "http://res.cloudinary.com/dkdounmsa/image/upload/v1705626848/hi9cx10nwktng4vsxxvf.png";
  const drink =
    "http://res.cloudinary.com/dkdounmsa/image/upload/v1705626848/w7xn6geuzu1kelmggcl9.png";

  const list = [
    {
      icon: <FaLinkedinIn size={40}></FaLinkedinIn>,
      path: "https://www.linkedin.com/in/julianlu05/",
    },
    {
      icon: <FaGithub size={40}></FaGithub>,
      path: "https://github.com/SoyNexoo",
    },
    {
      icon: <FaEnvelope size={40}></FaEnvelope>,
      path: "mailto:julianlu29.03@gmail.com",
    },
    {
      icon: <FaWhatsapp size={40}></FaWhatsapp>,
      path: "https://api.whatsapp.com/send/?phone=5492954600362",
    },
  ];

  return (
    <div
      id="aboutMe"
      className="h-screen bg-gray flex items-center justify-center flex-col gap-4">
      <h1 className="text-7xl sm:text-6xl text-cyan font-bold">
        {content?.aboutMe[language].title}
      </h1>
      <div className="flex flex-row gap-5">
        <img
          src={laugh}
          className="hover:-translate-y-4 transition-transform sm:w-[100px] object-cover "
          alt="Hello!"
        />
        <img
          src={hello}
          className="hover:-translate-y-4 transition-transform sm:w-[100px] object-cover "
          alt="Hello!"
        />
        <img
          src={drink}
          className="hover:-translate-y-4 transition-transform sm:w-[100px] object-cover "
          alt="Hello!"
        />
      </div>
      <p className="w-[70ch] text-black sm:w-[90%] md:w-[90%] text-center">
        {content?.aboutMe[language].description}
      </p>
      <div className="flex flex-wrap justify-center gap-5 text-cyan items-center ">
        {list.map((ele, index) => (
          <a
            href={ele.path}
            className="rounded-full hover:bg-cyan hover:text-gray border-cyan border-2 p-2 transition-colors"
            target="_blank"
            rel="noreferrer"
            key={index}>
            {ele.icon}
          </a>
        ))}
        <a
          target="_blank"
          href={content?.aboutMe[language].resumePath}
          download
          className="text-2xl p-2 font-bold border-cyan border-2 rounded-full hover:bg-cyan hover:text-gray transition-colors "
          rel="noreferrer">
          {content?.aboutMe[language].resume}
        </a>
      </div>
      <p className="text-black text-sm sm:w-[90%] te">
        {content?.aboutMe[language].warning}
        <span className="text-cyan">*</span>
      </p>
    </div>
  );
};

export default AboutMe;
