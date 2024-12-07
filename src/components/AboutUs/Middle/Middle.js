import React from "react";
import styles from './Middle.module.css';
import { FaSeedling, FaCartPlus, FaHandshake, FaPiggyBank } from 'react-icons/fa'; // Importing icons

const Middle = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>
                    Discover the Future of Agriculture with FarmUnity
                </p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
                    FarmUnity empowers small-scale farmers with innovative solutions, transforming the agricultural landscape through collaboration, technology, and sustainability. Explore our core services that enable farmers to thrive in the modern agricultural ecosystem.
                </p>

                <div className="row">
                    {/* Digital Cooperative Platform */}
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-3">
                        <div className={styles.box}>
                            <FaSeedling className={styles.icon} />
                            <p className={styles.head}>Digital Cooperative Platform</p>
                            <p className={styles.content}>
                                Join forces with fellow farmers to leverage collective strength, share resources, and access essential agricultural services.
                            </p>
                        </div>
                    </div>

                    {/* Farm Input Sourcing & Bulk Purchasing */}
                    <div data-aos='fade-up' className="col-md-3">
                        <div className={styles.box}>
                            <FaCartPlus className={styles.icon} />
                            <p className={styles.head}>Farm Input Sourcing & Bulk Purchasing</p>
                            <p className={styles.content}>
                                Save costs and improve efficiency by sourcing quality inputs like seeds and fertilizers at bulk rates through FarmUnity.
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

                    {/* Financial Services */}
                    <div data-aos='fade-left' className="col-md-3">
                        <div className={styles.box}>
                            <FaPiggyBank className={styles.icon} />
                            <p className={styles.head}>Financial Services</p>
                            <p className={styles.content}>
                                Access tailored microloans, insurance plans, and savings solutions designed to support your agricultural journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;
