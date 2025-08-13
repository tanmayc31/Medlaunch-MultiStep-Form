import React from 'react';
import styles from './Step2.module.css';
import Navigation from '../../common/Navigation/Navigation';

import { useForm } from '../../../contexts/FormContext';

const Step2 = () => {
  const { nextStep, previousStep } = useForm();

  const facilityTypes = [
    'Short-Term Acute Care',
    'Long-Term Acute Care', 
    'Critical Access',
    "Children's",
    'Free-Standing Psychiatric',
    'Other'
  ];

  return (
    <div className={styles.step}>
      <div className={styles.container}>
        
        {/* Facility Type Section */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Facility and Organization Type</h3>
          
          <div className={styles.formGroup}>
            <label className={styles.fieldLabel}>Facility Type *</label>
            
            <div className={styles.radioGroup}>
              {facilityTypes.map((type, index) => (
                <div key={index} className={styles.radioOption}>
                  <input 
                    type="radio" 
                    id={`facility-${index}`}
                    name="facilityType" 
                    value={type}
                    className={styles.radioInput}
                  />
                  <label 
                    htmlFor={`facility-${index}`} 
                    className={styles.radioLabel}
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Navigation 
        showPrevious={true}
        buttonText="Continue"
        onPrevious={() => previousStep()}  
        onSave={() => console.log('Save clicked')}
        onContinue={() => nextStep()}    
      />

      </div>
    </div>
  );
};

export default Step2;