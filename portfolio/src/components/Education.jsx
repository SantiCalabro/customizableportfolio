import EducationIcon from "../assets/education.svg"
import Dropdown from "./Dropdown"
export default function Education() {
  return (
    <div className="h-screen bg-primary-black flex flex-col w-full">
        <div className="flex items-center bg-white h-10 w-50 pl-10">
            <h3 className="flex roboto text-lg font-medium">
                <img src={EducationIcon} alt="My Professional Experience" className="mr-2 filter invert"/>
                My Education
            </h3>
        </div>
        <Dropdown/>
    </div>
  )
}
