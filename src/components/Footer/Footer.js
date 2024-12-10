import React from "react";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';
import emailIcon from '../../assets/home/email-icon.png'; // Add email icon path here
import appleLogo from '../../assets/home/apple-logo.png';
import playStoreLogo from '../../assets/home/Play-Store.png';


const Footer = () => {
    return (
        <>

            {/* Footer Section */}
            <div style={{backgroundColor:'#253d2c', paddingTop:'89px', paddingBottom:'90px'}}>
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>MazaoHub</p>
                            <p className={styles.text}>
                            MazaoHub is Kenya’s premier digital platform empowering small-scale farmers to thrive. We connect farmers with trusted suppliers, diagnostic tools, and markets, fostering collaboration and sustainable growth. Join us as we transform agriculture, one harvest at a time.
                            </p>

                            {/* Download Apps Section */}
                            <div className={styles.downloadApps}>
                                <p className={styles.text}>Download one of our apps:</p>
                                <div className={styles.appLinks}>
                                    <a href="/" className={styles.appIconWrapper}>
                                        <img src={appleLogo} alt="Download on the App Store" className={styles.appIcon} />
                                    </a>
                                    <a href="/" className={styles.appIconWrapper}>
                                        <img src={playStoreLogo} alt="Download on the Play Store" className={styles.appIcon} />
                                    </a>
                                </div>
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
                            <p className={styles.head}>Working Hour</p>
                            <p className={styles.text}>Mon - Sat : 8:00 - 17:00</p>
                            <p className={styles.text}>Sun : Closed</p>

                            {/* Newsletter Section */}
                            <div className={styles.newsletter}>
                                <div className={styles.newsletterContent}>
                                    <h2 className={styles.newsletterText}>Our Newsletter</h2>
                                    <a href="mailto:info@farmunity.com" className={styles.newsletterButton}>
                                        <img src={emailIcon} alt="Email Icon" className={styles.emailIcon} />
                                        Subscribe
                                    </a>
                                </div>

                                <div className={styles.social_logo}>
                                    <img src={fb} alt="Facebook" className={styles.img} />
                                    <img src={linkdin} alt="LinkedIn" className={styles.img} />
                                    <img src={insta} alt="Instagram" className={styles.img} />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#253d2c', borderTop: 'solid 1px #707070', padding: '15px 0' }}>
                <div className={styles.footerBottom}>
                    <p className={styles.bottom}>Copyright © 2023. All rights reserved</p>
                    <div className={styles.policyLinks}>
                        <a href="/terms-of-use" className={styles.policyLink}>Terms of Use</a>
                        <a href="/privacy-policy" className={styles.policyLink}>Privacy Policy</a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;
