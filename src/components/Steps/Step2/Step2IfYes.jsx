import React from 'react';
import styles from './Step2IfYes.module.css';
import Navigation from '../../common/Navigation/Navigation';

import { useForm } from '../../../contexts/FormContext';

const Step2IfYes = () => {

  const { nextStep, previousStep } = useForm();

  const facilityTypesIfYes = [
    'Same as Legal Entity Name',
    'Critical Access',
    "Children's",
    'Long-Term Acute Care (LTAC)',
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
              {facilityTypesIfYes.map((type, index) => (
                <div key={index} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`facility-if-yes-${index}`}
                    name="facilityTypeIfYes"
                    value={type}
                    className={styles.radioInput}
                  />
                  <label
                    htmlFor={`facility-if-yes-${index}`}
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
          onSave={() => alert('Progress saved!')}
          onContinue={() => nextStep()}
        />

      </div>
    </div>
  );
};

export default Step2IfYes;