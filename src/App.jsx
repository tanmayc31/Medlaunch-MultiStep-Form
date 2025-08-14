import React from 'react';
import { FormProvider } from './contexts/FormContext';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
// import Step5 from './components/Steps/Step5/Step5';
// import Step6 from './components/Steps/Step6/Step6';


function App() {
  return (
    <FormProvider>
      {/* <Step6 /> */}
      <MultiStepForm />
    </FormProvider>
  );
}

export default App;