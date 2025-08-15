import React, { useState } from 'react';
import styles from './Step6.module.css';
import Navigation from '../../common/Navigation/Navigation';
import { useForm } from '../../../contexts/FormContext';

const Step6 = () => {
    const { formData, previousStep, goToStep } = useForm();
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
                                <button 
  className={styles.editButton}
  onClick={(e) => {
    e.stopPropagation();  // Prevent section collapse
    goToStep(1);          // Go to Step 1
  }}
>
  Edit
</button>
                            </div>
                            {!collapsedSections.basicInfo && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Legal Entity Name</div>
                                            <div className={styles.value}>{formData.legalEntityName || 'Not provided'}</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>d/b/a Name</div>
                                            <div className={styles.value}>{formData.doingBusinessAs || 'Not provided'}</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Primary Contact</div>
                                            <div className={styles.value}>
                                                <div className={styles.contactBlock}>
                                                    <div className={styles.contactName}>{formData.firstName} {formData.lastName}</div>
                                                    <div className={styles.contactTitle}>{formData.title}</div>
                                                    <div className={styles.contactInfo}> Work: {formData.workPhone} | Cell: {formData.cellPhone}</div>
                                                    <div className={styles.contactInfo}>
                                                        Email: {formData.email}
                                                        {formData.emailVerified && (
                                                            <span className={styles.verified}>Verified</span>
                                                        )}
                                                    </div>
                                                    {/* <div className={styles.contactInfo}>Address: 123 Healthcare Way, Medical City, ST 12345</div> */}
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
                                <button 
  className={styles.editButton}
  onClick={(e) => {
    e.stopPropagation();
    goToStep(2);
  }}
>
  Edit
</button>

                            </div>
                            {!collapsedSections.facilityDetails && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Facility Type</div>
                                            <div className={styles.value}>{formData.facilityType || 'Not selected'}</div>
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
                                <button 
  className={styles.editButton}
  onClick={(e) => {
    e.stopPropagation();
    goToStep(3);
  }}
>
  Edit
</button>
                            </div>
                            {!collapsedSections.leadershipContacts && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>CEO</div>
                                            <div className={styles.value}>
                                                <div className={styles.contactBlock}>
                                                    <div className={styles.contactName}>
                                                        {formData.ceoContact?.firstName} {formData.ceoContact?.lastName || 'Not provided'}
                                                    </div>
                                                    <div className={styles.contactInfo}>Phone: {formData.ceoContact?.phone || 'Not provided'}</div>
                                                    <div className={styles.contactInfo}>Email: {formData.ceoContact?.email || 'Not provided'}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Director of Quality</div>
                                            <div className={styles.value}>
                                                <div className={styles.contactBlock}>
                                                    <div className={styles.contactName}>
                                                        {formData.qualityContact?.firstName} {formData.qualityContact?.lastName || 'Not provided'}
                                                    </div>
                                                    <div className={styles.contactInfo}>Phone: {formData.qualityContact?.phone || 'Not provided'}</div>
                                                    <div className={styles.contactInfo}>Email: {formData.qualityContact?.email || 'Not provided'}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Invoicing Contact</div>
                                            <div className={styles.value}>
                                                <div className={styles.contactBlock}>
                                                    <div className={styles.contactName}>
                                                        {formData.invoicingContact?.firstName} {formData.invoicingContact?.lastName || 'Not provided'}
                                                    </div>
                                                    <div className={styles.contactTitle}>Title: {formData.invoicingContact?.title || 'Not provided'}</div>
                                                    <div className={styles.contactInfo}>Phone: {formData.invoicingContact?.phone || 'Not provided'}</div>
                                                    <div className={styles.contactInfo}>Email: {formData.invoicingContact?.email || 'Not provided'}</div>
                                                    <div className={styles.contactInfo}>
                                                        Billing Address: {formData.invoicingContact?.streetAddress}, {formData.invoicingContact?.city}, {formData.invoicingContact?.state} {formData.invoicingContact?.zipCode || 'Not provided'}
                                                    </div>
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
                                <button 
  className={styles.editButton}
  onClick={(e) => {
    e.stopPropagation();
    goToStep(4);
  }}
>
  Edit
</button>
                            </div>
                            {!collapsedSections.siteInformation && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Site Configuration</div>
                                            <div className={styles.value}>
                                                {formData.locationType === 'multiple' ? 'Multiple Locations' :
                                                    formData.locationType === 'single' ? 'Single Location' : 'Not selected'}
                                                {formData.uploadedFiles?.length > 0 && ` (${formData.uploadedFiles.length} files)`}
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Input Method</div>
                                            <div className={styles.value}>
                                                {formData.uploadedFiles?.length > 0 ? 'File Upload' : 'Manual Entry'}
                                            </div>
                                        </div>
                                        {formData.uploadedFiles?.length > 0 && (
                                            <div className={styles.infoRow}>
                                                <div className={styles.label}>Uploaded Files</div>
                                                <div className={styles.value}>
                                                    {formData.uploadedFiles.map((file, index) => (
                                                        <div key={index} className={styles.locationBlock}>
                                                            <div className={styles.locationTitle}>{file.name}</div>
                                                            <div className={styles.locationInfo}>Size: {file.size}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
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
                                <button 
  className={styles.editButton}
  onClick={(e) => {
    e.stopPropagation();
    goToStep(5);
  }}
>
  Edit
</button>
                            </div>
                            {!collapsedSections.servicesCertifications && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Services Provided</div>
                                            <div className={styles.value}>
                                                <div className={styles.tagContainer}>
                                                    {Object.keys(formData.servicesData || {}).map(service => (
                                                        <span key={service} className={styles.serviceTagOutlined}>{service}</span>
                                                    ))}
                                                    {Object.keys(formData.servicesData || {}).length === 0 && (
                                                        <span className={styles.noData}>No services selected</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Standards to Apply</div>
                                            <div className={styles.value}>
                                                <div className={styles.tagContainer}>
                                                    {(formData.selectedStandards || []).map((standard, index) => (
                                                        <span key={index} className={styles.serviceTagOutlined}>{standard}</span>
                                                    ))}
                                                    {(!formData.selectedStandards || formData.selectedStandards.length === 0) && (
                                                        <span className={styles.noData}>No standards selected</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Date of Application</div>
                                            <div className={styles.value}>{formData.applicationDate || 'Not provided'}</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Expiration Date of Current Stroke Certification</div>
                                            <div className={styles.value}>{formData.strokeCertificationExpiry || 'Not provided'}</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Dates of last twenty-five thrombolytic administrations</div>
                                            <div className={styles.value}>
                                                <div className={styles.dateList}>
                                                    {(formData.thrombolyticDates || []).length > 0 ?
                                                        formData.thrombolyticDates.join(', ') :
                                                        'No dates provided'
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.label}>Dates of last fifteen thrombectomies</div>
                                            <div className={styles.value}>
                                                <div className={styles.dateList}>
                                                    {(formData.thrombectomyDates || []).length > 0 ?
                                                        formData.thrombectomyDates.join(', ') :
                                                        'No dates provided'
                                                    }
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