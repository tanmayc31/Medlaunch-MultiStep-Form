import React, { useState } from 'react';
import styles from './Step4.module.css';
import Navigation from '../../common/Navigation/Navigation';
import { useForm } from '../../../contexts/FormContext';

const Step4 = () => {
    const { formData, updateFormData, nextStep, previousStep } = useForm();

    const handleLocationSelect = (locationType) => {
    updateFormData({ locationType });
};
    const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map(file => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(1) + 'MB',
        file: file
    }));
    updateFormData({ 
        uploadedFiles: [...(formData.uploadedFiles || []), ...newFiles] 
    });
};

    const handleFileRemove = (index) => {
    const newFiles = formData.uploadedFiles.filter((_, i) => i !== index);
    updateFormData({ uploadedFiles: newFiles });
};

    return (
        <div className={styles.step}>
            <div className={styles.container}>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Do you have multiple sites or locations?</h3>

                    <div className={styles.locationOptions}>
                        <div 
                            className={`${styles.locationCard} ${formData.locationType === 'single' ? styles.selected : ''}`}
                            onClick={() => handleLocationSelect('single')}
                        >
                            <h4 className={styles.cardTitle}>Single Location</h4>
                            <p className={styles.cardDescription}>We operate from one facility only</p>
                        </div>

                        <div 
                            className={`${styles.locationCard} ${formData.locationType === 'multiple' ? styles.selected : ''}`}
                            onClick={() => handleLocationSelect('multiple')}
                        >
                            <h4 className={styles.cardTitle}>Multiple Locations</h4>
                            <p className={styles.cardDescription}>We have multiple facilities or practice locations</p>
                        </div>
                    </div>

                    {/* Show upload section only when Multiple Locations is selected */}
                    {formData.locationType === 'multiple' && (
                        <div className={styles.uploadSection}>
                            <h3 className={styles.sectionTitle}>How would you like to add your site information?</h3>
                            
                            <div className={styles.uploadCard}>
                                <h4 className={styles.uploadTitle}>Upload CSV / Excel</h4>
                                <p className={styles.uploadDescription}>Upload a spreadsheet with all site information</p>

                                <div className={styles.dropZone}>
                                    <div className={styles.uploadIcon}>⬆️</div>
                                    <p className={styles.dropText}>Upload Site Information</p>
                                    <p className={styles.dropSubtext}>Drag and drop your CSV or Excel file here, or click to select</p>
                                    
                                    <input 
                                        type="file"
                                        accept=".csv,.xlsx,.xls"
                                        onChange={handleFileUpload}
                                        className={styles.fileInput}
                                        id="fileUpload"
                                        multiple
                                    />
                                    <label htmlFor="fileUpload" className={styles.selectButton}>
                                        Select file
                                    </label>

                                    <button 
                                        type="button" 
                                        className={styles.templateLink}
                                        onClick={() => alert('Download CSV Template')}
                                    >
                                        Download CSV Template
                                    </button>
                                </div>

                                {/* Show uploaded files */}
                                {(formData.uploadedFiles || []).length > 0 && (
                                    <div className={styles.uploadedSection}>
                                        <h4 className={styles.uploadedTitle}>Uploaded</h4>
                                        {(formData.uploadedFiles || []).map((file, index) => (
                                            <div key={index} className={styles.fileItem}>
                                                <div className={styles.fileInfo}>
                                                    <span className={styles.fileIcon}>📄</span>
                                                    <span className={styles.fileName}>{file.name}</span>
                                                    <button 
                                                        type="button" 
                                                        className={styles.previewLink}
                                                        onClick={() => alert('File Preview')}
                                                    >
                                                        Preview
                                                    </button>
                                                </div>
                                                <div className={styles.fileActions}>
                                                    <span className={styles.fileSize}>{file.size}</span>
                                                    <button 
                                                        type="button" 
                                                        className={styles.removeButton}
                                                        onClick={() => handleFileRemove(index)}
                                                    >
                                                        ❌
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

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

export default Step4;