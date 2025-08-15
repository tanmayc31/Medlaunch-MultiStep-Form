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

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Contact Information</h3>

                    {/* CEO Contact */}
                    <div className={styles.contactSection}>
                        <h4 className={styles.contactTitle}>Chief Executive Officer (CEO)</h4>

                        <div className={styles.checkbox}>
                            <input
                                type="checkbox"
                                id="ceoSameAsPrimary"
                                checked={formData.ceoContact?.sameAsPrimary || false}
                                onChange={(e) => handleContactCheckbox('ceo', e.target.checked)}
                            />
                            <label htmlFor="ceoSameAsPrimary">Same as Primary Contact entered in Step 1</label>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name *</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={formData.ceoContact?.firstName || ''}
                                    onChange={(e) => handleContactChange('ceo', 'firstName', e.target.value)}
                                    disabled={formData.ceoContact?.sameAsPrimary}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name *</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={formData.ceoContact?.lastName || ''}
                                    onChange={(e) => handleContactChange('ceo', 'lastName', e.target.value)}
                                    disabled={formData.ceoContact?.sameAsPrimary}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone *</label>
                            <input
                                type="tel"
                                className={styles.input}
                                value={formData.ceoContact?.phone || ''}
                                onChange={(e) => handleContactChange('ceo', 'phone', e.target.value)}
                                disabled={formData.ceoContact?.sameAsPrimary}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email *</label>
                            <input
                                type="email"
                                className={styles.input}
                                value={formData.ceoContact?.email || ''}
                                onChange={(e) => handleContactChange('ceo', 'email', e.target.value)}
                                disabled={formData.ceoContact?.sameAsPrimary}
                            />
                        </div>
                    </div>


                    {/* Director of Quality */}
                    <div className={styles.contactSection}>
                        <h4 className={styles.contactTitle}>Director of Quality</h4>

                        <div className={styles.checkbox}>
                            <input
                                type="checkbox"
                                id="qualitySameAsPrimary"
                                checked={formData.qualityContact?.sameAsPrimary || false}
                                onChange={(e) => handleContactCheckbox('quality', e.target.checked)}
                            />
                            <label htmlFor="qualitySameAsPrimary">Same as Primary Contact entered in Step 1</label>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={formData.qualityContact?.firstName || ''}
                                    onChange={(e) => handleContactChange('quality', 'firstName', e.target.value)}
                                    disabled={formData.qualityContact?.sameAsPrimary}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={formData.qualityContact?.lastName || ''}
                                    onChange={(e) => handleContactChange('quality', 'lastName', e.target.value)}
                                    disabled={formData.qualityContact?.sameAsPrimary}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone</label>
                            <input
                                type="tel"
                                className={styles.input}
                                value={formData.qualityContact?.phone || ''}
                                onChange={(e) => handleContactChange('quality', 'phone', e.target.value)}
                                disabled={formData.qualityContact?.sameAsPrimary}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                className={styles.input}
                                value={formData.qualityContact?.email || ''}
                                onChange={(e) => handleContactChange('quality', 'email', e.target.value)}
                                disabled={formData.qualityContact?.sameAsPrimary}
                            />
                        </div>
                    </div>

                    {/* Invoicing Contact */}
                    <div className={styles.contactSection}>
                        <h4 className={styles.contactTitle}>Invoicing Contact</h4>

                        <div className={styles.checkbox}>
                            <input
                                type="checkbox"
                                id="invoicingSameAsPrimary"
                                checked={formData.invoicingContact?.sameAsPrimary || false}
                                onChange={(e) => handleContactCheckbox('invoicing', e.target.checked)}
                            />
                            <label htmlFor="invoicingSameAsPrimary">Same as Primary Contact entered in Step 1</label>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name *</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={formData.invoicingContact?.firstName || ''}
                                    onChange={(e) => handleContactChange('invoicing', 'firstName', e.target.value)}
                                    disabled={formData.invoicingContact?.sameAsPrimary}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name *</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={formData.invoicingContact?.lastName || ''}
                                    onChange={(e) => handleContactChange('invoicing', 'lastName', e.target.value)}
                                    disabled={formData.invoicingContact?.sameAsPrimary}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone *</label>
                            <input
                                type="tel"
                                className={styles.input}
                                value={formData.invoicingContact?.phone || ''}
                                onChange={(e) => handleContactChange('invoicing', 'phone', e.target.value)}
                                disabled={formData.invoicingContact?.sameAsPrimary}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email *</label>
                            <input
                                type="email"
                                className={styles.input}
                                value={formData.invoicingContact?.email || ''}
                                onChange={(e) => handleContactChange('invoicing', 'email', e.target.value)}
                                disabled={formData.invoicingContact?.sameAsPrimary}
                            />
                        </div>
                    </div>

                    {/* Billing Address */}
                    <div className={styles.contactSection}>
                        <h4 className={styles.contactTitle}>Billing Address</h4>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Street Address *</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={formData.invoicingContact?.streetAddress || ''}
                                onChange={(e) => handleContactChange('invoicing', 'streetAddress', e.target.value)}
                            />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>City *</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={formData.invoicingContact?.city || ''}
                                    onChange={(e) => handleContactChange('invoicing', 'city', e.target.value)}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>State *</label>
                                <select
                                    className={styles.select}
                                    value={formData.invoicingContact?.state || ''}
                                    onChange={(e) => handleContactChange('invoicing', 'state', e.target.value)}
                                >
                                    <option value="">Select State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="CA">California</option>
                                    <option value="FL">Florida</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="NY">New York</option>
                                    <option value="TX">Texas</option>

                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>ZIP Code *</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={formData.invoicingContact?.zipCode || ''}
                                    onChange={(e) => handleContactChange('invoicing', 'zipCode', e.target.value)}
                                />
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