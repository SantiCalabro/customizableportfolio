import FormStack from "./FormStack";
import { useState } from "react";
import { useForm } from '../hooks/useForm';
import { stackValidation, initialStackValues } from '../validations/stack';
export default function EditStack() {
  const devSkills = [
    { id: 1, technology: "JavaScript", profession: "Development" },
    { id: 2, technology: "NodeJS", profession: "Development" },
    { id: 3, technology: "Laravel", profession: "Development" },
    { id: 4, technology: "CSS", profession: "Development" },
    { id: 5, technology: "Tailwind", profession: "Development" },
  ];

  const designSkills = [
    { id: 1, technology: "Adobe Photoshop", profession: "Design" },
    { id: 2, technology: "Adobe Illustrator", profession: "Design" },
    { id: 3, technology: "Figma", profession: "Design" },
    { id: 4, technology: "Adobe Premiere", profession: "Design" },
    { id: 5, technology: "Adobe After Effects", profession: "Design" },
  ];

  const [devStack, setDevStack] = useState(devSkills);
  const [designStack, setDesignStack] = useState(designSkills);

  const [propsKey, setPropKey] = useState(0);
  
  const devForm = useForm(initialStackValues, stackValidation);
  const designForm = useForm(initialStackValues, stackValidation);
  
  const formFields = [
    {
      id: "technology",
      label: "Add Technology",
      name: "technology",
      placeholder: "Technology",
      width: "w-full h-full",
      type: "text",
    },
    {
      id: "file",
      label: "Add Icon",  
      name: "file",
      width: "w-full h-[150px]",
      type: "file",
    },
  ];


  const handleClick = (e, profession) => {
    e.preventDefault();
  
    const currentForm = profession === "Development" ? devForm : designForm;
    const currentValues = currentForm.values;
    const currentErrors = stackValidation(currentValues);
  
    if (Object.keys(currentErrors).length > 0) {
      return;
    }
  
    const newItem = {
      id: Date.now(),
      technology: currentValues.technology,
      file: currentValues.file,
      profession,
    };
  
    if (profession === "Development") {
      setDevStack((prev) => [...prev, newItem]);
      devForm.resetForm(); 
    } else {
      setDesignStack((prev) => [...prev, newItem]);
      designForm.resetForm();
    }
  
    setPropKey((prev) => prev + 1);
  };
  

  const handleRemove = (id, profession) => {
    if (profession === "Development") {
      setDevStack((prev) => prev.filter((el) => el.id !== id));
    } else {
      setDesignStack((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <div className="flex flex-col py-20">
    <div className="flex w-full gap-10 px-40 ">
      <div className="w-1/2">
     <FormStack
      formKey={`dev-${propsKey}`}
      fields={formFields}
      handleRemove={handleRemove}
      handleClick={handleClick}
      stack={devStack}
      profession="Development"
      label="For Development"
      {...devForm}
    />
    </div>

    <div className="w-1/2">
    <FormStack
      formKey={`design-${propsKey}`}
      fields={formFields}
      handleRemove={handleRemove}
      handleClick={handleClick}
      stack={designStack}
      profession="Design"
      label="For Design"
      {...designForm}
    />
    </div>

    </div>
    <div className="flex justify-center gap-10 mt-10">
    <button className="bg-mandarine px-14 py-1 font-bold rounded-full white" >Save Changes</button>
   </div>
   </div>
  );
}
