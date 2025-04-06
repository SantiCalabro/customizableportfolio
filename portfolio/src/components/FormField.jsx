  export default function FormField({
    label,
    placeholder,
    id,
    width,
    styles,
    type,
    fieldType,
    name,
    value,
    error,
    touched,
    onChange,
    onBlur}) {
      return (
        <div className={`flex flex-col ${width} ${styles}`}>
          <label htmlFor={name} className="white mb-1">{label}</label>
          {fieldType === 'textarea' ? (
            <textarea
              name={name}
              id={id}
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              className="focus:outline-none white p-3 text-sm border-primary-gray rounded-xl bg-gray-opacity w-full min-h-[120px]"
            />
          ) : (
            <input
              type={type || 'text'}
              accept={type === "file" ? "image/*" : ""}
              name={name}
              id={id}
              {...(type !== 'file' ? { value } : {})}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              className="text-sm px-3 focus:outline-none white border-primary-gray h-8 rounded-md bg-gray-opacity w-full"
            />
          )}
          {error && touched && (
            <p className="poppins text-xs mt-1 text-red-500">{error}</p>
          )}
        </div>
      ) 
  }