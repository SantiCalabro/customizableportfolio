import FormField from './FormField';
import cross from "../assets/exit-white.svg";
import { useState, useEffect, useRef } from 'react';

export default function UpdateForm({ handleUpdate, showUpdateForm, fields, values, errors, touched, saveItem }) {
  const [formValues, setFormValues] = useState(showUpdateForm);
  const fileInputRef = useRef(null);
  const multimediaInputRefs = useRef([]);

  useEffect(() => {
    setFormValues(showUpdateForm);
  }, [showUpdateForm]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveItem(formValues, formValues.id);
    handleUpdate('');
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'file' && files?.[0]) {
      const newFileUrl = URL.createObjectURL(files[0]);
      setFormValues(prev => ({ ...prev, file: newFileUrl }));
    } else if (name.startsWith('multimedia-') && files?.[0]) {
      const index = parseInt(name.split('-')[1]);
      const newMultimedia = [...(formValues.multimedia || values.multimedia || [])];
      newMultimedia[index] = URL.createObjectURL(files[0]);
      setFormValues(prev => ({ ...prev, multimedia: newMultimedia }));
    } else {
      setFormValues(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDeleteMultimedia = (index) => {
    const newMultimedia = [...(formValues.multimedia || values.multimedia || [])];
    newMultimedia.splice(index, 1);
    setFormValues(prev => ({ ...prev, multimedia: newMultimedia }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-primary-gray py-10 px-10 rounded-xl border-t-[25px] border-t-mandarine w-2/6 relative max-h-[700px] overflow-y-scroll">
        <div className="header">
          <h4 className="white text-2xl font-bold">
            {formValues?.company}{formValues?.degree}{formValues?.projectName}
          </h4>
          <p className="white font-light text-xs">
            For {formValues?.position}{formValues?.institution}{formValues?.client}
          </p>
        </div>
        <img src={cross} alt="exit" className="absolute right-5 top-5 cursor-pointer" onClick={() => handleUpdate('')} />
        <div className="form mt-4">
          <form className="flex flex-col" onSubmit={handleFormSubmit}>
            <div className="flex flex-col w-full border-primary-gray border-t-0 rounded-2xl pt-5 pb-10">
              <div className="flex flex-wrap">
                {fields && fields.slice(0, 4).map((field, id) => (
                  <FormField
                    key={id}
                    {...field}
                    value={formValues[field.name] || values[field.name] || ""}
                    name={field.name}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>
              <div className="flex flex-wrap justify-between">

                {fields && fields.slice(4).map((field, id) => {
                  if (field.name === 'file') {
                    return (
                      <div key={id} className="m-2 relative cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                        <img
                          src={formValues.file || values.file}
                          alt="uploaded file"
                          className="w-[100px] h-[100px] object-cover"
                        />
                        <input
                          ref={fileInputRef}
                          type="file"
                          name="file"
                          accept="image/*"
                          onChange={handleChange}
                          className="hidden"
                        />
                      </div>
                    );
                  } else if (field.name === "multimedia") {
                    const multimedia = formValues.multimedia || values.multimedia || [];
                    return (
                      <div key={id} className="flex flex-wrap gap-2">
                        {multimedia.map((el, i) => (
                          <div key={i} className="relative w-[100px] h-[100px] group">
                            <img
                              src={el}
                              alt={`multimedia-${i}`}
                              className="w-full h-full object-cover cursor-pointer"
                              onClick={() => multimediaInputRefs.current[i]?.click()}
                            />
                            <input
                              type="file"
                              accept="image/*"
                              name={`multimedia-${i}`}
                              className="hidden"
                              ref={el => (multimediaInputRefs.current[i] = el)}
                              onChange={handleChange}
                            />
                            <button
                              type="button"
                              className="absolute top-1 right-1 bg-black bg-opacity-60 text-white w-5 h-5 rounded-full text-xs hidden group-hover:flex items-center justify-center"
                              onClick={() => handleDeleteMultimedia(i)}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  } else {
                    return (
                      <FormField
                        key={id}
                        {...field}
                        value={formValues[field.name] || values[field.name] || ""}
                        name={field.name}
                        error={errors[field.name]}
                        touched={touched[field.name]}
                        onChange={handleChange}
                      />
                    );
                  }
                })}
              </div>
              <div className="flex justify-center gap-10 mt-6">
                <button type="submit" className="px-10 py-1 rounded-full bg-mandarine white font-bold">
                  Save Changes
                </button>
                <button type="button" className="border-mandarine px-10 py-1 rounded-full mandarine font-bold" onClick={() => handleUpdate('')}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
