import React from 'react';
import styles from './Step2.module.css';
import Navigation from '../../common/Navigation/Navigation';

import { useForm } from '../../../contexts/FormContext';
import { useForm as useReactHookForm } from 'react-hook-form';

const Step2 = () => {

  const { formData, updateFormData, nextStep, previousStep } = useForm();
const {
        register,
        handleSubmit,
        formState: { errors }
    } = useReactHookForm({
        defaultValues: formData
    });

    const onSubmit = (data) => {
        updateFormData(data);
        nextStep();
    };
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
<form onSubmit={handleSubmit(onSubmit)}>
        {/* Facility Type Section */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Facility and Organization Type</h3>

          <div className={styles.formGroup}>
            <label className={styles.fieldLabel}>
    Facility Type <span className={styles.required}>*</span>
</label>

           <div className={styles.radioGroup}>
    {facilityTypes.map((type, index) => (
        <div key={index} className={styles.radioOption}>
            <input
                {...register('facilityType', { required: 'Please select a facility type' })}
                type="radio"
                id={`facility-${index}`}
                value={type}
                className={styles.radioInput}
            />
            <label htmlFor={`facility-${index}`} className={styles.radioLabel}>
                {type}
            </label>
        </div>
    ))}
</div>
{errors.facilityType && (
    <span className={styles.errorText}>{errors.facilityType.message}</span>
)}
          </div>
        </section>

       <Navigation
        showPrevious={true}
        buttonText="Continue"
        onPrevious={() => previousStep()}
        onSave={() => alert('Progress saved!')}
        onContinue={() => handleSubmit(onSubmit)()}
    />
</form>
      </div>
    </div>
  );
};

export default Step2;