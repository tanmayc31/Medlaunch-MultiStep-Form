import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 data
    legalEntityName: '',
    doingBusinessAs: '',
    sameAsLegalEntity: false,
    firstName: '',
    lastName: '',
    title: '',
    workPhone: '',
    cellPhone: '',
    email: '',
    
    // Step 2 data
    facilityType: '',
  });

  const updateFormData = (newData) => {
    setFormData(prev => ({
      ...prev,
      ...newData
    }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <FormContext.Provider value={{
      currentStep,
      formData,
      updateFormData,
      nextStep,
      previousStep,
      goToStep
    }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within FormProvider');
  }
  return context;
}