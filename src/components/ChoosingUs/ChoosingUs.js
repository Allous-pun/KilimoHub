import React from "react";
import styles from './ChoosingUs.module.css';
import { FaLeaf, FaHandsHelping, FaGlobe } from 'react-icons/fa'; // Importing icons

const ChoosingUs = () => {
    return (
        <div style={{ backgroundColor: '#fff1e5' }}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>
                    Why Choose FarmUnity?
                </p>
                <p data-aos='slide-left' className={styles.sub_text}>
                    Empowering farmers through innovation, collaboration, and sustainability.
                </p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4">
                        <div className={styles.icon}>
                            <FaLeaf size={50} color="#228B22" />
                        </div>
                        <p className={styles.logo_head}>Sustainability</p>
                        <p className={styles.logo_text}>
                            We promote eco-friendly farming practices to ensure a greener future for everyone.
                        </p>
                    </div>

                    <div data-aos='fade' className="col-md-4">
                        <div className={styles.icon}>
                            <FaHandsHelping size={50} color="#00BFFF" />
                        </div>
                        <p className={styles.logo_head}>Community Support</p>
                        <p className={styles.logo_text}>
                            Bringing farmers together to share resources, knowledge, and support for mutual growth.
                        </p>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <div className={styles.icon}>
                            <FaGlobe size={50} color="#F5F5DC" />
                        </div>
                        <p className={styles.logo_head}>Global Access</p>
                        <p className={styles.logo_text}>
                            Leveraging technology to connect farmers to markets, services, and opportunities worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoosingUs;
