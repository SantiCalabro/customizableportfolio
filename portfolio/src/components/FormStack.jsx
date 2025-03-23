import experienceIcon from "../assets/experience-white.svg"
import FormField from "./FormField"
import plusIcon from "../assets/plus-icon.svg"
import Chip from "./Chip"
import CrossIcon from "../assets/orange-bg-cross.svg"

export default function FormStack() {
  return (
    <div>
        
<div className="flex flex-col">
        <div className="pt-4 pb-8 px-10 rounded-t-2xl header flex bg-mandarine">
          <img src={experienceIcon} alt="Add A Professional Experience"/>
          <h4 className="white font-bold ml-2">Add Technologies</h4>
        </div>
        <div className="mt-[-20px]">
            <form action="submit">
              <div className="flex flex-col">
                  <div className="flex flex-col border-primary-gray border-t-0 rounded-2xl pt-5 pb-10 px-10  bg-black">
                    <h4 className="white font-bold text-2xl">For Development</h4>
                    <div className="flex w-full border-b-primary-gray pb-5">
                        <div className="flex flex-wrap justify-between w-1/2 pt-5">
                            <FormField label="Add Technology" id="tech" placeholder="Technology" width='w-[49%]'/>
                            <FormField label="Icon" id="icon" width='w-[49%]' type="input" />
                        </div>
                    </div>
                    <div className="flex pt-5 gap-4">
                      <Chip type="edit" tech='JavaScript' alt='JavaScript' icon={CrossIcon}/>
                      <Chip type="edit" tech='Node' alt='Node' icon={CrossIcon}/>
                      <Chip type="edit" tech='Laravel' alt='Laravel' icon={CrossIcon}/>
                      <Chip type="edit" tech='CSS' alt='CSS' icon={CrossIcon}/>
                      <Chip type="edit" tech='Tailwind' alt='Tailwind' icon={CrossIcon}/>
                    </div>
                  </div>
                  
              </div>
            </form>
        </div>
    </div>
    </div>
  )
}
