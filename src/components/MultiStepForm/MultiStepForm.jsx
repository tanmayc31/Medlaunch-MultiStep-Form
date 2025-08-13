import React from 'react';
import { useForm } from '../../contexts/FormContext';
import HeaderWithUser from '../common/Header/HeaderWithUser';
import HeaderWithoutUser from '../common/Header/HeaderWithoutUser';
import ProgressBar from '../common/ProgressBar/ProgressBar';
import SupportChat from '../common/SupportChat/SupportChat';

// Import all step components
import Step1 from '../Steps/Step1/Step1';
import Step2 from '../Steps/Step2/Step2';
import Step2IfYes from '../Steps/Step2/Step2IfYes';

import styles from './MultiStepForm.module.css';

const MultiStepForm = () => {
  const { currentStep, formData } = useForm();

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
        return <Step2 />;
      case 3:
        return <div>Step 3 - Coming Soon</div>;
      case 4:
        return <div>Step 4 - Coming Soon</div>;
      case 5:
        return <div>Step 5 - Coming Soon</div>;
      case 6:
        return <div>Step 6 - Coming Soon</div>;
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