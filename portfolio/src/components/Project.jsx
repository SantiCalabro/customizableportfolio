import playExpert from "../assets/playExpert.webp"
import { useState } from "react";
export default function Project() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div 
  onClick={handleClick} 
  className={`mx-4 rounded-2xl w-80 h-80 overflow-hidden shadow-lg cursor-pointer bg-cover bg-no-repeat flex flex-col items-end ${clicked && 'bg-mandarine'} flex-shrink-0`} 
  style={{backgroundImage: !clicked && `url(${playExpert})` }}
>
  <div className="h-full flex flex-col p-5">
    {clicked && (
      <>
        <h3 className="poppins text-lg font-bold dark mb-2">Play Expert</h3>
        <p className="poppins text-sm dark">Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </>
    )}
  </div>
  
  <div className={`flex justify-between items-center w-full ${!clicked && 'bg-gradient-to-t from-black to-transparent'} px-4 pb-4 pt-6`}>
    {!clicked ? (
      <span className={`poppins ${!clicked ?'white':'black'} font-bold text-lg`}>Play Expert</span>
    ) : (
      <div className="flex">
        <a href="#" className="rounded-full px-5 flex items-center py-1 bg-primary-black white poppins font-semibold text-sm mr-2">Visit</a>
        <a href="#" className="rounded-full px-5 flex items-center py-1 border border-primary-black primary-black poppins font-semibold text-sm mr-2">Code</a>
      </div>
    )}
    <div>
      <svg
        className={`w-6 h-6 cursor-pointer rotate-transition ${clicked ? 'rotate-45' : ''} hover:rotate-45`} 
        width="19" 
        height="19" 
        viewBox="0 0 19 19" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9.5" cy="9.5" r="8.75" stroke={!clicked ? 'white' : 'black'} strokeWidth="1.5" />
        <path
          d="M14.4401 10.2551H10.3137V14.4396H8.66704V10.2551H4.56006V8.76341H8.66704V4.55957H10.3137V8.76341H14.4401V10.2551Z"
          fill={!clicked ? 'white' : 'black'}
        />
      </svg>
    </div>  
  </div>
</div>

  )
}
