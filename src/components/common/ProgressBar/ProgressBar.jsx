import React from 'react';
import { useForm } from '../../../contexts/FormContext';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {

    const {currentStep }= useForm();


    const stepTitles = [
        'New DNV Quote Request',
        'Facility Details',
        'Leadership Contacts',
        'Site Information',
        'Services & Certifications',
        'Review & Submit'
    ];

    const stepLabels = [
        'DNV Quote Request',
        'Facility Details',
        'Leadership Contacts',
        'Site Information',
        'Services & Certifications',
        'Review & Submit'
    ];

    return (
        <div className={styles.progressBar}>
            {/* Title Section */}
            <div className={styles.titleSection}>
                <div className={styles.container}>
                    <h2 className={styles.title}>{stepTitles[currentStep - 1]}</h2>
                    <span className={styles.stepText}>Step {currentStep} of 6</span>
                </div>
            </div>

            {/* Progress Lines */}
            <div className={styles.progressSection}>
                <div className={styles.container}>
                    <div className={styles.progressLines}>
                        {stepLabels.map((label, index) => {
                            const stepNumber = index + 1;
                            const isCompleted = stepNumber < currentStep;
                            const isCurrent = stepNumber === currentStep;
                            const isInactive = stepNumber > currentStep;

                            return (
                                <div key={index} className={styles.stepContainer}>
                                    <div className={styles.progressLineWrapper}>
                                        <div className={`${styles.progressLineBackground} ${isCompleted ? styles.completed :
                                                isCurrent ? styles.current :
                                                    styles.inactive
                                            }`}></div>
                                        {isCurrent && (
                                            <div className={styles.progressLineActive}></div>
                                        )}
                                    </div>
                                    <span className={styles.stepLabel}>{label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;