import experienceIcon from "../assets/experience-white.svg"
import FormField from "./FormField"
import plusIcon from "../assets/plus-icon.svg"
export default function FormSecondary() {
  return (
    <div className="flex flex-col">
        <div className="pt-4 pb-8 px-10 rounded-t-2xl header flex bg-mandarine">
          <img src={experienceIcon} alt="Add A Professional Experience"/>
          <h4 className="white font-bold ml-2">Add A Professional Experience</h4>
        </div>
        <div className="mt-[-20px]">
            <form action="submit">
                <div className="flex border-primary-gray border-t-0 rounded-2xl pt-5 pb-10 px-10 gap-10 bg-black">
                    <div className="flex flex-wrap justify-between w-1/2 pt-5">
                        <FormField label="Position" id="position" placeholder="Full Stack Developer" width="w-full" styles="mb-5"/>
                        <FormField label="Company" id="company" placeholder="Company Name" width="w-full" styles="mb-5"/>
                        <FormField label="Starting Year" id="starting" placeholder="Select Date" width='w-[49%]' type="date"/>
                        <FormField label="Finished On" id="finished" placeholder="Select Date" width='w-[49%]' type="date" />
                    </div>
                    <div className="flex flex-wrap justify-between w-1/2 pt-5">
                        <FormField label="Location" id="location" placeholder="Buenos Aires, Argentina" width="w-full" styles="mb-5"/>
                        <FormField label="Job description" id="job-description" placeholder="Your Description Here" fieldType="textarea" width="w-full" />
                    </div>
                </div>
                <div className="flex justify-center gap-10 mt-10">
                    <button className="white font-bold flex items-center justify-center"><img src={plusIcon} alt="Add other experience" className="mr-2"/>Add other experience</button>
                    <button className="bg-mandarine px-10 py-1 font-bold rounded-full white">Save Changes</button>
                </div>
            </form>
        </div>
    </div>
  )
}
