import React from 'react';
import { FormProvider } from './contexts/FormContext';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';

function App() {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
}

export default App;