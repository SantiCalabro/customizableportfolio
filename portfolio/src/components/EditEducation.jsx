import ListItem from "./ListItem"
import FormSecondary from "./FormSecondary"
import { useState } from "react"
import { useForm } from '../hooks/useForm';
import { educationValidation, initialEducationValues } from '../validations/education';
export default function EditEducation() {
  const listItems = [
    {
      id:4,
      institution: 'Hogarth Argentina',
      startingDate: "April 2023",
      finishingDate: "June 2024",
      location: "Buenos Aires, Argentina",
      degree: "Full Stack Developer",
      description:'I worked on the migration of over 90 Coca-Cola Company websites globally, including collaboration in coordination tasks with Project Managers from different parts of the world.',
      file: "CliftonStrengths.pdf",
    },
    {
      id:5,
      institution: 'Freelance Designer and Web Developer',
      degree: "Graphic Designer",
      startingDate: "February 2020",
      finishingDate: "June 2024",
      description:'As a freelance designer, I have worked on branding projects and designed a variety of printed materials, such as brochures, banners, and editorial layouts. I also create digital assets, including newsletters and social media flyers. My experience includes developing websites using CMS platforms like Wix and Shopify, as well as custom-coded sites with various technologies. Additionally, I handle basic video editing tasks.',
      file: "CliftonStrengths.pdf",
    },
  ]
  const [showUpdateForm, setShowUpdateForm] = useState('')
  const [education, setEducation] = useState(listItems)

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialEducationValues, educationValidation);
  

  const handleUpdate = (id) => {
    if (id === ""){
      setShowUpdateForm("")
      return
    }
    const filtered = education.find(el => el.id === id)
    filtered && setShowUpdateForm(filtered)
  }

  const filterState = (id) =>{
     let filteredItems = education.filter(el => el.id !== id)
     setEducation(filteredItems)
  }

  const saveEducation = (formData, id) => {
    setEducation(prev => {
      if(id){
        const updatedExperience = prev.map(el => el.id === id ? {... el, ...formData} : el )
        return updatedExperience
      }
      return [...prev, {...formData, id: crypto.randomUUID()}]
    }) 
  };
  const formFields = [
    {
      label: "Degree",
      name: "degree",
      id: "degree",
      placeholder: "Full Stack Developer",
      width: "w-full",
      styles: "mb-5",
    },
    {
      label: "Institution",
      id: "institution",
      name: "institution",
      placeholder: "School Name",
      width: "w-full",
      styles: "mb-5",
    },
    {
      label: "Starting Year",
      id: "starting",
      name: "startingDate",
      placeholder: "Select Date",
      width: "w-[49%]",
      type: "date",
    },
    {
      label: "Finished On",
      id: "finished",
      name: "finishingDate",
      placeholder: "Select Date",
      width: "w-[49%]",
      type: "date",
    },
    {
      label: "Location",
      id: "location",
      name: "location",
      placeholder: "Buenos Aires, Argentina",
      width: "w-full",
      styles: "mb-5",
    },
    {
      label: "Upload Certificate",
      id: "certificate",
      name: "certificate",
      fieldType: "file",
      type: "file",
      width: "w-full h-40",
      
    },
  ]
  
  return (
    <div className="flex flex-col w-full gap-10 px-40 py-20">
          <div className="experience-items flex flex-col gap-4">
                  {education && education.map((el, i) => (
                      <ListItem  key={i} showUpdateForm={showUpdateForm} filterState={filterState} handleUpdate={handleUpdate} el={el} fields={formFields} 
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur} 
                      saveItem={saveEducation}
                      index={i}
                      />
                    ))}
          </div>
          <div className="">
                  <FormSecondary 
                  fields={formFields} 
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur} 
                  onSubmit={handleSubmit(saveEducation)} 
                  
                  />
          </div>
        </div>
  )
}
