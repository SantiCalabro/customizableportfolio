import { useState, useRef, useEffect, useCallback } from "react";
import Chip from "./Chip";
import JsIcon from "../assets/JavaScript.svg";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState({
    dev: true,
    design: false,
  });

  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback((type) => {
    setIsOpen((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen({
          dev: false,
          design: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => toggleDropdown("dev")}
        className="poppins inline-flex w-full border-b-mandarine px-10 pt-6 pb-4 text-2xl mandarine font-bold bg-primary-black focus:outline-none">
        Development
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.5a1 1 0 01-1.414 0l-4-4.5a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen.dev && (
        <div
          className=" right-0 py-10 w-full origin-top-right bg-dark shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-500 ease-in-out max-h-[500px] opacity-100 overflow-hidden"
          style={{
            maxHeight: isOpen.dev ? "500px" : "0",
            opacity: isOpen.dev ? 1 : 0,
          }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-4 md:grid-cols-3 md:px-8 lg:grid-cols-4 lg:px-10 xl:grid-cols-5 2xl:grid-cols-7 2xl:px-40 gap-4 place-items-center">
            {Array.from({ length: 10 }).map((_, index) => (
              <Chip
                key={index}
                icon={JsIcon}
                alt="JavaScript"
                tech="JavaScript"
              />
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => toggleDropdown("design")}
        className="poppins inline-flex w-full border-b-mandarine px-10 pt-6 pb-4 text-2xl mandarine font-bold bg-primary-black focus:outline-none">
        Design
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.5a1 1 0 01-1.414 0l-4-4.5a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen.design && (
        <div
          className=" right-0 py-10 w-full origin-top-right bg-dark shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out max-h-[500px] opacity-100 overflow-hidden"
          style={{
            maxHeight: isOpen.design ? "500px" : "0",
            opacity: isOpen.design ? 1 : 0,
          }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-4 md:grid-cols-3 md:px-8 lg:grid-cols-4 lg:px-10 xl:grid-cols-5 2xl:grid-cols-7 2xl:px-40 gap-4 place-items-center">
            {Array.from({ length: 10 }).map((_, index) => (
              <Chip
                key={index}
                icon={JsIcon}
                alt="JavaScript"
                tech="JavaScript"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
