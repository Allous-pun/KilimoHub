// Diagnosis.js
import React, { useState } from 'react';
import ImageUpload from './imageUpload';
import DiagnosisResult from './DiagnosisResult';

const Diagnosis = () => {
  const [image, setImage] = useState(null); // Store the uploaded image
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle when the image has been uploaded
  const handleImageUploaded = (result) => {
    setLoading(false); // Stop loading when the result is received
    setDiagnosisResult(result);
  };

  // Handle the start of the upload process
  const handleUploadStart = () => {
    setLoading(true);
    setDiagnosisResult(null); // Clear any previous diagnosis result
  };

  return (
    <div>
      <h2>Crop Diagnosis</h2>
      
      {/* Image Upload */}
      <ImageUpload 
        image={image} 
        onImageUploaded={handleImageUploaded} 
        onUploadStart={handleUploadStart} 
        setImage={setImage} // Pass setImage to update the uploaded image state
      />

      {/* Show loading state while waiting for the result */}
      {loading ? (
        <p>Uploading and processing the image...</p>
      ) : (
        // Display the diagnosis result once available
        <DiagnosisResult result={diagnosisResult} />
      )}
    </div>
  );
};

export default Diagnosis;
