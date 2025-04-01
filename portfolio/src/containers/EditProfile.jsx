import { useSelector } from "react-redux"
import InformationTabs from "../components/InformationTabs"
import CallToAction from "../components/CallToAction"
import Rocket from "../assets/rocket.svg"
import PersonalInformation from "../components/PersonalInformation"
export default function EditProfile() { 
  const nav = useSelector((state) => state.nav)
  return (
    <div
      className={`${
        nav ? "pl-64" : "pl-24"
      } pt-20 flex flex-col items-center bg-black bg-contain bg-repeat duration-500 ease-in-out`}>
      <PersonalInformation/>        
      <CallToAction
              img={Rocket}
              title="Upload Your Experience"
              body={`Don’t forget to <strong class="font-bold mandarine">Save Your Changes</strong>`}
              alt="Upload Your Experience"
              titleStyle="white"
            />
      <InformationTabs/>
   </div>
  )
}
