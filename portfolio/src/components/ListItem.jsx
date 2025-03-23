import editPen from '../assets/edit-pen-black.svg'
import blackCross from '../assets/black-cross.svg'
export default function ListItem({title, date, role, description, handleUpdate}) {
  return (
    <div className="w-full border-primary-gray flex flex-col rounded-lg relative">
    <div className="commands absolute right-0 top-0 flex bg-mandarine w-fit gap-3 p-2 rounded-tr-md rounded-bl-md">
        <img onClick={()=>handleUpdate(true)} src={editPen} alt="edit" className="cursor-pointer pr-2 border-r border-black"/>
        <img src={blackCross} alt="delete" className="cursor-pointer"/>
    </div>
    <div className="information p-5 flex flex-col gap-4">
        <div className="flex flex-col">
            <h3 className="text-3xl mandarine font-bold">{title && title}</h3>
            <p className="white font-light text-sm">{date && date}</p>
        </div>
        <div className="flex flex-col">
            <span className="white font-bold mb-1 text-lg">{role && role}</span>
            <p className="white w-2/3 font-light">{description && description}</p>
        </div>
    </div>
</div>
  )
}
