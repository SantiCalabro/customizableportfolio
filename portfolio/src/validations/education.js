export const educationValidation = (values) => {
    const errors = {};
  
    if (!values.startingDate) errors.startingDate = 'Fecha requerida';
    if (!values.location) errors.location = 'Ubicación requerida';
    if (!values.description) errors.description = 'Descripción requerida';
    if (!values.degree) errors.degree = 'Debes ingresar el título';
    if (!values.institution) errors.institution = 'Debes ingresar la universidad';
    return errors;
  };

  export const initialEducationValues = {
    degree: '',
    institution: '',
    startingDate: '',
    finishingDate: '',
    location: '',
    certificate: ''
  };
