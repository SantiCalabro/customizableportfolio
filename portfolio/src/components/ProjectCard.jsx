import editPen from '../assets/edit-pen-black.svg'
import blackCross from '../assets/black-cross.svg'
export default function ProjectCard({ img, alt, title, description, type, handleUpdate }) {
    return (
      <div className="border-primary-gray flex relative rounded-lg overflow-hidden">
        <div className="commands absolute right-0 top-0 flex bg-mandarine w-fit gap-3 p-2 rounded-tr-md rounded-bl-md">
                <img onClick={()=>handleUpdate(true)} src={editPen} alt="edit" className="cursor-pointer pr-2 border-r border-black"/>
                <img src={blackCross} alt="delete" className="cursor-pointer"/>
            </div>
        <div className="w-1/3 flex items-center justify-center overflow-hidden">
          <img src={img} alt={alt} />
        </div>
        <div className="w-2/3 flex flex-col p-5">
          <label className="w-fit bg-mandarine px-3 py-1 rounded white font-bold text-sm">{type.toUpperCase()}</label>
          <h4 className=" mt-4 white font-bold text-2xl w-1/2">{title}</h4>
          <p className="text-sm mt-2 white font-light">{description}</p>
        </div>
      </div>
    );
  }