import FormField from './FormField'
import cross from "../assets/exit-white.svg"
import { useState, useEffect } from 'react';
export default function UpdateForm({handleUpdate, showUpdateForm, fields, values, errors, touched, saveItem}) {

  const [formValues, setFormValues] = useState(showUpdateForm)

  useEffect(()=>{
    setFormValues[showUpdateForm]
  }, [showUpdateForm])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveItem(formValues, formValues.id)
    handleUpdate('')
  };
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormValues(prev =>( {...prev, [name]:value}))
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-primary-gray py-10 px-10 rounded-xl border-t-[25px] border-t-mandarine w-2/6 relative">
        <div className="header">
          <h4 className="white text-2xl font-bold">{formValues.company}</h4>
          <p className="white font-light text-xs">For {formValues.position}</p>
        </div>
        <img src={cross} alt="exit" className='absolute right-5 top-5 cursor-pointer' onClick={() => handleUpdate('')} />
        <div className="form mt-4">
          <form className='flex flex-col' onSubmit={handleFormSubmit}>
            <div className="flex flex-col w-full border-primary-gray border-t-0 rounded-2xl pt-5 pb-10 gap-10">
              <div className="flex flex-wrap justify-between">
                {fields.slice(0, 4).map((field, id) => (
                  <FormField
                    key={id}
                    {...field}
                    value={formValues[field.name] || values[field.name] || ""}
                    name={field.name}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>
              <div className="flex flex-wrap justify-between">
                {fields.slice(4).map((field, id) => (
                  <FormField
                    key={id}
                    {...field}
                    value={formValues[field.name] || values[field.name] || ""}
                    name={field.name}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>
              <div className='flex mt-2 justify-center gap-10'>
                <button type="submit" className="px-10 py-1 rounded-full bg-mandarine white font-bold">
                  Save Changes
                </button>
                <button type="button" className="border-mandarine px-10 py-1 rounded-full mandarine font-bold" onClick={() => handleUpdate('')}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}