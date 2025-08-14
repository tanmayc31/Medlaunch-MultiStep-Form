import React, { useState } from 'react';
import styles from './Step6.module.css';
import Navigation from '../../common/Navigation/Navigation';
import { useForm } from '../../../contexts/FormContext';

const Step6 = () => {
    const { previousStep } = useForm();
    const [certificationChecked, setCertificationChecked] = useState(false);

    const [collapsedSections, setCollapsedSections] = useState({
        basicInfo: false,      // false = expanded, true = collapsed
        facilityDetails: false,
        leadershipContacts: false,
        siteInformation: false,
        servicesCertifications: false
    });

    const toggleSection = (sectionKey) => {
        setCollapsedSections({
            ...collapsedSections,
            [sectionKey]: !collapsedSections[sectionKey]
        });
    };

    const handleSubmit = () => {
        if (certificationChecked) {
            alert('Application submitted successfully!');
        } else {
            alert('Please certify the information before submitting.');
        }
    };

    return (
        <div className={styles.step}>
            <div className={styles.container}>
                <div className={styles.reviewContainer}>
                    {/* Hospital Information */}
                    <div className={styles.mainSection}>
                        <h3 className={styles.mainTitle}>Hospital Information</h3>

                        {/* Basic Information */}
                        <div className={styles.section}>
                            <div className={styles.sectionHeader} onClick={() => toggleSection('basicInfo')}>
                                <span className={styles.collapseIcon}>
                                    {collapsedSections.basicInfo ? '▼' : '▲'}
                                </span>
                                <h4 className={styles.sectionTitle}>Basic Information</h4>
                                <button className={styles.editButton}>Edit</button>
                            </div>
                            {!collapsedSections.basicInfo && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Legal Entity Name</div>
                                            <div className={styles.value}>Sample Hospital Corporation</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>d/b/a Name</div>
                                            <div className={styles.value}>Sample Hospital</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Primary Contact</div>
                                            <div className={styles.value}>
                                                <div className={styles.contactBlock}>
                                                    <div className={styles.contactName}>John Doe</div>
                                                    <div className={styles.contactTitle}>Chief Executive Officer</div>
                                                    <div className={styles.contactInfo}>Work: (555) 123-4567 | Cell: (555) 987-6543</div>
                                                    <div className={styles.contactInfo}>
                                                        Email: john.doe@hospital.com
                                                        <span className={styles.verified}>Verified</span>
                                                    </div>
                                                    <div className={styles.contactInfo}>Address: 123 Healthcare Way, Medical City, ST 12345</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Facility Details */}
                        <div className={styles.section}>
                            <div className={styles.sectionHeader} onClick={() => toggleSection('facilityDetails')} >
                                <span className={styles.collapseIcon}>
                                    {collapsedSections.facilityDetails ? '▼' : '▲'}
                                </span>
                                <h4 className={styles.sectionTitle}>Facility Details</h4>
                                <button className={styles.editButton}>Edit</button>
                            </div>
                            {!collapsedSections.facilityDetails && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Facility Type</div>
                                            <div className={styles.value}>Short-Term Acute Care (with Swing Beds)</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Leadership Contacts */}
                        <div className={styles.section}>
                            <div className={styles.sectionHeader} onClick={() => toggleSection('leadershipContacts')} >
                                <span className={styles.collapseIcon}>
                                    {collapsedSections.leadershipContacts ? '▼' : '▲'}
                                </span>
                                <h4 className={styles.sectionTitle}>Leadership Contacts</h4>
                                <button className={styles.editButton}>Edit</button>
                            </div>
                            {!collapsedSections.leadershipContacts && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>CEO</div>
                                            <div className={styles.value}>
                                                <div className={styles.contactBlock}>
                                                    <div className={styles.contactName}>John Doe</div>
                                                    <div className={styles.contactInfo}>Phone: (555) 123-4567</div>
                                                    <div className={styles.contactInfo}>Email: john.doe@hospital.com</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Director of Quality</div>
                                            <div className={styles.value}>
                                                <div className={styles.contactBlock}>
                                                    <div className={styles.contactName}>Jane Smith</div>
                                                    <div className={styles.contactInfo}>Phone: (555) 234-5678</div>
                                                    <div className={styles.contactInfo}>Email: jane.smith@hospital.com</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Invoicing Contact</div>
                                            <div className={styles.value}>
                                                <div className={styles.contactBlock}>
                                                    <div className={styles.contactName}>Robert Brown</div>
                                                    <div className={styles.contactTitle}>Title: Director of Finance</div>
                                                    <div className={styles.contactInfo}>Phone: (555) 456-7890</div>
                                                    <div className={styles.contactInfo}>Email: robert.brown@hospital.com</div>
                                                    <div className={styles.contactInfo}>Billing Address: 456 Financial Plaza, Suite 200, Medical City, ST 12345</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Site Information */}
                        <div className={styles.section}>
                            <div className={styles.sectionHeader} onClick={() => toggleSection('siteInformation')} >
                                <span className={styles.collapseIcon}>
                                    {collapsedSections.siteInformation ? '▼' : '▲'}
                                </span>
                                <h4 className={styles.sectionTitle}>Site Information</h4>
                                <button className={styles.editButton}>Edit</button>
                            </div>

                            {!collapsedSections.siteInformation && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Site Configuration</div>
                                            <div className={styles.value}>Multiple Locations (3 sites)</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Input Method</div>
                                            <div className={styles.value}>File Upload</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}></div>
                                            <div className={styles.value}>
                                                <div className={styles.locationBlock}>
                                                    <div className={styles.locationTitle}>Practice Location 1</div>
                                                    <div className={styles.locationInfo}>456 Medical Plaza, Suite 100 Healthcare City, ST 12346</div>
                                                    <div className={styles.locationInfo}>FTEs: 45 | Shifts: 2 | Miles to Main: 5</div>
                                                    <div className={styles.locationInfo}>Days Open: M, T, W, TH, F</div>
                                                </div>
                                                <div className={styles.locationBlock}>
                                                    <div className={styles.locationTitle}>Practice Location 2</div>
                                                    <div className={styles.locationInfo}>789 Wellness Blvd, Suburb Town, ST 12347</div>
                                                    <div className={styles.locationInfo}>FTEs: 30 | Shifts: 1 | Miles to Main: 12</div>
                                                    <div className={styles.locationInfo}>Days Open: M, T, W, TH, F, SA</div>
                                                </div>
                                                <div className={styles.locationBlock}>
                                                    <div className={styles.locationTitle}>Practice Location 3</div>
                                                    <div className={styles.locationInfo}>321 Care Center Drive, Rural County, ST 12348</div>
                                                    <div className={styles.locationInfo}>FTEs: 25 | Shifts: 1 | Miles to Main: 28</div>
                                                    <div className={styles.locationInfo}>Days Open: M, W, F</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Services & Certifications */}
                        <div className={styles.section}>
                            <div className={styles.sectionHeader} onClick={() => toggleSection('servicesCertifications')} >
                                <span className={styles.collapseIcon}>
                                    {collapsedSections.servicesCertifications ? '▼' : '▲'}
                                </span>
                                <h4 className={styles.sectionTitle}>Services & Certifications</h4>
                                <button className={styles.editButton}>Edit</button>
                            </div>
                            {!collapsedSections.servicesCertifications && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Services Provided</div>
                                            <div className={styles.value}>
                                                <div className={styles.tagContainer}>
                                                    <span className={styles.serviceTagOutlined}>Emergency Department</span>
                                                    <span className={styles.serviceTagOutlined}>Cardiac Catheterization Lab</span>
                                                    <span className={styles.serviceTagOutlined}>Open Heart Surgery</span>
                                                    <span className={styles.serviceTagOutlined}>MRI</span>
                                                    <span className={styles.serviceTagOutlined}>Physical Therapy</span>
                                                    <span className={styles.serviceTagOutlined}>Occupational Therapy</span>
                                                    <span className={styles.serviceTagOutlined}>Speech Therapy</span>
                                                    <span className={styles.serviceTagOutlined}>NICU</span>
                                                    <span className={styles.serviceTagOutlined}>Hemodialysis</span>
                                                    <span className={styles.serviceTagOutlined}>Obstetric Services</span>
                                                    <span className={styles.serviceTagOutlined}>Oncology Services</span>
                                                    <span className={styles.serviceTagOutlined}>Palliative Care Program</span>
                                                    <span className={styles.serviceTagOutlined}>Ambulance Service</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Standards to Apply</div>
                                            <div className={styles.value}>
                                                <div className={styles.tagContainer}>
                                                    <span className={styles.serviceTagOutlined}>Emergency Department</span>
                                                    <span className={styles.serviceTagOutlined}>Inpatient Acute Care</span>
                                                    <span className={styles.serviceTagOutlined}>General Anesthetizing Location</span>
                                                    <span className={styles.serviceTagOutlined}>Diagnostic Services</span>
                                                    <span className={styles.serviceTagOutlined}>Therapy Services</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Date of Application</div>
                                            <div className={styles.value}>05/25/2021</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Expiration Date of Current Stroke Certification</div>
                                            <div className={styles.value}>05/15/2025</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Dates of last twenty-five thrombolytic administrations</div>
                                            <div className={styles.value}>
                                                <div className={styles.dateList}>
                                                    05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025,
                                                    05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025,
                                                    05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025,
                                                    05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Dates of last fifteen thrombectomies</div>
                                            <div className={styles.value}>
                                                <div className={styles.dateList}>
                                                    05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025,
                                                    05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025, 05/16/2025,
                                                    05/16/2025
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Ready to Submit Section */}
                    <div className={styles.submitSection}>
                        <h3 className={styles.submitTitle}>Ready to Submit?</h3>

                        <div className={styles.certificationCheck}>
                            <input
                                type="checkbox"
                                id="certification"
                                checked={certificationChecked}
                                onChange={(e) => setCertificationChecked(e.target.checked)}
                            />
                            <label htmlFor="certification">
                                I certify that all information provided is accurate and complete to the best of my knowledge
                            </label>
                        </div>

                        <p className={styles.disclaimer}>
                            By submitting this form, you agree to our terms and conditions. DNV will review your application and contact you within 2-3 business days.
                        </p>

                        <div className={styles.exportButtons}>
                            <button className={styles.exportButton}>Download as PDF</button>
                            <button className={styles.exportButton}>Export to CSV</button>
                        </div>
                    </div>
                </div>
                <Navigation
                    showPrevious={true}
                    buttonText="Submit Application"
                    onPrevious={() => previousStep()}
                    onSave={() => alert('Progress saved!')}
                    onContinue={() => handleSubmit()}
                />

            </div>
        </div>
    );
};

export default Step6;