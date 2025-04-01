import experienceIcon from "../assets/experience-white.svg"
import FormField from "./FormField"
import plusIcon from "../assets/plus-icon.svg"
export default function FormSecondary({formFields, handleSubmit, errors, setErrors, touched, setTouched, formData, setFormData, validate}) {

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (touched[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: validate()[name],
        }));
      }
    };
  
    const handleBlur = (e) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      setErrors((prev) => ({
        ...prev,
        [name]: validate()[name],
      }));
    };
  
   
  return (
    <div className="flex flex-col">
        <div className="pt-4 pb-8 px-10 rounded-t-2xl header flex bg-mandarine">
          <img src={experienceIcon} alt="Add A Professional Experience"/>
          <h4 className="white font-bold ml-2">Add A Professional Experience</h4>
        </div>
        <div className="mt-[-20px]">
        <form action="submit" onSubmit={handleSubmit}>
            <div className="flex border-primary-gray border-t-0 rounded-2xl pt-5 pb-10 px-10 gap-10 bg-black">
                <div className="flex flex-wrap justify-between w-1/2 pt-5">
                {formFields && formFields.slice(0, 4).map((field, index) => (
                    <FormField
                    handleBlur={handleBlur}
                    value={formData[field.name]}
                    handleChange={handleChange}
                    key={index}
                    label={field.label}
                    id={field.id}
                    placeholder={field.placeholder}
                    width={field.width}
                    styles={field.styles}
                    type={field.type}
                    errors={errors[field.name]}
                    touched={touched[field.name]}
                    name={field.name}
                    />
                ))}
                </div>
                <div className="flex flex-wrap justify-between w-1/2 pt-5">
                {formFields && formFields.slice(4).map((field, index) => (
                    <FormField
                    handleBlur={handleBlur}
                    value={formData[field.name]}
                    handleChange={handleChange}
                    key={index}
                    label={field.label}
                    id={field.id}
                    placeholder={field.placeholder}
                    width={field.width}
                    styles={field.styles}
                    type={field.type}
                    errors={errors[field.name]}
                    touched={touched[field.name]} 
                    name={field.name}
                    fieldType={field.fieldType}
                    />
                ))}
                </div>
            </div>
            <div className="flex justify-center gap-10 mt-10">
                <button className="bg-mandarine px-10 py-1 font-bold rounded-full white">
                Save Changes
                </button>
            </div>
        </form>
        </div>
    </div>
  )
}
