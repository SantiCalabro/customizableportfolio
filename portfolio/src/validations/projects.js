export const projectValidation = (values) => {
    const errors = {};
  
    if (!values.projectName) errors.projectName = 'Debes ingresar el puesto';
    if (!values.client) errors.client = 'Debes ingresar la empresa';
    if (!values.projectType) errors.projectType = 'Fecha requerida';
    if (!values.file) errors.file = 'Ubicación requerida';
    if (!values.multimedia) errors.multimedia = 'Ubicación requerida';
    if (!values.description) errors.description = 'Descripción requerida';
    return errors;
  };
  
  export const initialProjectValues = {
    projectName: '',
    client: '',
    projectType: '',
    file: '',
    multimedia:'',
    description: ''
  };
