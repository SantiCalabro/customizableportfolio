import Dropdown from "./Dropdown"
import stack from "../assets/Stack-white.svg"
export default function Stack() {
  return (
    <div id="stack" className="p-14  flex flex-col w-full">
    <div className="flex items-center mb-10">
        <h3 className="flex text-md pb-2 border-b-gray w-full font-bold white items-center">
          <div className="bg-mandarine flex justify-center items-center rounded-md p-[4px] mr-2">
              <img src={stack} alt="My Professional Experience" className="rounded-md h-5"/>
          </div>
          Stack of Technologies
        </h3>
    </div>
    <Dropdown/>
</div>
  )
}
