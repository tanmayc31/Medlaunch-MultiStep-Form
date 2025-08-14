import React from 'react';
import styles from './MultiStepForm.module.css';
import { useForm } from '../../contexts/FormContext';

//Import all common components
import HeaderWithUser from '../common/Header/HeaderWithUser';
import HeaderWithoutUser from '../common/Header/HeaderWithoutUser';
import ProgressBar from '../common/ProgressBar/ProgressBar';
import SupportChat from '../common/SupportChat/SupportChat';

// Import all step components
import Step1 from '../Steps/Step1/Step1';
import Step2 from '../Steps/Step2/Step2';
import Step2IfYes from '../Steps/Step2/Step2IfYes';
import Step3 from '../Steps/Step3/Step3';
import Step4 from '../Steps/Step4/Step4';
import Step5 from '../Steps/Step5/Step5';
import Step6 from '../Steps/Step6/Step6';





const MultiStepForm = () => {
  const { currentStep, formData, showStep2IfYes } = useForm();

  // which header to show
  const renderHeader = () => {
    if (currentStep === 1) {
      return <HeaderWithUser />;
    } else {
      return <HeaderWithoutUser />;
    }
  };

  // Determine which step to show
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        // For now, let's use regular Step2
        // Later we'll add logic for "If Yes" version
        return showStep2IfYes() ? <Step2IfYes /> : <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className={styles.container}>
      {renderHeader()}
      <ProgressBar currentStep={currentStep} />
      {renderStep()}
      <SupportChat />
    </div>
  );
};

export default MultiStepForm;