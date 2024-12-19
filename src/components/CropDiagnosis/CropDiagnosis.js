// src/components/CropDiagnosis/CropDiagnosis.js

import React from 'react';
import Weather from './Weather/Weather'; // Ensure correct path to Weather component
import KnowledgeHub from './KnowledgeHub/KnowledgeHub'; // Import KnowledgeHub component
import CropDiagnosisMain from './Diagnosis/Diagnosis'; // Renamed the component to CropDiagnosisMain
import styles from './CropDiagnosis.module.css'; // Import the CSS module for styling

const CropDiagnosis = () => {
  return (
    <div className={styles.cropDiagnosisContainer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.weatherSection}>
          <Weather />
        </div>
        {/* Replace placeholder with KnowledgeHub */}
        <div className={styles.knowledgeHubSection}>
          <KnowledgeHub />
        </div>
      </div>

      {/* Other sections can remain as placeholders */}
      <div className={styles.knowledgeHubSection}>
        <CropDiagnosisMain /> {/* Updated the component name here */}
      </div>
    </div>
  );
};

export default CropDiagnosis;
