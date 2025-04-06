import ListItem from "./ListItem"
import FormSecondary from "./FormSecondary"
import { useState } from "react"
import { useForm } from '../hooks/useForm';
import { experienceValidation, initialExperienceValues } from '../validations/experience';
export default function EditExperience() {
  const listItems = [
    {
      id:1,
      company: 'Hogarth Argentina',
      startingDate: "April 2023",
      finishingDate: "June 2024",
      location: "Buenos Aires, Argentina",
      position: "Full Stack Developer",
      description:'I worked on the migration of over 90 Coca-Cola Company websites globally, including collaboration in coordination tasks with Project Managers from different parts of the world.'
    },
    {
      id:2,
      company: 'Freelance Designer and Web Developer',
      position: "Graphic Designer",
      startingDate: "February 2020",
      finishingDate: "June 2024",
      description:'As a freelance designer, I have worked on branding projects and designed a variety of printed materials, such as brochures, banners, and editorial layouts. I also create digital assets, including newsletters and social media flyers. My experience includes developing websites using CMS platforms like Wix and Shopify, as well as custom-coded sites with various technologies. Additionally, I handle basic video editing tasks.'
    },
  ]
  const formFields = [
    {
      label: "Position",
      name: "position",
      id: "position",
      placeholder: "Full Stack Developer",
      width: "w-full",
      styles: "mb-5",
      type: "text",
    },
    {
      label: "Company",
      name: "company",
      id: "company",
      placeholder: 'Company Name',
      width: "w-full",
      styles: "mb-5",
      type: "text",
    },
    {
      label: "startingDate Year",
      name: "startingDate",
      id: "startingDate",
      placeholder: "July 14th 2022",
      width: "w-[49%]",
      type: "date",
    },
    {
      label: "Finished On",
      name: "finishingDate",
      id: "finishingDate",
      placeholder: "November 24th 2024",
      width: "w-[49%]",
      type: "date",
    },
    {
      label: "Location",
      name:"location",
      id: "location",
      placeholder: 'Buenos Aires, Argentina',
      type: "text",
      width: "w-full",
      styles: "mb-5",
    },
    {
      label: "Job description",
      name: "description",
      id: "job-description",
      placeholder: "Your description here",
      fieldType: "textarea",
      width: "w-full h-full",
    },
  ]

  const [showUpdateForm, setShowUpdateForm] = useState('')
  const [experiences, setExperiences] = useState(listItems)


  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialExperienceValues, experienceValidation);
  

  const handleUpdate = (id) => {
    if (id === ""){
      setShowUpdateForm("")
      return
    }
    const filtered = experiences.find(el => el.id === id)
    filtered && setShowUpdateForm(filtered)

  }

  const filterState = (id) =>{
     let filteredItems = experiences.filter(el => el.id !== id)
     setExperiences(filteredItems)
  }

  const saveExperience = (formData, id) => {
    setExperiences(prev => {
      if(id){
        const updatedExperience = prev.map(el => el.id === id ? {... el, ...formData} : el )
        return updatedExperience
      }
      return [...prev, formData]
    }) 
  };
  return (
    <div className="flex flex-col w-full gap-10 px-40 py-20">
       <div className="experience-items flex flex-col gap-4">
        {experiences && experiences.map((el, i) => (
          <ListItem  key={i} showUpdateForm={showUpdateForm} filterState={filterState} handleUpdate={handleUpdate} el={el} fields={formFields} 
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur} 
          saveItem={saveExperience}
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
        onSubmit={handleSubmit(saveExperience)} />
      </div>
    </div>
  )
}
