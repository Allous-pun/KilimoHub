import React from "react";
import styles from './Middle.module.css';
import { FaSeedling, FaCartPlus, FaHandshake, FaHeartbeat } from 'react-icons/fa'; // Updated icon import

const Middle = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>
                    Discover the Future of Agriculture with KilimoHub
                </p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
                    KilimoHub empowers small-scale farmers with innovative solutions, transforming the agricultural landscape 
                    through collaboration, technology, and sustainability. 
                    Explore our core services that enable farmers to thrive in the modern agricultural ecosystem.
                </p>

                <div className="row">
                    {/* Digital Cooperative Platform */}
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-3">
                        <div className={styles.box}>
                            <FaSeedling className={styles.icon} />
                            <p className={styles.head}>Enhanced Digital Cooperative Platform</p>
                            <p className={styles.content}>
                                Enables small-scale farmers to access high-quality inputs at reduced prices through bulk purchasing.
                            </p>
                        </div>
                    </div>

                    {/* Farm Input Sourcing & Bulk Purchasing */}
                    <div data-aos='fade-up' className="col-md-3">
                        <div className={styles.box}>
                            <FaCartPlus className={styles.icon} />
                            <p className={styles.head}>Farm Input Sourcing & Bulk Purchasing</p>
                            <p className={styles.content}>
                                Save costs and improve efficiency by sourcing quality inputs like seeds and fertilizers at bulk rates through MazaoHub.
                            </p>
                        </div>
                    </div>

                    {/* Market Access & Produce Sales */}
                    <div data-aos='fade-left' className="col-md-3">
                        <div className={styles.box}>
                            <FaHandshake className={styles.icon} />
                            <p className={styles.head}>Market Access & Produce Sales</p>
                            <p className={styles.content}>
                                Connect directly with buyers to ensure fair pricing and eliminate intermediaries, maximizing your profits.
                            </p>
                        </div>
                    </div>

                    {/* Crop Diagnosis Service */}
                    <div data-aos='fade-left' className="col-md-3">
                        <div className={styles.box}>
                            <FaHeartbeat className={styles.icon} />
                            <p className={styles.head}>Crop Diagnosis Service</p>
                            <p className={styles.content}>
                                Scan your crops for pest issues, nutrient deficiencies, or disease signs, and receive expert advice on improving crop health.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;
