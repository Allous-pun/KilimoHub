import React from "react";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';
import emailIcon from '../../assets/home/email-icon.png'; // Add email icon path here

const Footer = () => {
    return (
        <>
            {/* Newsletter Section */}
            <div className={styles.newsletter}>
                <div className={styles.newsletterContent}>
                    <h2 className={styles.newsletterText}>Stay Updated with Our Newsletter</h2>
                    <a href="mailto:info@farmunity.com" className={styles.newsletterButton}>
                        <img src={emailIcon} alt="Email Icon" className={styles.emailIcon} />
                        Subscribe
                    </a>
                </div>
            </div>

            {/* Footer Section */}
            <div style={{backgroundColor:'#253d2c', paddingTop:'89px', paddingBottom:'90px'}}>
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>FarmUnity</p>
                            <p className={styles.text}>Empowering farmers through digital innovation</p>
                            <div className={styles.social_logo}>
                                <img src={fb} alt="Facebook" className={styles.img} />
                                <img src={linkdin} alt="LinkedIn" className={styles.img} />
                                <img src={insta} alt="Instagram" className={styles.img} />
                            </div>
                        </div>

                        {/* Updated Services Column */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Services</p>
                            <ul className={styles.serviceList}>
                                <li className={styles.text}>Digital Cooperative Platform</li>
                                <li className={styles.text}>Farm Input Sourcing & Bulk Purchasing</li>
                                <li className={styles.text}>Market Access & Produce Sales</li>
                                <li className={styles.text}>Financial Services (Microloans & Insurance)</li>
                            </ul>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Head Office</p>
                            <p className={styles.text}>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            <p className={styles.text}>deanna.curtis@example.com</p>
                            <p className={styles.text}>(671) 555-0110</p>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Opening Hour</p>
                            <p className={styles.text}>Mon - Sat : 8:00 - 17:00</p>
                            <p className={styles.text}>Sun : Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: '#253d2c', borderTop: 'solid 1px #707070'}}>
                <p className={styles.bottom}>Copyright © 2023. All rights reserved</p>
            </div>
        </>
    );
}

export default Footer;
