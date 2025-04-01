import ProjectCard from "./ProjectCard";
import PlayExpert from "../assets/PlayExpert.webp";
import FormTertiary from "./FormTertiary";
import { useState } from "react"
import UpdateForm from "./UpdateForm";

export default function EditProjects() {
    const [showUpdateForm, setShowUpdateForm] = useState(false)
  
    const handleUpdate = (state) => {
      setShowUpdateForm(state)
    }
    const formFields = [
      {
        label: "Project Title",
        id: "title",
        placeholder: "Project Name",
        width: "w-full",
        styles: "mb-5",
      },
      {
        label: "Github Link",
        id: "github",
        placeholder: "Github Link",
        width: "w-full",
        styles: "mb-5",
      },
      {
        label: "Live URL",
        id: "url",
        placeholder: "Link to the live project",
        width: "w-full",
        type: "date",
        styles: "mb-5",
      },
      {
        label: "Discipline",
        id: "discipline",
        width: "w-full",
      },
      {
        label: "Project Description",
        id: "project-description",
        placeholder: "Your Description Here",
        fieldType: "textarea",
        width: "w-full h-full",
        styles: "mb-5",
      },
      {
        label: "Featured Image",
        id: "featured",
        width: "w-[25%]",
        type: 'file',
      },
      {
        label: "Multimedia",
        id: "multimedia",
        fieldType: "files",
        width: "w-[72%]",
      },
    ]
  return (
    <div className="flex flex-col gap-10 px-40 py-20">   
    <div className="grid grid-cols-2 gap-10">
      <ProjectCard
        type="Development"
        img={PlayExpert}
        handleUpdate={handleUpdate}
        alt="Play Expert"
        title="Play Expert"
        description="Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et ..."
      />
      <ProjectCard
        type="Development"
        img={PlayExpert}
        handleUpdate={handleUpdate}
        alt="Play Expert"
        title="Play Expert"
        description="Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et ..."
      />
      <ProjectCard
        type="Development"
        img={PlayExpert}
        handleUpdate={handleUpdate}
        alt="Play Expert"
        title="Play Expert"
        description="Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et ..."
      />
      <ProjectCard
        type="Development"
        img={PlayExpert}
        handleUpdate={handleUpdate}
        alt="Play Expert"
        title="Play Expert"
        description="Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et ..."
      />
    </div>
    <FormTertiary formFields={formFields}/>
        {showUpdateForm && <UpdateForm handleUpdate={handleUpdate} title="Edit Experience" role="Hogarth" formFields={formFields}/>}
    </div>
  );
}