import ProjectCard from "./ProjectCard";
import PlayExpert from "../assets/PlayExpert.webp";
import FormTertiary from "./FormTertiary";
import { useState } from "react"
import { projectValidation, initialProjectValues } from '../validations/projects';
import { useForm } from '../hooks/useForm';
import UpdateForm from "./UpdateForm";

export default function EditProjects() {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const formFields = [
    {
      label: "Project Name",
      name: "projectName",
      placeholder: "Project Name",
      width: "w-1/2 mb-6 pr-1",
      styles: "w-1/2 mb-6 pr-2",
    },
    {
      label: "Client",
      name: "client",
      placeholder: "Client",
      width: "w-1/2 mb-6 pr-1",
      styles: "w-1/2 mb-6 pl-1",
    },
    {
      label: "Github Link",
      name: "github",
      placeholder: "Github Link",
      width: "w-1/2 mb-6 ",
      styles: "w-full mb-6",
    },
    {
      label: "Live URL",
      name: "url",
      placeholder: "Link to the live project",
      width: "w-1/2 mb-5 pr-1",
      fieldType: "text",
      styles: "w-full",
    },
    {
      label: "Project Type",
      name: "projectType",
      width: "w-1/2 pl-1  mb-5 ",
      fieldType: 'dropdown',
      styles: "w-full"
    },
    {
      label: "Project Description",
      name: "description",
      placeholder: "Your Description Here",
      fieldType: "textarea",
      width: "w-full h-full mb-5 ",
      styles: "w-full",
    },
    {
      label: "Featured Image",
      name: "file",
      width: "w-1/2 h-[150px] pr-1",
      type: 'file',
    },
    {
      label: "Multimedia",
      name: "multimedia",
      type: "file",
      width: "w-1/2 h-[150px] pl-1",
      
    },
  ];

  const listItems = [
    {
      id: 1,
      projectName: 'Play Expert',
      client: "Henry Project",
      projectType: "Development",
      description: "Lorem ipsum dolor sit amet...",
      file: PlayExpert,
      multimedia: [PlayExpert, PlayExpert, PlayExpert,PlayExpert]
    },
    {
      id: 2,
      projectName: 'Galletitas Camet Website',
      github: "https://github.com/",
      client: "Camet",
      projectType: "Development",
      description: "Lorem ipsum dolor sit amet...",
      file: PlayExpert,
      multimedia: [PlayExpert, PlayExpert, PlayExpert,PlayExpert]
    },
    {
      id: 3,
      projectName: 'Manual de Identidad Corporativa - Grupo Almacruz',
      client: "Grupo Almacruz",
      projectType: "Design",
      description: "Lorem ipsum dolor sit amet...",
      file: PlayExpert
    },
    {
      id: 4,
      projectName: 'Airnguru Website',
      client: "Airnguru",
      projectType: "Design",
      description: "Lorem ipsum dolor sit amet...",
      file: PlayExpert
    },
  ];

  const [projects, setProjects] = useState(listItems);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialProjectValues, projectValidation);

  const handleUpdate = (id) => {
    if (id === "") {
      setShowUpdateForm(false);
      return;
    }
    const filtered = projects.find(el => el.id === id);
    filtered && setShowUpdateForm(filtered);
  }

  const filterState = (id) => {
    let filteredItems = projects.filter(el => el.id !== id);
    setProjects(filteredItems);
  }

  const saveItem = (formData, id) => {
    setProjects(prev => {
      if (id) {
        return prev.map(el => el.id === id ? { ...el, ...formData } : el);
      } else {
        return [...prev, { ...formData, id: crypto.randomUUID() }];
      }
    });
  };

  return (
    <div className="flex flex-col gap-10 px-40 py-20">
      <div className="grid grid-cols-2 gap-10">
        {projects.map((el, i) => (
          <ProjectCard
            key={i}
            type={el.projectType}
            img={el.file}
            handleUpdate={handleUpdate}
            alt={el.projectName}
            title={el.projectName}
            client={el.client}
            description={el.description}
            el={el}
            filterState={filterState}
            saveItem={saveItem}
            showUpdateForm={showUpdateForm}
            fields={formFields}
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        ))}
      </div>
      {showUpdateForm !== false && (
      <UpdateForm
        saveItem={saveItem}
        handleUpdate={handleUpdate}
        showUpdateForm={showUpdateForm}
        fields={formFields}
        values={{ ...values, ...showUpdateForm }}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        handleBlur={handleBlur}
        title="Edit Project"
      />
    )}
      <FormTertiary 
       fields={formFields} 
       values={values}
       errors={errors}
       touched={touched}
       handleChange={handleChange}
       handleBlur={handleBlur} 
       onSubmit={handleSubmit(saveItem)}
        />
    </div>
  );
}
