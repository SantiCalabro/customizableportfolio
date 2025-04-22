import { useState } from 'react';

export function useForm(initialValues, validations) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(e.target.name)
    if (files) {
    
       const reader = new FileReader();
       reader.onloadend = () => {
         setValues((prevProfile) => ({
           ...prevProfile,
           [e.target.name]: reader.result,
         }));
         console.log(values)
       };
       reader.readAsDataURL(files[0]);
    }else{
         setValues({
      ...values,
      [name]: value
    });
 console.log(values)
    }

    if (touched[name]) {
      validateField(name, value);
    }   

   
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    validateField(name, values[name]);
  };

  const validateField = (name, value) => {
    const newErrors = validations({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]: newErrors[name] || ''
    });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const newErrors = validations(values);
    setErrors(newErrors);
    
    const allTouched = {};
    Object.keys(values).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    if (Object.values(newErrors).every(error => !error)) {
        callback(values);
    }
    setValues(initialValues);
    setTouched({});

  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit, 

  };
}