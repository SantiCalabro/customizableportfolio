import { useSelector } from "react-redux"
import userIcon from "../assets/user-icon.png"
import editPen from "../assets/edit-pen.svg"
import InformationTabs from "../components/InformationTabs"
import CallToAction from "../components/CallToAction"
import Rocket from "../assets/rocket.svg"
export default function EditProfile() { 
  const nav = useSelector((state) => state.nav)
  return (
    <div className={`${
      nav ? "pl-64" : "pl-24"
    } pt-20 flex flex-col items-center bg-black bg-contain bg-repeat duration-500 ease-in-out h-screen`}> 
   
        <div className="w-full px-10 pb-5 border-b-mandarine text-xl">
          <h3 className="white font-light"><strong className="font-bold">Add or Update</strong> information about you</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="border-mandarine border-2  w-1/2 mt-10 rounded-full p-3 flex items-center justify-center flex-col">
            <img src={userIcon} alt="My Profile"/>
          </div>
          <span className="white mt-3 font-light">Upload your profile picture</span>
          <div className="flex mt-3">
            <h1 className="white text-4xl font-black mr-3">Santiago Calabró</h1>
            <img src={editPen} alt="Edit" className="cursor-pointer"/>
          </div>
        </div>
        <div className="about mt-10 flex flex-col items-center justify-center"> 
            <form type="submit">
              <div className="flex flex-col">
                <label htmlFor="about" className="white mb-2">About You</label>
                <textarea name="about" id="about" className="focus:outline-none white p-3 text-sm  border-primary-gray w-[700px] h-40 rounded-xl bg-gray-opacity"></textarea>
                <div className="mt-5 flex items-center justify-center gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="age" className="white mb-2">Age</label>
                    <input type="text" name="age" id="age" className="text-sm px-3 focus:outline-none white border-primary-gray w-[100px] h-8 rounded-md bg-gray-opacity"/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="country" className="white mb-2">Country of Residence</label>
                    <input type="text" name="country" id="country" className="text-sm px-3 focus:outline-none white border-primary-gray w-[230px] h-8 rounded-md bg-gray-opacity"/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="languages" className="white mb-2">Languages</label>
                    <select name="languages" id="languages" className="text-sm px-3 focus:outline-none border-primary-gray w-[150px] h-8 rounded-md bg-gray-opacity white">
                      <option value="english" className="">English</option>
                      <option value="spanish">Spanish</option>  
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-10 gap-5">
                  <button className="bg-mandarine border-mandarine white font-bold border rounded-full px-5 py-2 w-56">Save Changes</button>
                  <button className="border-mandarine mandarine font-bold rounded-full px-5 py-2 w-56">Cancel</button>
                </div>
              </div>
            </form>
        </div>
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
