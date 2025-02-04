import React from 'react';
import styles from './FarmingTips.module.css'; // Import the CSS module for styling

const FarmingTips = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How to Use the Crop Diagnosis Service</h2>

      {/* Step 1: Registration/Sign Up */}
      <div className={styles.step}>
        <h3>Step 1: Sign Up / Log In</h3>
        <p>
          To get started, you need to create an account or log in. This will allow you to access all our crop diagnosis services and ensure that your data is securely stored for future use. 
        </p>
        <p>
          If you're new to the platform, simply click on the <strong>Sign Up</strong> button, enter your details, and follow the prompts to complete your registration. If you already have an account, click on <strong>Log In</strong> and use your credentials to access the platform.
        </p>
      </div>

      {/* Step 2: Uploading the Image */}
      <div className={styles.step}>
        <h3>Step 2: Upload Your Crop Image</h3>
        <p>
          Once you're logged in, head over to the crop diagnosis section. There, you will be prompted to upload an image of your crop. Ensure that the image is clear and well-lit for accurate diagnosis results.
        </p>
        <p>
          Click the <strong>Upload Image</strong> button and select the image you want to analyze. Make sure the image captures the area of the crop you want diagnosed, including any visible symptoms.
        </p>
      </div>

      {/* Step 3: Diagnosis Process */}
      <div className={styles.step}>
        <h3>Step 3: Crop Diagnosis</h3>
        <p>
          After uploading the image, the platform will automatically analyze it using our advanced crop diagnosis system. This step may take a few moments as the system processes the image.
        </p>
        <p>
          You will receive a detailed diagnosis of your crop’s condition, including any potential diseases or issues. The system will also recommend the next steps for treatment or prevention based on the diagnosis.
        </p>
      </div>

      {/* Step 4: Get Recommendations */}
      <div className={styles.step}>
        <h3>Step 4: Receive Treatment Recommendations</h3>
        <p>
          After the diagnosis, you will receive personalized treatment recommendations for your crop. These may include suggested pesticides, fertilizers, or alternative farming methods to improve crop health.
        </p>
        <p>
          We also provide tips on how to prevent the issue from recurring in the future.
        </p>
      </div>

      {/* Step 5: Expert Support */}
      <div className={styles.step}>
        <h3>Step 5: Reach Out for Expert Support (If Needed)</h3>
        <p>
          If you require additional help or have specific questions about the diagnosis or treatment, our experts are available for consultation.
        </p>
        <p>
          You can reach out to an expert directly from the platform for further guidance and recommendations tailored to your specific crop and farming conditions.
        </p>
      </div>

      {/* Final Tip */}
      <div className={styles.finalTip}>
        <h3>Final Tip:</h3>
        <p>
          Remember, accurate diagnosis depends on the quality of the image you upload. Make sure the image is clear and includes as much detail as possible to get the best results from our service.
        </p>
      </div>
    </div>
  );
};

export default FarmingTips;
