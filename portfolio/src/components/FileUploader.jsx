import { useRef, useState } from 'react'

export default function FileUploader({ id, name, onChange, width, styles, onBlur }) {
  const fileInputRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [fileName, setFileName] = useState(null)

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    setFileName(file.name)
    if (onChange) onChange({ target: { name, files: [file] } })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFileName(file?.name || null)
    if (onChange) onChange(e)
  }

  return (
    <>
    <div
      onClick={() => fileInputRef.current.click()}
      onDragOver={(e) => {
        e.preventDefault()
        setDragging(true)
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`${width} ${styles} w-full p-3 text-center border rounded-md cursor-pointer flex items-center justify-center transition-all
        ${dragging ? 'border-mandarine bg-opacity-20' : 'border-primary-gray bg-gray-opacity'}
      `}
    >
      <input
        ref={fileInputRef}
        id={id}
        name={name}
        type="file"
        accept="image/*,application/pdf,.doc,.docx"
        className="hidden"
        onChange={handleFileChange}
        onBlur={onBlur}
      />

      <p className="white font-semibold text-sm">
        {fileName
          ? `Selected: ${fileName}`
          : 'Click or drag and drop a file here (PDF, DOC, or image)'}
      </p>
    </div>
    {!fileName && (
            <p className="poppins text-xs mt-1 text-red-500">You must choose an icon</p>
    )}
    </>
  )
}
