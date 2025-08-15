import React from 'react';
import styles from './Step1.module.css';
import Navigation from '../../common/Navigation/Navigation';
import { useForm } from '../../../contexts/FormContext';

const Step1 = () => {
    const { formData, updateFormData, nextStep } = useForm();

    const handleInputChange = (field, value) => {
        updateFormData({ [field]: value });
    };

    const handleCheckboxChange = (field, checked) => {
        updateFormData({ [field]: checked });
    };

    return (
        <div className={styles.step}>
            <div className={styles.container}>

                {/* Organization Section */}
                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Identify Healthcare Organization</h3>
                    <h6 className={styles.littleGap}>t</h6>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Legal Entity Name *</label>
                        <input
                            type="text"
                            className={styles.input}
                            value={formData.legalEntityName}
                            onChange={(e) => handleInputChange('legalEntityName', e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Doing Business As (d/b/a) Name *</label>
                        <input
                            type="text"
                            className={styles.input}
                            value={formData.doingBusinessAs}
                            onChange={(e) => handleInputChange('doingBusinessAs', e.target.value)}
                        />
                    </div>

                    <div className={styles.checkbox}>
                        <input 
                            type="checkbox" 
                            id="sameAsLegal"
                            checked={formData.sameAsLegalEntity}
                            onChange={(e) => handleCheckboxChange('sameAsLegalEntity', e.target.checked)}
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
                            <label className={styles.label}>First Name *</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Last Name *</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Title *</label>
                        <input
                            type="text"
                            className={styles.input}
                            value={formData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                        />
                    </div>

                    {/* Phone row: Work Phone, Cell Phone */}
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Work Phone *</label>
                            <input
                                type="tel"
                                className={styles.input}
                                value={formData.workPhone}
                                onChange={(e) => handleInputChange('workPhone', e.target.value)}
                            />
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
                        <label className={styles.label}>Email *</label>
                        <input
                            type="email"
                            className={styles.input}
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                        />
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
                    onSave={() => 

  alert('Progress saved!')
}
                    onContinue={() => nextStep()}
                />
            </div>
        </div>
    );
};

export default Step1;