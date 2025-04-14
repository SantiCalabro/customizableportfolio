  import FileUploader from "./FileUploader"
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
          ) : type != 'file' ? (
            <input
              type={type || 'text'}
              accept="image/*,application/pdf,.doc,.docx"
              name={name}
              id={id}
              {...(type !== 'file' ? { value } : {})}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              className={`text-sm px-3 py-[0.4rem] bg-gray-opacity white rounded-md border border-primary-gray w-full file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-bold file:bg-mandarine file:text-black hover:file:bg-opacity-90 cursor-pointer
              `}
            />
          ): (
            <FileUploader id={id} name={name} onChange={onChange} width={width}/>
          )}
          {error && touched && (
            <p className="poppins text-xs mt-1 text-red-500">{error}</p>
          )}
        </div>
      ) 
  }