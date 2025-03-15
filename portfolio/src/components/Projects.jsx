import ProjectsIcon from "../assets/projects-white.svg";
import Project from "../components/Project";
import Airnguru from "../assets/Airnguru.webp"
import cuatroEme from "../assets/4m.webp"

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
    <div id="projects" className=" gray-gradient  rounded-t-[40px] p-14 pb-0  bg-primary-black flex flex-col w-full">
     <div className="flex items-center">
                 <h3 className="flex text-md pb-2 border-b-gray w-full font-bold white items-center">
                  <div className="bg-mandarine flex justify-center items-center rounded-md px-[4px] py-[2px] mr-2">
                     <img src={ProjectsIcon} alt="My Professional Experience" className="rounded-md h-5"/>
                   </div> Projects
                 </h3>
             </div>
      <div className="flex flex-col w-full gap-20 mt-20 mb-40" >
        <div className="flex w-full gap-20 items-center px-40 ">
          <div className="w-1/2">
            <img src={Airnguru} alt="Airnguru" />
          </div>
          <div className="w-1/2 flex flex-col pt-20  ">
            <h3 className="white font-black text-3xl mb-2">Airnguru</h3>
            <p className="white mb-5">(February 2020 - June 2024)</p>
            <p className="white">As a freelance designer, I have worked on branding projects and designed a variety of printed materials, such as brochures, banners, and editorial layouts. I also create digital assets, including newsletters and social media flyers. My experience includes developing websites using CMS platforms like Wix and Shopify, as well as custom-coded sites with various technologies. Additionally, I handle basic video editing tasks.</p>
            <a className="white mt-10 w-fit px-10 py-1 border rounded-full" href="#">Visit Project</a>
          </div>
        </div>
        <div className="flex w-full gap-20 flex-row-reverse items-center px-40 ">
          <div className="w-1/2">
            <img src={cuatroEme} alt="Airnguru" />
          </div>
          <div className="w-1/2 flex flex-col pt-20 ">
            <h3 className="white font-black text-3xl mb-2">Airnguru</h3>
            <p className="white mb-5">(February 2020 - June 2024)</p>
            <p className="white">As a freelance designer, I have worked on branding projects and designed a variety of printed materials, such as brochures, banners, and editorial layouts. I also create digital assets, including newsletters and social media flyers. My experience includes developing websites using CMS platforms like Wix and Shopify, as well as custom-coded sites with various technologies. Additionally, I handle basic video editing tasks.</p>
            <a className="white mt-10 w-fit px-10 py-1 border rounded-full" href="#">Visit Project</a>
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="px-10  mb-40 flex overflow-x-auto cursor-grab scroll-container"
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

