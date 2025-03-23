

export default function FormField({label, fieldType, id, placeholder, width, styles}) {
  return (
    <div className={`flex flex-col ${width && width} ${styles && styles}`}>
        <label htmlFor={id} className="white mb-1">{label}</label>
        {fieldType === 'textarea' ?  <textarea name={id} id={id} className="focus:outline-none white p-3 text-sm border-primary-gray rounded-xl bg-gray-opacity w-full min-h-[120px]"></textarea> : 
        <input type="text" name={id} id={id} placeholder={placeholder && placeholder} className="text-sm px-3 focus:outline-none white border-primary-gray w-[100px] h-8 rounded-md bg-gray-opacity w-full"/> }
    </div>
  )
}
