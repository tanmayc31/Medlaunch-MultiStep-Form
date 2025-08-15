import React from 'react';
import styles from './Step1.module.css';
import Navigation from '../../common/Navigation/Navigation';
import { useForm } from '../../../contexts/FormContext';
import { useForm as useReactHookForm } from 'react-hook-form';

const Step1 = () => {
    const { formData, updateFormData, nextStep } = useForm();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues
    } = useReactHookForm({
        defaultValues: formData
    });

    const onSubmit = (data) => {
        updateFormData(data);
        nextStep();
    };

    const onError = (errors) => {
        console.log('Validation errors:', errors);
        // Form won't submit if there are errors
    };

    const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
};

    return (
        <div className={styles.step}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Organization Section */}
                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>Identify Healthcare Organization</h3>
                        <h6 className={styles.littleGap}>t</h6>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Legal Entity Name <span className={styles.required}>*</span></label>
                            <input
    {...register('legalEntityName', { required: 'Legal Entity Name is required' })}
    type="text"
    className={`${styles.input} ${errors.legalEntityName ? styles.error : ''}`}
/>
                            {errors.legalEntityName && (
                                <span className={styles.errorText}>{errors.legalEntityName.message}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Doing Business As (d/b/a) Name <span className={styles.required}>*</span></label>
                            <input
    {...register('doingBusinessAs', { required: 'Doing Business As Name is required' })}
    type="text"
    className={`${styles.input} ${errors.doingBusinessAs ? styles.error : ''}`}
    disabled={getValues('sameAsLegalEntity')}
/>
                        </div>

                        <div className={styles.checkbox}>
                           <input
    type="checkbox"
    id="sameAsLegal"
    checked={formData.sameAsLegalEntity}
    onChange={(e) => {
        const checked = e.target.checked;
        setValue('sameAsLegalEntity', checked);  // Use setValue for React Hook Form
        
        if (checked) {
            const legalName = getValues('legalEntityName');
            setValue('doingBusinessAs', legalName);
        } else {
            setValue('doingBusinessAs', '');
        }
    }}
/>
                            <label htmlFor="sameAsLegal">Same as Legal Entity Name</label>
                        </div>

                        <div className={styles.sectionGap}></div>

                        {/* Primary Contact Section */}
                        <h3 className={styles.sectionTitle}>Primary Contact Information</h3>
                        <p className={styles.sectionSubtitle}>Primary contact receives all DNV Healthcare official communications</p>

                        {/* First row: First Name, Last Name */}
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name <span className={styles.required}>*</span></label>
                                <input
                                    {...register('firstName', { required: 'First Name is required' })}
                                    type="text"
                                    className={`${styles.input} ${errors.firstName ? styles.error : ''}`}
                                />
                                {errors.firstName && (
                                    <span className={styles.errorText}>{errors.firstName.message}</span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name <span className={styles.required}>*</span></label>
                                <input
                                    {...register('lastName', { required: 'Last Name is required' })}
                                    type="text"
                                    className={`${styles.input} ${errors.lastName ? styles.error : ''}`}
                                />
                                {errors.lastName && (
                                    <span className={styles.errorText}>{errors.lastName.message}</span>
                                )}
                            </div>
                        </div>

                        {/* Title */}
                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                Title <span className={styles.required}>*</span>
                            </label>
                            <input
                                {...register('title', { required: 'Title is required' })}
                                type="text"
                                className={`${styles.input} ${errors.title ? styles.error : ''}`}
                            />
                            {errors.title && (
                                <span className={styles.errorText}>{errors.title.message}</span>
                            )}
                        </div>

                        {/* Phone row: Work Phone, Cell Phone */}
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Work Phone <span className={styles.required}>*</span></label>
                                <input
                                    {...register('workPhone', {
                                        required: 'Work Phone is required',
                                        pattern: {
                                            // value: /^[\+]?[1-9]?[\d\s\-\(\)]{10,}$/,
                                            message: 'Please enter a valid phone number'
                                        }
                                    })}
                                    type="tel"
                                    className={`${styles.input} ${errors.workPhone ? styles.error : ''}`}
                                />
                                {errors.workPhone && (
                                    <span className={styles.errorText}>{errors.workPhone.message}</span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Cell Phone</label>
                                <input
                                    type="tel"
                                    className={styles.input}
                                    value={formData.cellPhone}
                                    onChange={(e) => handleInputChange('cellPhone', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email <span className={styles.required}>*</span></label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        // value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Please enter a valid email address'
                                    }
                                })}
                                type="email"
                                className={`${styles.input} ${errors.email ? styles.error : ''}`}
                            />
                            {errors.email && (
                                <span className={styles.errorText}>{errors.email.message}</span>
                            )}
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <button type="button" className={styles.verifyButton}>
                                    Send Verification Email
                                </button>
                            </div>
                            <div className={styles.formGroup}>
                                <span className={styles.notVerified}>Not verified</span>
                            </div>
                        </div>
                    </section>

                    <Navigation
                        showPrevious={false}
                        buttonText="Continue"
                        onSave={() => alert('Progress saved!')}
                        onContinue={() => handleSubmit(onSubmit)()}
                    />
                </form>
            </div>
        </div>
    );
};

export default Step1;