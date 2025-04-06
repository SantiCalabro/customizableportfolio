import { useState } from 'react';

export function useForm(initialValues, validations) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });

    if (touched[name]) {
      validateField(name, value);
    }
    console.log(values)
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    validateField(name, values[name]);
    console.log(name)
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
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  };
}