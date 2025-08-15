import React from 'react';
import styles from './Step3.module.css';
import Navigation from '../../common/Navigation/Navigation';
import { useForm } from '../../../contexts/FormContext';
import { useForm as useReactHookForm } from 'react-hook-form';


const Step3 = () => {
    const { formData, updateFormData, nextStep, previousStep } = useForm();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        watch
    } = useReactHookForm({
        defaultValues: formData
    });

    const onSubmit = (data) => {
        updateFormData(data);
        nextStep();
    };

    const ceoSameAsPrimary = watch('ceoSameAsPrimary');
    const qualitySameAsPrimary = watch('qualitySameAsPrimary');
    const invoicingSameAsPrimary = watch('invoicingSameAsPrimary');

    const handleInputChange = (field, value) => {
        updateFormData({ [field]: value });
    };

    const handleCheckboxChange = (field, checked) => {
        updateFormData({ [field]: checked });
    };

    const handleContactChange = (contactType, field, value) => {
        updateFormData({
            [`${contactType}Contact`]: {
                ...formData[`${contactType}Contact`],
                [field]: value
            }
        });
    };

    const handleContactCheckbox = (contactType, checked) => {
        if (checked) {
            // Copy primary contact data
            updateFormData({
                [`${contactType}Contact`]: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.workPhone,
                    email: formData.email,
                    sameAsPrimary: true
                }
            });
        } else {
            // Clear contact data
            updateFormData({
                [`${contactType}Contact`]: {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    sameAsPrimary: false
                }
            });
        }
    };

    return (
        <div className={styles.step}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>Contact Information</h3>

                        {/* CEO Contact */}
                        {/* CEO Contact */}
                        <div className={styles.contactSection}>
                            <h4 className={styles.contactTitle}>Chief Executive Officer (CEO)</h4>

                            <div className={styles.checkbox}>
                                <input
                                    {...register('ceoSameAsPrimary')}
                                    type="checkbox"
                                    id="ceoSameAsPrimary"
                                    onChange={(e) => {
                                        setValue('ceoSameAsPrimary', e.target.checked);
                                        if (e.target.checked) {
                                            // Auto-fill with primary contact data
                                            setValue('ceoFirstName', getValues('firstName'));
                                            setValue('ceoLastName', getValues('lastName'));
                                            setValue('ceoPhone', getValues('workPhone'));
                                            setValue('ceoEmail', getValues('email'));
                                        }
                                    }}
                                />
                                <label htmlFor="ceoSameAsPrimary">Same as Primary Contact entered in Step 1</label>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        First Name <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        {...register('ceoFirstName', { required: 'CEO First Name is required' })}
                                        type="text"
                                        className={`${styles.input} ${errors.ceoFirstName ? styles.error : ''}`}
                                        disabled={ceoSameAsPrimary}
                                    />
                                    {errors.ceoFirstName && (
                                        <span className={styles.errorText}>{errors.ceoFirstName.message}</span>
                                    )}
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        Last Name <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        {...register('ceoLastName', { required: 'CEO Last Name is required' })}
                                        type="text"
                                        className={`${styles.input} ${errors.ceoLastName ? styles.error : ''}`}
                                        disabled={ceoSameAsPrimary}
                                    />
                                    {errors.ceoLastName && (
                                        <span className={styles.errorText}>{errors.ceoLastName.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    Phone <span className={styles.required}>*</span>
                                </label>
                                <input
                                    {...register('ceoPhone', {
                                        required: 'CEO Phone is required',
                                        pattern: {
                                            value: /^[\+]?[1-9]?[\d\s\-\(\)]{10,}$/,
                                            message: 'Please enter a valid phone number'
                                        }
                                    })}
                                    type="tel"
                                    className={`${styles.input} ${errors.ceoPhone ? styles.error : ''}`}
                                    disabled={ceoSameAsPrimary}
                                />
                                {errors.ceoPhone && (
                                    <span className={styles.errorText}>{errors.ceoPhone.message}</span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    Email <span className={styles.required}>*</span>
                                </label>
                                <input
                                    {...register('ceoEmail', {
                                        required: 'CEO Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Please enter a valid email address'
                                        }
                                    })}
                                    type="email"
                                    className={`${styles.input} ${errors.ceoEmail ? styles.error : ''}`}
                                    disabled={ceoSameAsPrimary}
                                />
                                {errors.ceoEmail && (
                                    <span className={styles.errorText}>{errors.ceoEmail.message}</span>
                                )}
                            </div>
                        </div>



                        {/* Director of Quality */}
                        <div className={styles.contactSection}>
                            <h4 className={styles.contactTitle}>Director of Quality</h4>

                            <div className={styles.checkbox}>
                                <input
                                    {...register('qualitySameAsPrimary')}
                                    type="checkbox"
                                    id="qualitySameAsPrimary"
                                    onChange={(e) => {
                                        setValue('qualitySameAsPrimary', e.target.checked);
                                        if (e.target.checked) {
                                            setValue('qualityFirstName', getValues('firstName'));
                                            setValue('qualityLastName', getValues('lastName'));
                                            setValue('qualityPhone', getValues('workPhone'));
                                            setValue('qualityEmail', getValues('email'));
                                        }
                                    }}
                                />
                                <label htmlFor="qualitySameAsPrimary">Same as Primary Contact entered in Step 1</label>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>First Name</label>
                                    <input
                                        {...register('qualityFirstName')}
                                        type="text"
                                        className={`${styles.input} ${errors.qualityFirstName ? styles.error : ''}`}
                                        disabled={qualitySameAsPrimary}
                                    />
                                    {errors.qualityFirstName && (
                                        <span className={styles.errorText}>{errors.qualityFirstName.message}</span>
                                    )}
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Last Name</label>
                                    <input
                                        {...register('qualityLastName')}
                                        type="text"
                                        className={`${styles.input} ${errors.qualityLastName ? styles.error : ''}`}
                                        disabled={qualitySameAsPrimary}
                                    />
                                    {errors.qualityLastName && (
                                        <span className={styles.errorText}>{errors.qualityLastName.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Phone</label>
                                <input
                                    {...register('qualityPhone')}
                                    type="tel"
                                    className={`${styles.input} ${errors.qualityPhone ? styles.error : ''}`}
                                    disabled={qualitySameAsPrimary}
                                />
                                {errors.qualityPhone && (
                                    <span className={styles.errorText}>{errors.qualityPhone.message}</span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email</label>
                                <input
                                    {...register('qualityEmail')}
                                    type="email"
                                    className={`${styles.input} ${errors.qualityEmail ? styles.error : ''}`}
                                    disabled={qualitySameAsPrimary}
                                />
                                {errors.qualityEmail && (
                                    <span className={styles.errorText}>{errors.qualityEmail.message}</span>
                                )}
                            </div>
                        </div>


                        {/* Invoicing Contact */}
                        <div className={styles.contactSection}>
                            <h4 className={styles.contactTitle}>Invoicing Contact</h4>

                            <div className={styles.checkbox}>
                                <input
                                    {...register('invoicingSameAsPrimary')}
                                    type="checkbox"
                                    id="invoicingSameAsPrimary"
                                    onChange={(e) => {
                                        setValue('invoicingSameAsPrimary', e.target.checked);
                                        if (e.target.checked) {
                                            setValue('invoicingFirstName', getValues('firstName'));
                                            setValue('invoicingLastName', getValues('lastName'));
                                            setValue('invoicingPhone', getValues('workPhone'));
                                            setValue('invoicingEmail', getValues('email'));
                                        }
                                    }}
                                />
                                <label htmlFor="invoicingSameAsPrimary">Same as Primary Contact entered in Step 1</label>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        First Name <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        {...register('invoicingFirstName', { required: 'Invoicing First Name is required' })}
                                        type="text"
                                        className={`${styles.input} ${errors.invoicingFirstName ? styles.error : ''}`}
                                        disabled={invoicingSameAsPrimary}
                                    />
                                    {errors.invoicingFirstName && (
                                        <span className={styles.errorText}>{errors.invoicingFirstName.message}</span>
                                    )}
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        Last Name <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        {...register('invoicingLastName', { required: 'Invoicing Last Name is required' })}
                                        type="text"
                                        className={`${styles.input} ${errors.invoicingLastName ? styles.error : ''}`}
                                        disabled={invoicingSameAsPrimary}
                                    />
                                    {errors.invoicingLastName && (
                                        <span className={styles.errorText}>{errors.invoicingLastName.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    Phone <span className={styles.required}>*</span>
                                </label>
                                <input
                                    {...register('invoicingPhone', {
                                        required: 'Invoicing Phone is required',
                                        pattern: {
                                            value: /^[\+]?[1-9]?[\d\s\-\(\)]{10,}$/,
                                            message: 'Please enter a valid phone number'
                                        }
                                    })}
                                    type="tel"
                                    className={`${styles.input} ${errors.invoicingPhone ? styles.error : ''}`}
                                    disabled={invoicingSameAsPrimary}
                                />
                                {errors.invoicingPhone && (
                                    <span className={styles.errorText}>{errors.invoicingPhone.message}</span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    Email <span className={styles.required}>*</span>
                                </label>
                                <input
                                    {...register('invoicingEmail', {
                                        required: 'Invoicing Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Please enter a valid email address'
                                        }
                                    })}
                                    type="email"
                                    className={`${styles.input} ${errors.invoicingEmail ? styles.error : ''}`}
                                    disabled={invoicingSameAsPrimary}
                                />
                                {errors.invoicingEmail && (
                                    <span className={styles.errorText}>{errors.invoicingEmail.message}</span>
                                )}
                            </div>
                        </div>

                        {/* Billing Address */}
                        <div className={styles.contactSection}>
                            <h4 className={styles.contactTitle}>Billing Address</h4>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    Street Address <span className={styles.required}>*</span>
                                </label>
                                <input
                                    {...register('streetAddress', { required: 'Street Address is required' })}
                                    type="text"
                                    className={`${styles.input} ${errors.streetAddress ? styles.error : ''}`}
                                />
                                {errors.streetAddress && (
                                    <span className={styles.errorText}>{errors.streetAddress.message}</span>
                                )}
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        City <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        {...register('city', { required: 'City is required' })}
                                        type="text"
                                        className={`${styles.input} ${errors.city ? styles.error : ''}`}
                                    />
                                    {errors.city && (
                                        <span className={styles.errorText}>{errors.city.message}</span>
                                    )}
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        State <span className={styles.required}>*</span>
                                    </label>
                                    <select
                                        {...register('state', { required: 'Please select a state' })}
                                        className={`${styles.select} ${errors.state ? styles.error : ''}`}
                                    >
                                        <option value="">Select State</option>
                                        <option value="AL">Alabama</option>
                                        <option value="CA">California</option>
                                        <option value="FL">Florida</option>
                                        <option value="NY">New York</option>
                                        <option value="TX">Texas</option>
                                    </select>
                                    {errors.state && (
                                        <span className={styles.errorText}>{errors.state.message}</span>
                                    )}
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        ZIP Code <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        {...register('zipCode', {
                                            required: 'ZIP Code is required',
                                            pattern: {
                                                value: /^\d{5}(-\d{4})?$/,
                                                message: 'Please enter a valid ZIP code'
                                            }
                                        })}
                                        type="text"
                                        className={`${styles.input} ${errors.zipCode ? styles.error : ''}`}
                                    />
                                    {errors.zipCode && (
                                        <span className={styles.errorText}>{errors.zipCode.message}</span>
                                    )}
                                </div>
                            </div>
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

export default Step3;