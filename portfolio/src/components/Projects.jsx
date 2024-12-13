import ProjectsIcon from "../assets/projects.svg";
import Project from "../components/Project";

import { useRef, useState } from 'react';

export default function Projects() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); 
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft); 
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return; 
    const x = e.pageX - containerRef.current.offsetLeft; 
    const scroll = scrollLeft - (x - startX); 
    containerRef.current.scrollLeft = scroll; 
  };

  const handleMouseUp = () => {
    setIsDragging(false); 
  };

  const handleMouseLeave = () => {
    setIsDragging(false); 
  };

  return (
    <div id="projects" className="flex flex-col w-full">
      <div className="flex items-center bg-white h-10 w-50 pl-10">
        <h3 className="flex roboto text-lg font-medium">
          <img src={ProjectsIcon} alt="My Professional Experience" className="mr-2 filter invert" />
          My Projects
        </h3>
      </div>

      <div
        ref={containerRef}
        className="px-10 py-10 flex overflow-x-auto cursor-grab scroll-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove} 
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <Project key={index} />
        ))}
      </div>
    </div>
  );
}

