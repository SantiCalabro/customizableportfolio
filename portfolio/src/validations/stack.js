export const stackValidation = (values) => {
    const errors = {};
  
    if (!values.technology) errors.technology = 'You must type a technology';
    if (!values.file) errors.file = 'Each technology must have an icon';

    return errors;
  };

  export const initialStackValues = {
    technology: '',
    file: '', 
  };
