import { useState, useRef, useEffect } from "react";
import Chip from "./Chip";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); 
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
        onClick={toggleDropdown}
        className="inline-flex w-full px-10 pt-6 pb-4 text-2xl mandarine font-bold bg-dark focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Development
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.5a1 1 0 01-1.414 0l-4-4.5a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      

      {isOpen && (
        <div className="absolute right-0 w-full origin-top-right bg-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Chip/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
