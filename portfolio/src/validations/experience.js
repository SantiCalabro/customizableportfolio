export const experienceValidation = (values) => {
    const errors = {};
  
    if (!values.position) errors.position = 'Debes ingresar el puesto';
    if (!values.company) errors.company = 'Debes ingresar la empresa';
    if (!values.startingDate) errors.startingDate = 'Fecha requerida';
    if (!values.location) errors.location = 'Ubicación requerida';
    if (!values.description) errors.description = 'Descripción requerida';
    return errors;
  };
  
  export const initialExperienceValues = {
    position: '',
    company: '',
    startingDate: '',
    finishingDate: '',
    location: '',
    description: ''
  };

