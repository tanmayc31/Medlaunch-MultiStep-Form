import React, { useState } from 'react';
import styles from './Step5.module.css';
import Navigation from '../../common/Navigation/Navigation';
import { useForm } from '../../../contexts/FormContext';

const Step5 = () => {
    const { formData, updateFormData, nextStep, previousStep } = useForm();

    const [activeTab, setActiveTab] = useState('All Services');
    const [searchTerm, setSearchTerm] = useState('');
    const [showOtherService, setShowOtherService] = useState(false);



    const serviceCategories = {
        'Emergency & Critical Care': [
            'Emergency Department',
            'Neonatal Intensive Care Services',
            'Pediatric Intensive Care Services',
            'Pediatric Intensive Care Services2'
        ],
        'Cardiac Services': [
            'Cardiac Catheterization Laboratory',
            'Open Heart'
        ],
        'Diagnostic Services': [
            'Magnetic Resonance Imaging (MRI)',
            'Diagnostic Radioisotope Facility',
            'Lithotripsy'
        ]
    };

    const handleServiceChange = (service, checked) => {
        const currentServices = formData.servicesData || {};
        if (checked) {
            updateFormData({
                servicesData: {
                    ...currentServices,
                    [service]: {
                        selected: true,
                        contact: { name: '', phone: '', email: '' }
                    }
                }
            });
        } else {
            const newServices = { ...currentServices };
            delete newServices[service];
            updateFormData({ servicesData: newServices });
        }
    };

    const handleContactChange = (service, field, value) => {
        const currentServices = formData.servicesData || {};
        updateFormData({
            servicesData: {
                ...currentServices,
                [service]: {
                    ...currentServices[service],
                    contact: {
                        ...currentServices[service].contact,
                        [field]: value
                    }
                }
            }
        });
    };

    return (
        <div className={styles.step}>
            <div className={styles.container}>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Service Offering</h3>
                    <p className={styles.sectionSubtitle}>Primary Site Service offering</p>

                    {/* Service Tabs */}
                    {/* Service Tabs */}
                    <div className={styles.serviceTabs}>
                        {['All Services', 'Clinical', 'Surgical', 'Diagnostic', 'Rehabilitation', 'Specialty'].map(tab => (
                            <button
                                key={tab}
                                className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className={styles.searchContainer}>
                        <input
                            type="text"
                            placeholder="Search services..."
                            className={styles.searchInput}
                        />
                        <span className={styles.searchIcon}>🔍</span>
                    </div>

                    {/* Service Categories */}
                    {/* Service Categories with Contact Forms */}
                    <div className={styles.serviceGrid}>
                        {Object.entries(serviceCategories).map(([category, services]) => (
                            <div key={category} className={styles.serviceCategory}>
                                <h4 className={styles.categoryTitle}>{category}</h4>

                                {services.map((service, index) => {
                                    const isSelected = formData.servicesData?.[service]?.selected || false;

                                    return (
                                        <div key={index} className={styles.serviceBlock}>
                                            {/* Checkbox */}
                                            <div className={styles.serviceOption}>
                                                <input
                                                    type="checkbox"
                                                    id={`service-${category}-${index}`}
                                                    checked={isSelected}
                                                    onChange={(e) => handleServiceChange(service, e.target.checked)}
                                                />
                                                <label htmlFor={`service-${category}-${index}`}>
                                                    {service}
                                                </label>
                                            </div>

                                            {/* Contact Form - appears when service is selected */}
                                            {isSelected && (
                                                <div className={styles.contactForm}>
                                                    <div className={styles.contactRow}>
                                                        <div className={styles.contactField}>
                                                            <label className={styles.contactLabel}>Contact Name:</label>
                                                            <input
                                                                type="text"
                                                                className={styles.contactInput}
                                                                value={formData.servicesData?.[service]?.contact?.name || ''}
                                                                onChange={(e) => handleContactChange(service, 'name', e.target.value)}
                                                                placeholder="Enter contact name"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className={styles.contactRow}>
                                                        <div className={styles.contactField}>
                                                            <label className={styles.contactLabel}>Phone:</label>
                                                            <input
                                                                type="tel"
                                                                className={styles.contactInput}
                                                                value={formData.servicesData?.[service]?.contact?.phone || ''}
                                                                onChange={(e) => handleContactChange(service, 'phone', e.target.value)}
                                                                placeholder="Enter phone number"
                                                            />
                                                        </div>
                                                        <div className={styles.contactField}>
                                                            <label className={styles.contactLabel}>Email:</label>
                                                            <input
                                                                type="email"
                                                                className={styles.contactInput}
                                                                value={formData.servicesData?.[service]?.contact?.email || ''}
                                                                onChange={(e) => handleContactChange(service, 'email', e.target.value)}
                                                                placeholder="Enter email address"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    {/* Add Other Service */}
                    <button
                        type="button"
                        className={styles.addServiceButton}
                        onClick={() => setShowOtherService(true)}
                    >
                        + Add Other Service
                    </button>

                    {/* Other Service Input */}
                    {showOtherService && (
                        <div className={styles.otherServiceSection}>
                            <h4 className={styles.categoryTitle}>Other Service</h4>
                            <div className={styles.otherServiceInput}>
                                <input
                                    type="text"
                                    placeholder="Specify other service"
                                    className={styles.input}
                                />
                                <button
                                    type="button"
                                    className={styles.removeButton}
                                    onClick={() => setShowOtherService(false)}
                                >
                                    ❌
                                </button>
                            </div>
                        </div>
                    )}


                    {/* Standards Dropdown Multi-Select */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Standards to Apply</label>
                        <select
                            className={styles.select}
                            onChange={(e) => {
                                if (e.target.value && !(formData.selectedStandards || []).includes(e.target.value)) {
                                    updateFormData({
                                        selectedStandards: [...(formData.selectedStandards || []), e.target.value]
                                    });
                                    e.target.value = '';
                                }
                            }}
                        >
                            <option value="">Select Standard(s)</option>
                            <option value="Standard 1">Standard 1</option>
                            <option value="Standard 2">Standard 2</option>
                            <option value="Standard 3">Standard 3</option>
                            <option value="Standard 4">Standard 4</option>
                        </select>

                        {/* Selected Standards Tags */}
                        {(formData.selectedStandards || []).length > 0 && (
                            <div className={styles.tagContainer}>
                                {(formData.selectedStandards || []).map((standard, index) => (
                                    <div key={index} className={styles.tag}>
                                        <span>{standard}</span>
                                        <button
                                            type="button"
                                            className={styles.tagRemove}
                                            onClick={() => updateFormData({
                                                selectedStandards: (formData.selectedStandards || []).filter((_, i) => i !== index)
                                            })}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Date Fields - Simplified */}
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Expiration Date of Current Stroke Certification</label>
                            <input
                                type="date"
                                className={styles.input}
                                value={formData.strokeCertificationExpiry || ''}
                                onChange={(e) => updateFormData({ strokeCertificationExpiry: e.target.value })}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Date of Application</label>
                            <input
                                type="date"
                                className={styles.input}
                                value={formData.applicationDate || ''}
                                onChange={(e) => updateFormData({ applicationDate: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Thrombolytic Dates */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Dates of last twenty-five thrombolytic administrations</label>
                        <input
                            type="date"
                            className={styles.input}
                            onChange={(e) => {
                                if (e.target.value && (formData.thrombolyticDates || []).length < 25 && !(formData.thrombolyticDates || []).includes(e.target.value)) {
                                    updateFormData({
                                        thrombolyticDates: [...(formData.thrombolyticDates || []), e.target.value]
                                    });
                                    e.target.value = '';
                                }
                            }}
                        />

                        {/* Selected Dates Tags */}
                        {(formData.thrombolyticDates || []).length > 0 && (
                            <div className={styles.tagContainer}>
                                {(formData.thrombolyticDates || []).map((date, index) => (
                                    <div key={index} className={styles.tag}>
                                        <span>{date}</span>
                                        <button
                                            type="button"
                                            className={styles.tagRemove}
                                            onClick={() => updateFormData({
                                                thrombolyticDates: (formData.thrombolyticDates || []).filter((_, i) => i !== index)
                                            })}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <p className={styles.helperText}>Selected: {(formData.thrombolyticDates || []).length}/25</p>
                    </div>
                    {/* Thrombectomy Dates */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Dates of last fifteen thrombectomies</label>
                        <input
                            type="date"
                            className={styles.input}
                            onChange={(e) => {
                                if (e.target.value && (formData.thrombectomyDates || []).length < 15 && !(formData.thrombectomyDates || []).includes(e.target.value)) {
                                    updateFormData({
                                        thrombectomyDates: [...(formData.thrombectomyDates || []), e.target.value]
                                    });
                                    e.target.value = '';
                                }
                            }}
                        />

                        {/* Selected Dates Tags */}
                        {(formData.thrombectomyDates || []).length > 0 && (
                            <div className={styles.tagContainer}>
                                {(formData.thrombectomyDates || []).map((date, index) => (
                                    <div key={index} className={styles.tag}>
                                        <span>{date}</span>
                                        <button
                                            type="button"
                                            className={styles.tagRemove}
                                            onClick={() => updateFormData({
                                                thrombectomyDates: (formData.thrombectomyDates || []).filter((_, i) => i !== index)
                                            })}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <p className={styles.helperText}>Selected: {(formData.thrombectomyDates || []).length}/15</p>
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

export default Step5;