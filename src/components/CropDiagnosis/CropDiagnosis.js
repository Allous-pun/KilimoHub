import React from 'react';
import Weather from './Weather/Weather'; // Ensure correct path to Weather component
import KnowledgeHub from './KnowledgeHub/KnowledgeHub'; // Import KnowledgeHub component
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
      <div>
        <div>Diagnosis Component Placeholder</div>
      </div>
      <div>
        <div>Crop Utility Component Placeholder</div>
        <div>Market Insight Component Placeholder</div>
        <div>Farming Tips Component Placeholder</div>
      </div>
    </div>
  );
};

export default CropDiagnosis;
