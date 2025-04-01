export default function FormField({label, fieldType, id, value, width, styles, placeholder, handleChange, handleBlur, errors, touched, type, name}) {

  return (
    <div className={`flex flex-col ${width && width} ${styles && styles}`}>
        <label htmlFor={id} className="white mb-1">{label}</label>
        {fieldType === 'textarea' ?  <textarea onChange={handleChange} onBlur={handleBlur} name={name} id={id} placeholder={placeholder && placeholder}  className="focus:outline-none white p-3 text-sm border-primary-gray rounded-xl bg-gray-opacity w-full min-h-[120px]">{value && value}</textarea> : 
        <input  onChange={handleChange} onBlur={handleBlur} type={type} name={name} id={id} placeholder={placeholder && placeholder} value={value} className="text-sm px-3 focus:outline-none white border-primary-gray w-[100px] h-8 rounded-md bg-gray-opacity w-full"/> }
        
    {errors && touched && (
                  <p className="poppins text-xs mt-1 text-red-500">
                    {errors}
                  </p>
                )}
    </div>
  )
}