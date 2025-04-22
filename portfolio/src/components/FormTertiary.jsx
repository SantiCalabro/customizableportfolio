import experienceIcon from "../assets/experience-white.svg"
import FormField from "./FormField"

export default function FormTertiary({fields, values, errors, touched, handleChange, handleBlur, onSubmit}) {
  return (
     <div className="flex flex-col">
            <div className="pt-4 pb-8 px-10 rounded-t-2xl header flex bg-mandarine">
              <img src={experienceIcon} alt="Add A Professional Experience"/>
              <h4 className="white font-bold ml-2">Add A New Project</h4>
            </div>
            <div className="mt-[-20px]">
            <form action="submit" onSubmit={onSubmit}>
            <div className="flex flex-col border-primary-gray border-t-0 rounded-2xl pt-5 pb-10 px-10 gap-10 bg-black">
                <div className="flex gap-10 ">
                    <div className="flex flex-wrap justify-between w-1/2 pt-5">
                    {fields && fields.slice(0, 3).map((field, index) => (
                        <FormField
                            key={index}
                            field={field}
                            label={field.label}
                            value={values[field.name] }
                            name={field.name}
                            placeholder = {field.placeholder}
                            styles={field.styles}
                            error={errors[field.name]}
                            touched={touched[field.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type={field.type || "text"}
                        />
                    ))}
                    </div>
                    <div className="flex flex-wrap justify-between w-1/2 pt-5">
                    {fields && fields.slice(3,5).map((field, index) => (
                        <FormField
                            key={index}
                            field={field}
                            label={field.label}
                            value={values[field.name] }
                            name={field.name}
                            placeholder = {field.placeholder}
                            styles={field.styles}
                            error={errors[field.name]}
                            touched={touched[field.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type={field.type || "text"}
                            fieldType={field.fieldType}
                        />
                    ))}
                    </div>
                </div>
                <div className="flex gap-10">
                {fields && fields.slice(5).map((field, index) => (
                        <FormField
                            key={index}
                            field={field}
                            label={field.label}
                            value={values[field.name] }
                            name={field.name}
                            placeholder = {field.placeholder}
                            styles={field.styles}
                            width={field.width}
                            error={errors[field.name]}
                            touched={touched[field.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type={field.type || "text"}
                            fieldType={field.fieldType}
                        />
                    ))}
                </div>
                <button className="w-fit ml-auto bg-mandarine px-10 py-1 font-bold rounded-full white">
                    Save Changes
                </button>
                </div>
            </form>
            </div>
        </div>
  )
}
