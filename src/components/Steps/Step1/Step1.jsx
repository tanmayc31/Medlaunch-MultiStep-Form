import React from 'react';
import styles from './Step1.module.css';

const Step1 = () => {
  return (
    <div className={styles.step}>
      <div className={styles.container}>
        
        {/* Organization Section */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Identify Healthcare Organization</h3>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Legal Entity Name *</label>
            <input 
              type="text" 
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Doing Business As (d/b/a) Name *</label>
            <input 
              type="text" 
              className={styles.input}
            />
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" id="sameAsLegal" />
            <label htmlFor="sameAsLegal">Same as Legal Entity Name</label>
          </div>
        {/* </section> */}

        <div className={styles.sectionGap}></div>
        
        {/* Primary Contact Section */}
        {/* <section className={styles.section}> */}
          <h3 className={styles.sectionTitle}>Primary Contact Information</h3>
          <p className={styles.sectionSubtitle}>Primary contact receives all DNV Healthcare official communications</p>
          
          {/* First row: First Name, Last Name */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>First Name *</label>
              <input 
                type="text" 
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Last Name *</label>
              <input 
                type="text" 
                className={styles.input}
              />
            </div>
          </div>

          {/* Title */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Title *</label>
            <input 
              type="text" 
              className={styles.input}
            />
          </div>

          {/* Phone row: Work Phone, Cell Phone */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Work Phone *</label>
              <input 
                type="tel" 
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Cell Phone</label>
              <input 
                type="tel" 
                className={styles.input}
              />
            </div>
          </div>

          {/* Email */}
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Email *</label>
            <input 
              type="email" 
              className={styles.input}
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

        
      </div>
    </div>
  );
};

export default Step1;