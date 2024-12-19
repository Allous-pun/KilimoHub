// DiagnosisResult.js

import React from 'react';

const DiagnosisResult = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <div>
      <h3>Diagnosis Result</h3>
      <p><strong>Plant Name:</strong> {result.plant_name}</p>
      <p><strong>Confidence:</strong> {result.confidence}</p>
      <img src={result.image_url} alt="Identified Plant" />
    </div>
  );
};

export default DiagnosisResult;
