export default function Chip({tech, icon, alt}) {
  return (
    <div className="flex bg-gray shadow-2xl w-fit px-5 py-4 rounded-xl items-center" >
        <div className="flex pr-3 border-r border-white">
            <img src={icon} alt={alt} className="w-7"/>
        </div>
        <span className="poppins font-semibold white ml-2">
            {tech}
        </span>
    </div>
  )
}
