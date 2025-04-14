import FormStack from "./FormStack";
import { useState } from "react";

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
  const [devValues, setDevValues] = useState({ technology: "", icon: null });
  const [designValues, setDesignValues] = useState({ technology: "", icon: null });
  const [propsKey, setPropKey] = useState(0);

  const fields = [
    {
      label: "Add Technology",
      name: "technology",
      placeholder: "Technology",
      width: "w-[49%] h-full",
      type: "text",
    },
    {
      label: "Add Icon",
      name: "icon",
      width: "w-[49%]",
      type: "file",
    },
  ];

  const handleChange = (e, profession) => {
    const { name, value, files } = e.target;
    const setValues = profession === "Development" ? setDevValues : setDesignValues;
    
    if (files) {
      const file = files[0] || "";
      const reader = new FileReader();
      reader.onloadend = () => {
        setValues((prev) => ({
          ...prev,
          icon: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleClick = (e, profession) => {
    e.preventDefault();
    
    const newItem = {
      id: Date.now(),
      technology: profession === "Development" ? devValues.technology : designValues.technology,
      icon: profession === "Development" ? devValues.icon : designValues.icon,
      profession,
    };

    if (profession === "Development") {
      setDevStack((prev) => [...prev, newItem]);
      setDevValues({ technology: "", icon: null });
    } else {
      setDesignStack((prev) => [...prev, newItem]);
      setDesignValues({ technology: "", icon: null });
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
    <div className="flex flex-col w-full gap-10 px-40 py-20">
      <FormStack
        formKey={`dev-${propsKey}`}
        values={devValues}
        fields={fields}
        handleRemove={handleRemove}
        handleClick={handleClick}
        stack={devStack}
        profession="Development"
        label="For Development"
        handleChange={(e) => handleChange(e, "Development")}
      />
      <FormStack
        formKey={`design-${propsKey}`}
        values={designValues}
        fields={fields}
        handleRemove={handleRemove}
        handleClick={handleClick}
        stack={designStack}
        profession="Design"
        label="For Design"
        handleChange={(e) => handleChange(e, "Design")}
      />
      <div className="flex justify-center gap-10 mt-10">
        <button className="bg-mandarine px-10 py-1 font-bold rounded-full white">Save Changes</button>
      </div>
    </div>
  );
}
