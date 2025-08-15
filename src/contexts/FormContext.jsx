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
  emailVerified: false,
    
    // Step 2 data
    facilityType: '',

// Step 3 data
    ceoContact: { 
    firstName: '', 
    lastName: '', 
    phone: '', 
    email: '', 
    sameAsPrimary: false 
  },
  qualityContact: { 
    firstName: '', 
    lastName: '', 
    phone: '', 
    email: '', 
    sameAsPrimary: false 
  },
  invoicingContact: { 
    firstName: '', 
    lastName: '', 
    phone: '', 
    email: '', 
    title: '', 
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    sameAsPrimary: false 
  },

  // Step 4 data
  locationType: '',
  uploadedFiles: [],
  
  // Step 5 data
  servicesData: {},
  selectedStandards: [],
  applicationDate: '',
  strokeCertificationExpiry: '',
  thrombolyticDates: [],
  thrombectomyDates: []
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

  const showStep2IfYes = () => {
  return formData.sameAsLegalEntity === true;
};

  return (
    <FormContext.Provider value={{
      currentStep,
      formData,
      updateFormData,
      nextStep,
      previousStep,
      goToStep,
      showStep2IfYes
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