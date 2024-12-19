// src/components/CropDiagnosis/Diagnosis/ImageCapture.js
import React, { useState, useRef } from 'react';

const ImageCapture = ({ onImageCaptured }) => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      setIsCameraOn(true);
    } catch (err) {
      console.error('Error starting camera: ', err);
    }
  };

  // Capture image from video
  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    canvasRef.current.toBlob((blob) => {
      onImageCaptured(blob);  // Pass the captured image to parent component
    });
  };

  return (
    <div>
      <h2>Capture Plant Image</h2>
      <video ref={videoRef} autoPlay></video>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={captureImage}>Capture Image</button>
      <canvas ref={canvasRef} style={{ display: 'none' }} width={640} height={480}></canvas>
      {isCameraOn && (
        <div>
          <h3>Camera is On</h3>
        </div>
      )}
    </div>
  );
};

export default ImageCapture;
