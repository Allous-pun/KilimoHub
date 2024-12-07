import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'; 
import Modal from 'react-modal'; // Import Modal component

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setIsSuccessModalOpen(true); 
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
  };

  const handleSuccessContinue = () => {
    setIsSuccessModalOpen(false);
    navigate('/login'); 
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupTitle}>Sign Up</h2>

      <p className={styles.loginLink}>
        Already have an account? <NavLink to="/login" className={styles.link}>Log in</NavLink>
      </p>

      {error && <p className={styles.errorText}>{error}</p>}

      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.eyeIcon}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className={styles.passwordWrapper}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={styles.eyeIcon}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button type="submit" className={styles.signupButton}>Sign Up</button>
      </form>

      <div className={styles.orDivider}>OR</div>

      <button className={styles.googleSignup}>
        <FaGoogle className={styles.googleIcon} />
        Sign Up with Google
      </button>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Successful"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Registration Successful</h2>
        <p>Your account has been successfully created!</p>
        <button onClick={handleSuccessContinue} className={styles.modalButton}>Continue to Login</button>
      </Modal>

      {/* Error Modal */}
      
    </div>
  );
};

export default SignUp;
