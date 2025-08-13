import React, { useState } from 'react';
import styles from './Step4.module.css';
import Navigation from '../../common/Navigation/Navigation';
import { useForm } from '../../../contexts/FormContext';

const Step4 = () => {
    const { formData, updateFormData, nextStep, previousStep } = useForm();
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleLocationSelect = (locationType) => {
        setSelectedLocation(locationType);
        updateFormData({ locationType });
    };

    return (
        <div className={styles.step}>
            <div className={styles.container}>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Do you have multiple sites or locations?</h3>

                    <div className={styles.locationOptions}>
                        <div 
                            className={`${styles.locationCard} ${selectedLocation === 'single' ? styles.selected : ''}`}
                            onClick={() => handleLocationSelect('single')}
                        >
                            <h4 className={styles.cardTitle}>Single Location</h4>
                            <p className={styles.cardDescription}>We operate from one facility only</p>
                        </div>

                        <div 
                            className={`${styles.locationCard} ${selectedLocation === 'multiple' ? styles.selected : ''}`}
                            onClick={() => handleLocationSelect('multiple')}
                        >
                            <h4 className={styles.cardTitle}>Multiple Locations</h4>
                            <p className={styles.cardDescription}>We have multiple facilities or practice locations</p>
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

export default Step4;