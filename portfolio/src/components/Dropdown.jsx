import Chip from "./Chip";
import JsIcon from "../assets/JavaScript.svg";

const Dropdown = () => {
  

  return (
    <div className="flex flex-col gap-20" >
      <div className="flex flex-col">
      <span className="w-fit black bg-mandarine text-left px-4 py-1 rounded-md font-black uppercase text-xs tracking-wide">For Development</span>
        <div
          className="mt-5 w-full">
          <div className="2xl:w-10/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-7 gap-4 ">
            {Array.from({ length: 12 }).map((_, index) => (
              <Chip
                key={index}
                icon={JsIcon}
                alt="JavaScript"
                tech="JavaScript"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
      <span className="w-fit black bg-mandarine text-left px-4 py-1 rounded-md font-black uppercase text-xs tracking-wide">For Design</span>
      <div
          className="mt-5 w-full">
          <div className="2xl:w-10/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-7 gap-4 ">
            {Array.from({ length: 4 }).map((_, index) => (
              <Chip
                key={index}
                icon={JsIcon}
                alt="JavaScript"
                tech="JavaScript"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
