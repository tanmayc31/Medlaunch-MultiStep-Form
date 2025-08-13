import React from 'react';
import styles from './Step3.module.css';
import Navigation from '../../common/Navigation/Navigation';
import { useForm } from '../../../contexts/FormContext';

const Step3 = () => {
    const { formData, updateFormData, nextStep, previousStep } = useForm();

    const handleInputChange = (field, value) => {
        updateFormData({ [field]: value });
    };

    const handleCheckboxChange = (field, checked) => {
        updateFormData({ [field]: checked });
    };

    return (
        <div className={styles.step}>
            <div className={styles.container}>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Contact Information</h3>

                    {/* CEO Contact */}
                    <div className={styles.contactSection}>
                        <h4 className={styles.contactTitle}>Chief Executive Officer (CEO)</h4>
                        
                        <div className={styles.checkbox}>
                            <input 
                                type="checkbox" 
                                id="ceoSameAsPrimary"
                            />
                            <label htmlFor="ceoSameAsPrimary">Same as Primary Contact entered in Step 1</label>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name *</label>
                                <input type="text" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name *</label>
                                <input type="text" className={styles.input} />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone *</label>
                            <input type="tel" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email *</label>
                            <input type="email" className={styles.input} />
                        </div>
                    </div>

                    {/* Director of Quality */}
                    <div className={styles.contactSection}>
                        <h4 className={styles.contactTitle}>Director of Quality</h4>
                        
                        <div className={styles.checkbox}>
                            <input 
                                type="checkbox" 
                                id="qualitySameAsPrimary"
                            />
                            <label htmlFor="qualitySameAsPrimary">Same as Primary Contact entered in Step 1</label>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name</label>
                                <input type="text" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name</label>
                                <input type="text" className={styles.input} />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone</label>
                            <input type="tel" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email</label>
                            <input type="email" className={styles.input} />
                        </div>
                    </div>

                    {/* Invoicing Contact */}
                    <div className={styles.contactSection}>
                        <h4 className={styles.contactTitle}>Invoicing Contact</h4>
                        
                        <div className={styles.checkbox}>
                            <input 
                                type="checkbox" 
                                id="invoicingSameAsPrimary"
                            />
                            <label htmlFor="invoicingSameAsPrimary">Same as Primary Contact entered in Step 1</label>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name *</label>
                                <input type="text" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name *</label>
                                <input type="text" className={styles.input} />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone *</label>
                            <input type="tel" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email *</label>
                            <input type="email" className={styles.input} />
                        </div>

                        <div className={styles.sectionGap}></div>
                    {/* </div>

                    {/* Billing Address }
                    <div className={styles.contactSection}> */}
                        <h4 className={styles.contactTitle}>Billing Address</h4>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Street Address *</label>
                            <input type="text" className={styles.input} />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>City *</label>
                                <input type="text" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>State *</label>
                                <select className={styles.select}>
                                    <option value="">Select State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="CA">California</option>
                                    <option value="FL">Florida</option>
                                    <option value="NY">New York</option>
                                    <option value="TX">Texas</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>ZIP Code *</label>
                                <input type="text" className={styles.input} />
                            </div>
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

export default Step3;