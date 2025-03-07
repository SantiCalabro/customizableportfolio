import React from "react";
import ProfilePic from "../assets/profile-pic.jpeg";
import Labels from "./Labels";
export default function Hero() {
  return (
    <div className="w-10/12 flex flex-col items-center">
      <div className="rounded-full p-4 border-2 border-mandarine shadow-[0_0_20px_10px_rgba(255,117,81,0.2)]">
        <div className="overflow-hidden rounded-full w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 ">
          <img src={ProfilePic} alt="Santiago Calabró - Software Developer" />
        </div>
      </div>
      <h1 class="text-white text-7xl mt-5 roboto font-medium">
        Santiago Calabró
      </h1>
      <p class="mandarine text-xl mt-5 font-light">
        Software Developer & Graphic Designer
      </p>

      <Labels />
    </div>
  );
}
