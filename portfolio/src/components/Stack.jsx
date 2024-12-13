import Dropdown from "./Dropdown"
import stack from "../assets/Stack.svg"
export default function Stack() {
  return (
    <div id="stack" className="bg-primary-black flex flex-col w-full">
    <div className="flex items-center bg-white h-10 w-50 pl-10">
        <h3 className="flex roboto text-lg font-medium">
            <img src={stack} alt="My Professional Experience" className="mr-2 filter invert"/>
            My Stack
        </h3>
    </div>
    <Dropdown/>
</div>
  )
}
