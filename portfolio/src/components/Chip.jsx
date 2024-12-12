import JsIcon from "../assets/JavaScript.svg"
export default function Chip({tech, icon, alt}) {
  return (
    <div className="flex bg-gray w-40 px-4 py-4 rounded-md items-center" >
        <div className="flex pr-2 border-r border-white">
            <img src={JsIcon} alt="JavaScript"/>
        </div>
        <span className="poppins font-semibold white ml-2">
            JavaScript
        </span>
    </div>
  )
}
