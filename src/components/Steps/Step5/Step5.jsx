import React, { useState } from 'react';
import styles from './Step5.module.css';
import Navigation from '../../common/Navigation/Navigation';
import { useForm } from '../../../contexts/FormContext';

const Step5 = () => {
    const { formData, updateFormData, nextStep, previousStep } = useForm();

    const [activeTab, setActiveTab] = useState('All Services');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [showOtherService, setShowOtherService] = useState(false);

    const [selectedStandards, setSelectedStandards] = useState([]);
    const [thrombolyticDates, setThrombolyticDates] = useState([]);
    const [thrombectomyDates, setThrombectomyDates] = useState([]);

    const serviceCategories = {
        'Emergency & Critical Care': [
            'Emergency Department',
            'Neonatal Intensive Care Services',
            'Pediatric Intensive Care Services',
            'Pediatric Intensive Care Services'
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
        if (checked) {
            setSelectedServices([...selectedServices, service]);
        } else {
            setSelectedServices(selectedServices.filter(s => s !== service));
        }
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
                    <div className={styles.serviceGrid}>
                        {Object.entries(serviceCategories).map(([category, services]) => (
                            <div key={category} className={styles.serviceCategory}>
                                <h4 className={styles.categoryTitle}>{category}</h4>
                                {services.map((service, index) => (
                                    <div key={index} className={styles.serviceOption}>
                                        <input
                                            type="checkbox"
                                            id={`service-${category}-${index}`}
                                            onChange={(e) => handleServiceChange(service, e.target.checked)}
                                        />
                                        <label htmlFor={`service-${category}-${index}`}>
                                            {service}
                                        </label>
                                    </div>
                                ))}
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
                                if (e.target.value && !selectedStandards.includes(e.target.value)) {
                                    setSelectedStandards([...selectedStandards, e.target.value]);
                                    e.target.value = ''; // Reset dropdown
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
                        {selectedStandards.length > 0 && (
                            <div className={styles.tagContainer}>
                                {selectedStandards.map((standard, index) => (
                                    <div key={index} className={styles.tag}>
                                        <span>{standard}</span>
                                        <button
                                            type="button"
                                            className={styles.tagRemove}
                                            onClick={() => setSelectedStandards(selectedStandards.filter((_, i) => i !== index))}
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
                            <input type="date" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Date of Application</label>
                            <input type="date" className={styles.input} />
                        </div>
                    </div>

                    {/* Thrombolytic Dates */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Dates of last twenty-five thrombolytic administrations</label>
                        <input
                            type="date"
                            className={styles.input}
                            onChange={(e) => {
                                if (e.target.value && thrombolyticDates.length < 25 && !thrombolyticDates.includes(e.target.value)) {
                                    setThrombolyticDates([...thrombolyticDates, e.target.value]);
                                    e.target.value = ''; // Reset date picker
                                }
                            }}
                        />

                        {/* Selected Dates Tags */}
                        {thrombolyticDates.length > 0 && (
                            <div className={styles.tagContainer}>
                                {thrombolyticDates.map((date, index) => (
                                    <div key={index} className={styles.tag}>
                                        <span>{date}</span>
                                        <button
                                            type="button"
                                            className={styles.tagRemove}
                                            onClick={() => setThrombolyticDates(thrombolyticDates.filter((_, i) => i !== index))}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <p className={styles.helperText}>Selected: {thrombolyticDates.length}/25</p>
                    </div>
                    {/* Thrombectomy Dates */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Dates of last fifteen thrombectomies</label>
                        <input
                            type="date"
                            className={styles.input}
                            onChange={(e) => {
                                if (e.target.value && thrombectomyDates.length < 15 && !thrombectomyDates.includes(e.target.value)) {
                                    setThrombectomyDates([...thrombectomyDates, e.target.value]);
                                    e.target.value = ''; // Reset date picker
                                }
                            }}
                        />

                        {/* Selected Dates Tags */}
                        {thrombectomyDates.length > 0 && (
                            <div className={styles.tagContainer}>
                                {thrombectomyDates.map((date, index) => (
                                    <div key={index} className={styles.tag}>
                                        <span>{date}</span>
                                        <button
                                            type="button"
                                            className={styles.tagRemove}
                                            onClick={() => setThrombectomyDates(thrombectomyDates.filter((_, i) => i !== index))}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <p className={styles.helperText}>Selected: {thrombectomyDates.length}/15</p>
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