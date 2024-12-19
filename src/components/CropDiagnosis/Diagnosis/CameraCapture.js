// CameraCapture.js
import React, { useRef, useState } from 'react';

const CameraCapture = ({ onCapture }) => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Start the camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraReady(true);
    } catch (err) {
      console.error('Error accessing the camera:', err);
    }
  };

  // Capture the image
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Convert the image from canvas to a data URL
    const imageUrl = canvas.toDataURL('image/png');
    onCapture(imageUrl); // Pass the captured image to the parent component
  };

  return (
    <div>
      <h2>Capture Crop Image</h2>
      <button onClick={startCamera} disabled={isCameraReady}>
        Start Camera
      </button>
      <div>
        {isCameraReady && (
          <div>
            <video ref={videoRef} width="300" height="200" autoPlay />
            <button onClick={captureImage}>Capture Image</button>
            <canvas ref={canvasRef} width="300" height="200" style={{ display: 'none' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraCapture;
