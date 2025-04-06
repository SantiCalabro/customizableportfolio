import experienceIcon from "../assets/experience-white.svg";
import FormField from "./FormField";
import plusIcon from "../assets/plus-icon.svg";
import Chip from "./Chip";
import CrossIcon from "../assets/orange-bg-cross.svg";

export default function FormStack({ label, handleChange, stack, handleClick, handleRemove, profession, fields, values }) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="pt-4 pb-8 px-10 rounded-t-2xl header flex bg-mandarine">
          <img src={experienceIcon} alt="Add A Professional Experience" />
          <h4 className="white font-bold ml-2">Add Technologies</h4>
        </div>
        <div className="mt-[-20px]">
          <form>
            <div className="flex flex-col border-primary-gray border-t-0 rounded-2xl pt-5 pb-10 px-10 bg-black">
              <h4 className="white font-bold text-2xl">{label}</h4>
              <div className="flex w-full border-b-primary-gray pb-5">
                <div className="flex gap-10 justify-between items-end pt-5">
                  {fields.map((field) => (
                    <FormField
                      key={field.name}
                      label={field.label}
                      value={values[field.name] || ""}
                      name={field.name}
                      placeholder={field.placeholder}
                      width={field.width}
                      type={field.type}
                      id={field.name}
                      onChange={handleChange}
                    />
                  ))}
                  <button
                    onClick={(e) => handleClick(e, profession)}
                    type="button"
                    className="bg-mandarine h-fit flex items-center justify-center rounded-full px-8 py-1 white font-bold"
                  >
                    <img className="mr-2" src={plusIcon} alt="Add" />
                    Add
                  </button>
                </div>
              </div>
              <div className="flex pt-5 gap-4">
                {stack.map((el) => (
                  <Chip
                    handleRemove={handleRemove}
                    key={el.id}
                    type="edit"
                    id={el.id}
                    profession={el.profession}
                    tech={el.technology}
                    alt={el.tech}
                    icon={CrossIcon}
                  />
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
