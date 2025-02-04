import React from 'react';
import Weather from './Weather/Weather'; // Ensure correct path to Weather component
import KnowledgeHub from './KnowledgeHub/KnowledgeHub'; // Import KnowledgeHub component
import CropDiagnosisMain from './Diagnosis/Diagnosis'; // Renamed the component to CropDiagnosisMain
import FarmingTips from './FarmingTips/FarmingTips'; // Import FarmingTips component
import styles from './CropDiagnosis.module.css'; // Import the CSS module for styling

const CropDiagnosis = () => {
  return (
    <div className={styles.cropDiagnosisContainer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.weatherSection}>
          <Weather />
        </div>
        <div className={styles.knowledgeHubSection}>
          <KnowledgeHub />
        </div>
      </div>

      {/* Bottom Section - Crop Diagnosis and Farming Tips next to each other */}
      <div className={styles.bottomSection}>
        <div className={styles.cropUtilitySection}>
          <CropDiagnosisMain />
        </div>
        <div className={styles.farmingTipsSection}>
          <FarmingTips />
        </div>
      </div>
    </div>
  );
};

export default CropDiagnosis;
