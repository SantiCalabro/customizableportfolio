import FormField from './FormField'
import cross from "../assets/exit-white.svg"

export default function UpdateForm({handleUpdate}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-primary-gray py-10 px-10 rounded-xl border-t-[25px] border-t-mandarine w-2/6 relative">
            <div className="header">
                <h4 className="white text-2xl font-bold">Edit Experience</h4>
                <p className="white font-light text-xs">For Hogarth</p>
            </div>
            <img src={cross} alt="exit" className='absolute right-5 top-5 cursor-pointer' onClick={()=>handleUpdate(false)} />
            <div className="form mt-4 ">
                <form action="submit" className='flex flex-col'>
                    <div className="flex flex-col border-primary-gray border-t-0  py-5 gap-10">
                            <div className="flex flex-wrap justify-between">
                                <FormField label="Position" id="position" placeholder="Full Stack Developer" width="w-full" styles="mb-5"/>
                                <FormField label="Company" id="company" placeholder="Company Name" width="w-full" styles="mb-5"/>
                                <FormField label="Starting Year" id="starting" placeholder="Select Date" width='w-[49%]' type="date" styles="mb-5"/>
                                <FormField label="Finished On" id="finished" placeholder="Select Date" width='w-[49%]' type="date" styles="mb-5"/>
                                <FormField label="Location" id="location" placeholder="Buenos Aires, Argentina" width="w-full" styles="mb-5"/>
                                <FormField label="Job description" id="job-description" placeholder="Your Description Here" fieldType="textarea" width="w-full" />
                            </div>     
                            <div className='flex mt-2 justify-center gap-10'>
                                <button className="px-10 py-1 rounded-full bg-mandarine white font-bold">Save Changes</button>
                                <button className="border-mandarine px-10 py-1 rounded-full mandarine font-bold" onClick={()=>handleUpdate(false)}>Cancel</button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
