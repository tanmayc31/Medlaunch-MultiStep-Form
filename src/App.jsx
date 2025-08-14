import React from 'react';
import { FormProvider } from './contexts/FormContext';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import Step5 from './components/Steps/Step5/Step5';

function App() {
  return (
    <FormProvider>
      <Step5 />
      <MultiStepForm />
    </FormProvider>
  );
}

export default App;