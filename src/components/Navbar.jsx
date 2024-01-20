import { Link, Events, scrollSpy } from "react-scroll";
import { MingcuteDownLine } from "../utils/Icons";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const { language, content, handleLanguageChange } =
    useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const logoUrl =
    "http://res.cloudinary.com/dkdounmsa/image/upload/v1701429508/wabobvyikiboscikzsz1.png";
  const link = [
    {
      name: content.home[language].nav.link1,
      path: "home",
    },
    {
      name: content.home[language].nav.link2,
      path: "aboutMe",
    },
    {
      name: content.home[language].nav.link3,
      path: "technologies",
    },
    {
      name: content.home[language].nav.link4,
      path: "skills",
    },
    {
      name: content.home[language].nav.link5,
      path: "experience",
    },
    {
      name: content.home[language].nav.link6,
      path: "contact",
    },
  ];
  const [color, setColor] = useState("home");

  useEffect(() => {
    // Inicializar el scrollSpy al cargar el componente
    Events.scrollEvent.register("begin", () => console.log("begin scroll"));
    Events.scrollEvent.register("end", () => console.log("end scroll"));
    scrollSpy.update();

    // Desregistrar eventos al desmontar el componente
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const colors = [
    "About me",
    "Skills",
    "Experience",
    "Sobre mi",
    "Habilidades",
    "Experiencia",
  ];
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full ${
    colors.includes(color) && !open ? "bg-black" : "bg-white"
  }  ${
    open && "sm:bg-white md:bg-white"
  } transition ease transform duration-300`;

  return (
    <>
      {open && (
        <div className={`bg-[#000000CC] h-screen w-screen fixed z-50`}></div>
      )}
      <nav
        className={`fixed z-[100] flex justify-between w-full top-0 items-center smMd:items-start text-white px-6 py-4 ${
          open && "smMd:bg-violet smMd:shadow-xl"
        } `}>
        <img
          src={logoUrl}
          className={`rounded-full relative  w-[60px] h-[60px] smMd:w-[45px] smMd:h-[45px] ${
            open && "smMd:hidden"
          }`}
        />
        <div className={`ml-[4%] ${open ? "smMd:block" : "smMd:hidden"}   `}>
          <ul className="flex smMd:flex-col gap-5">
            {link.map((ele, index) => (
              <Link
                className={`cursor-pointer text-2xl font-bold nav-item ${
                  colors.includes(color) ? "text-black" : "text-white"
                } transition-colors smMd:p-2 smMd:text-white ${
                  ele.name === color && "smMd:bg-darkViolet "
                }`}
                key={index}
                to={ele.path}
                spy={true}
                duration={500}
                smooth={true}
                onSetActive={() => setColor(ele.name)}>
                {ele.name}
                {ele.name === color ? (
                  <motion.div
                    className={`pb-1 smMd:hidden ${
                      color === "Contact" || color == "Contacto"
                        ? "bg-darkCyan"
                        : color === "Services" || color == "Servicios"
                        ? "bg-darkViolet "
                        : "bg-violet smMd:bg-darkViolet"
                    }`}
                    layoutId="underline"
                  />
                ) : null}
              </Link>
            ))}
          </ul>
          <button
            onClick={handleLanguageChange}
            className={`hidden relative  smMd:mt-5 smMd:flex smMd:w-full items-center h-fit w-fit border-2 p-2 ${
              colors.includes(color)
                ? "text-black hover:bg-black hover:text-white hover:border-black"
                : "text-white hover:bg-white hover:text-black hover:border-white"
            } transition-colors smMd:border-white smMd:text-white `}>
            <span className="flex text-2xl">{language.toUpperCase()}</span>
            <MingcuteDownLine width={30}></MingcuteDownLine>
          </button>
        </div>
        <button
          className={`hidden smMd:flex flex-col h-12 w-12 border-2 ${
            colors.includes(color) ? "border-black" : "border-white"
          } rounded justify-center items-center group ${
            open && "border-[white_!important]"
          }`}
          onClick={() => setOpen(!open)}>
          <div
            className={`${genericHamburgerLine} ${
              open
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              open
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
        <button
          onClick={handleLanguageChange}
          className={`flex relative smMd:hidden items-center h-fit w-fit border-2 p-2 ${
            colors.includes(color)
              ? "text-black hover:bg-black hover:text-white hover:border-black"
              : "text-white hover:bg-white hover:text-black hover:border-white"
          } transition-colors `}>
          <span className="flex text-2xl">{language.toUpperCase()}</span>
          <MingcuteDownLine width={30}></MingcuteDownLine>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
