import React from 'react';
import { FormProvider } from './contexts/FormContext';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import Step4 from './components/Steps/Step4/Step4';

function App() {
  return (
    <FormProvider>
      {/* <Step4 /> */}
      <MultiStepForm />
    </FormProvider>
  );
}

export default App;