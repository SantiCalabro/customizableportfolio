import FormField from './FormField'
import cross from "../assets/exit-white.svg"

export default function UpdateForm({handleUpdate, showUpdateForm}) {
  const {company, date, position, description, location} = showUpdateForm
    const formFields = [
        {
          label: "Position",
          id: "position",
          value: position,
          width: "w-full",
          styles: "mb-5",
        },
        {
          label: "Company",
          id: "company",
          value: company,
          width: "w-full",
          styles: "mb-5",
        },
        {
          label: "Starting Year",
          id: "starting",
          value: date,
          width: "w-[49%]",
          type: "date",
        },
        {
          label: "Finished On",
          id: "finished",
          value: date,
          width: "w-[49%]",
          type: "date",
        },
        {
          label: "Location",
          id: "location",
          value: location,
          width: "w-full",
          styles: "mb-5",
        },
        {
          label: "Job description",
          id: "job-description",
          value: description,
          fieldType: "textarea",
          width: "w-full",
        },
      ]
    
    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-primary-gray py-10 px-10 rounded-xl border-t-[25px] border-t-mandarine w-2/6 relative">
            <div className="header">
                <h4 className="white text-2xl font-bold">{company && company}</h4>
                {position && <p className="white font-light text-xs">For {position && position}</p>}
            </div>
            <img src={cross} alt="exit" className='absolute right-5 top-5 cursor-pointer' onClick={()=>handleUpdate('')} />
            <div className="form mt-4 ">
                <form action="submit" className='flex flex-col'>
                    <div className="flex  flex-col w-full border-primary-gray border-t-0 rounded-2xl pt-5 pb-10 gap-10">
                        <div className="flex flex-wrap justify-between">
                            {formFields && formFields.slice(0, 4).map((field, index) => (
                                <FormField
                                key={index}
                                label={field.label}
                                id={field.id}
                                value={field.value}
                                width={field.width}
                                styles={field.styles}
                                type={field.type}
                                />
                            ))}
                            </div>
                            <div className="flex flex-wrap justify-between">
                            {formFields && formFields.slice(4).map((field, index) => (
                                <FormField
                                key={index}
                                label={field.label}
                                id={field.id}
                                value={field.value}
                                width={field.width}
                                styles={field.styles}
                                type={field.type}
                                fieldType={field.fieldType}
                                />
                            ))}
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
