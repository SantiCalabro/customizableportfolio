export default function Chip({ tech, icon, alt, type, handleRemove, id, profession }) {
  return (
    <div className={`flex  shadow-2xl w-fit px-5   items-center ${type === "edit" ? "border-mandarine rounded-full py-2" : "border-gray rounded-lg py-3"}`}>
    {type !== "edit" && 
      <div className="flex pr-3 ">
       <img src={icon} alt={alt} className="w-7 h-auto max-w-none" />
      </div>
    }
      <span className={` white ${type === "edit" ? "" : "border-l-gray  pl-2 font-semibold "}`}>
        {tech}
      </span>
      {type === "edit" && 
      <div className="flex pl-3" onClick={()=>handleRemove(id, profession)}>
       <img src={icon} alt={alt} className="w-4 h-auto max-w-none cursor-pointer" />
      </div>
    }
    </div>
  );
}
