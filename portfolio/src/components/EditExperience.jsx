import ListItem from "./ListItem"
import FormSecondary from "./FormSecondary"
import { useState } from "react"
export default function EditExperience() {
  const listItems = [
    {
      id:1,
      company: 'Hogarth Argentina',
      startingDate: "April 2023 - June 2024",
      location: "Buenos Aires, Argentina",
      position: "Full Stack Developer",
      description:'I worked on the migration of over 90 Coca-Cola Company websites globally, including collaboration in coordination tasks with Project Managers from different parts of the world.'
    },
    {
      id:2,
      company: 'Freelance Designer and Web Developer',
      position: "Graphic Designer",
      startingDate: "February 2020 - June 2024",
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
      name: "finished",
      id: "finished",
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

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showUpdateForm, setShowUpdateForm] = useState('')
  const [experiences, setExperiences] = useState(listItems)
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    startingDate: "",
    location: "",
    description: "",
  });

 
  

  const handleUpdate = (id) => {
    if (id === ""){
      setShowUpdateForm("")
      return
    }
    const filtered = experiences.find(el => el.id === id)
    filtered && setShowUpdateForm(filtered)
    console.log(showUpdateForm)
  }

  const filterState = (id) =>{
     let filteredItems = experiences.filter(el => el.id !== id)
     setExperiences(filteredItems)
  }
  const validate = () => {
    const newErrors = {};
    if (!formData.position) newErrors.position = "Position is required.";
    if (!formData.company)
      newErrors.company = "Company Name is required.";
    if (!formData.startingDate) {
      newErrors.startingDate = "startingDate date is required.";
    } 
    if (!formData.location) {
      newErrors.location = "Location is required.";
    } 
    if (!formData.description) {
      newErrors.description = "Description is required.";
    } 
    return newErrors;
  };
  const handleSubmit = (e) => {
       e.preventDefault();
       const newErrors = validate();
       setErrors(newErrors);
       setTouched({
         position:true,
         company:true,
         startingDate:true,
         location:true,
         description:true,
       });
       if (Object.keys(newErrors).length === 0) {
        //  alert("Form submitted successfully!");
        console.log(formData)
        setExperiences(prev => [ ... prev, formData]) 
       }
     };
  return (
    <div className="flex flex-col w-full gap-10 px-40 py-20">
       <div className="experience-items flex flex-col gap-4">
        {experiences && experiences.map((el, i) => (
          <ListItem  key={i} showUpdateForm={showUpdateForm} filterState={filterState} handleUpdate={handleUpdate} el={el} />
        ))}
      </div>
      <div className="">
        <FormSecondary formFields={formFields} handleSubmit={handleSubmit} errors={errors} setErrors={setErrors} touched={touched} setTouched={setTouched} validate={validate} formData={formData} setFormData={setFormData}/>
      </div>
    </div>
  )
}
