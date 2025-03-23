import About from "../assets/about.svg";
import AboutWhite from "../assets/about-white.svg";
import Contact from "../assets/contact.svg";
import ContactWhite from "../assets/contact-white.svg";
import Education from "../assets/education.svg";
import EducationWhite from "../assets/education-white.svg";
import Experience from "../assets/experience.svg";
import ExperienceWhite from "../assets/experience-white.svg";
import Projects from "../assets/projects.svg";
import ProjectsWhite from "../assets/projects-white.svg";
import Stack from "../assets/stack.svg";
import StackWhite from "../assets/stack-white.svg";
import Logo from "../assets/logo-expanded.svg";
import LogoShrinked from "../assets/logo-shrinked.svg";
import Arrow from "../assets/horizontal-arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { handleNav } from "../Redux/Actions";
import { useState } from "react";

export default function NavBar() {
  const [clickedSection, setClickedSection] = useState("About Me");
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.nav);

  const expandOrShrink = () => {
    dispatch(handleNav(!nav));
  };

  const handleSection = (key) => {
    setClickedSection(key);
  };

  const navItems = [
    {
      title: "About Me",
      href: "/#about",
      icon: About,
      iconWhite: AboutWhite,
    },
    {
      title: "Professional Experience",
      href: "/#experience",
      icon: Experience,
      iconWhite: ExperienceWhite,
    },
    {
      title: "My Projects",
      href: "/#projects",
      icon: Projects,
      iconWhite: ProjectsWhite,
    },
    {
      title: "Stack of Technologies",
      href: "/#stack",
      icon: Stack,
      iconWhite: StackWhite,
    },
    {
      title: "Education",
      href: "/#education",
      icon: Education,
      iconWhite: EducationWhite,
    },
    {
      title: "Contact Me",
      href: "/#contact",
      icon: Contact,
      iconWhite: ContactWhite,
    },
  ];

  return (
    <div
      className={`duration-500 ease-in-out z-50 shadow shadow-lg fixed flex flex-col ${
        nav ? "w-64" : "w-24"
      } bg-dark h-screen rounded-tr-2xl items-center pt-5`}>
      <div
        onClick={expandOrShrink}
        className="cursor-pointer bg-mandarine w-5 h-5 absolute right-0 -mr-2 flex justify-center items-center rounded-full top-1/2 transform -translate-y-1/2">
        <img
          src={Arrow}
          alt="Expand/Shrink Navigation Bar"
          className={`duration-500 ${nav && "-rotate-180"}`}
        />
      </div>

      <div className="py-5  w-full flex justify-center h-[70px] relative">
        <div className="relative w-full h-8">
          <a href="/"><img
            src={Logo}
            alt="Santiago Calabró Dev"
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
              nav ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
            }`}
          /></a>
          <a href="/"><img
            src={LogoShrinked}
            alt="Santiago Calabró Dev"
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
              nav ? "opacity-0 max-w-0" : "opacity-100 max-w-full"
            }`}
          />
          </a>
        </div>
      </div>

      <div className="border-t-mandarine flex flex-col justify-center mt-14 pt-5 w-full pl-5 ">
        {navItems.map((el) => (
          <a
            onClick={() => handleSection(el.title)}
            key={el.title}
            className={`flex items-center my-4 text-sm poppins ${
              clickedSection === el.title ? "section-active" : "text-white"
            } px-4`}
            href={el.href}>
            <img
              className="mr-4 shrink-0"
              src={clickedSection === el.title ? el.icon : el.iconWhite}
              alt={el.title}
              width={24}
            />
            <span
              className={`whitespace-nowrap transition-all duration-500 overflow-hidden inline-block ${
                nav ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
              }`}>
              {el.title}
            </span>
          </a>
        ))}
      </div>
      <div
        className={`duration-500  flex flex-col justify-center pt-5 w-full ${
          nav ? "pl-4" : ""
        }`}>
        <a
          className={`flex items-center my-4 text-sm poppins text-white bg-mandarine 
      transition-all duration-500 overflow-hidden 
      ${
        nav
          ? "max-w-52 rounded-full p-3 ml-2"
          : "max-w-14 rounded-full p-3 mx-auto"
      }`}
          href="/profile">
          <img
            className="brightness-200 shrink-0 transition-transform"
            src={AboutWhite}
            alt="My Information"
            width={24}
          />
          <span
            className={`font-semibold whitespace-nowrap transition-all duration-500 overflow-hidden 
            inline-block ${
              nav
                ? "opacity-100 max-w-full ml-2 delay-150"
                : "opacity-0 max-w-0"
            }`}>
            My Information
          </span>
        </a>
      </div>
    </div>
  );
}
