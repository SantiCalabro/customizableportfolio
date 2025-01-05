import About from "../assets/about.svg";
import Contact from "../assets/contact.svg";
import Education from "../assets/education.svg";
import Experience from "../assets/experience.svg";
import Projects from "../assets/projects.svg";
import Stack from "../assets/stack.svg";
import Logo from "../assets/logo-expanded.svg";
import LogoShrinked from "../assets/logo-shrinked.svg";
import Arrow from "../assets/horizontal-arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { handleNav } from "../Redux/Actions";
import { useState } from "react";
export default function NavBar() {
  const [clickedNav, setClickedNav] = useState(false);
  const [clickedSection, setClickedSection] = useState("About Me");
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.nav);
  const expandOrShrink = () => {
    setClickedNav(!clickedNav);
    dispatch(handleNav(clickedNav));
  };
  const handleSection = (key) => {
    setClickedSection(key);
  };
  const navItems = [
    {
      title: "About Me",
      href: "/#about",
      icon: About,
      name: "About Me",
    },
    {
      title: "Experience",
      href: "/#experience",
      icon: Experience,
    },
    {
      title: "Education",
      href: "/#education",
      icon: Education,
    },
    {
      title: "My Stack",
      href: "/#stack",
      icon: Stack,
    },
    {
      title: "My Projects",
      href: "/#projects",
      icon: Projects,
    },
    {
      title: "Contact Me",
      href: "/#contact",
      icon: Contact,
    },
  ];
  return (
    <div
      className={`duration-500 ease-in-out z-50 shadow shadow-lg fixed flex flex-col ${
        nav ? "w-64" : "w-24"
      } bg-dark h-screen rounded-tr-2xl rounded-bt-2xl items-center pt-5`}>
      <div
        onClick={expandOrShrink}
        className="cursor-pointer bg-mandarine w-5 h-5 absolute right-0 top-50 -mr-2 flex justify-center items-center rounded-full top-1/2 transform -translate-y-1/2">
        <img
          src={Arrow}
          alt="Expand/Shrink Navigation Bar"
          className={`duration-500 ${!nav && "-rotate-180 "}`}
        />
      </div>
      <div className="py-5 border-b border-white w-full flex justify-center">
        <img src={nav ? Logo : LogoShrinked} alt="Santiago Calabró Dev" />
      </div>
      <div className="flex flex-col flex justify-center pt-10">
        {navItems.map((el) => (
          <a
            onClick={() => handleSection(el.title)}
            key={el.title}
            className={` duration-500 flex my-4 text-sm poppins font-semibold ${
              clickedSection === el.title ? "section-active" : "white"
            }`}
            href={el.href}>
            <img className="mr-4" src={el.icon} alt={el.title} />
            <span
              className={`duration-500 ${
                nav ? "opacity-100" : "opacity-0 hidden"
              }`}>
              {el.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
