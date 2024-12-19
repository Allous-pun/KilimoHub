// imageUpload.js
import React, { useState } from 'react';

const ImageUpload = ({ onImageUploaded, onUploadStart, setImage }) => {
  const [uploadError, setUploadError] = useState(null);

  // Handle the image upload process
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert('Please select an image file');
      return;
    }

    // Set the selected image in the parent component
    setImage(URL.createObjectURL(file));

    // Notify parent that upload is starting
    onUploadStart();

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('https://plant.id/api/v3/plantIdentification/upload', {
        method: 'POST',
        headers: {
          'Api-Key': 'TYIK0gpZwTERBhMIv1ySwNiZDuw95BLwweeWwNdiwenSdhSClT',  // Your API Key
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        onImageUploaded(result); // Pass the result to the parent component
      } else {
        setUploadError('Error uploading image');
        alert('Error uploading image');
      }
    } catch (error) {
      setUploadError('Network error during image upload');
      console.error('Error during image upload:', error);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleUpload} 
      />
      {uploadError && <p>{uploadError}</p>}
    </div>
  );
};

export default ImageUpload;
