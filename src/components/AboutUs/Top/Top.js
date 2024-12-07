import React from "react";
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';
import img2 from '../../../assets/aboutUs/img2.png';

const Top = () => {
    return (
        <div className={`container overflow-hidden`}>
            <p data-aos='slide-right' className={styles.heading}>About FarmUnity</p>
            <p data-aos='slide-left' className={styles.subHeading}>Empowering Farmers, Revolutionizing Agriculture</p>
            <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>
                FarmUnity is a digital platform designed to empower small-scale farmers by addressing the critical challenges they face in agriculture. 
                Acting as a one-stop solution, FarmUnity connects farmers with buyers, input suppliers, financial institutions, and agro-professionals, enabling them to operate efficiently and profitably.
            </p>

            <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                <div data-aos='slide-right' className={`col-md-6`}>
                    <p className={styles.about}>About Us</p>
                    <p className={styles.creativity}>We Foster Collaboration and Innovation</p>
                    <p className={styles.contn}>
                        By leveraging technology, FarmUnity facilitates:
                        <ul>
                            <li><b>Collective Purchasing:</b> Farmers pool resources to reduce costs for inputs like seeds, fertilizers, and tools.</li>
                            <li><b>Direct Market Access:</b> Farmers sell produce directly to wholesalers, retailers, and cooperatives at fair prices.</li>
                            <li><b>Financial Inclusion:</b> Partnerships with institutions provide microloans, insurance, and savings plans tailored for farmers.</li>
                            <li><b>Real-Time Data Insights:</b> Farmers access market trends, weather forecasts, and crop-specific advice for optimal productivity.</li>
                            <li><b>Supportive Ecosystem:</b> Agro-professionals, extension officers, and training resources ensure farmers succeed.</li>
                        </ul>
                        Accessible via mobile and web applications, FarmUnity is tailored to rural areas with multilingual support and offline connectivity through SMS and USSD. 
                        Our vision is to modernize and democratize farming for small-scale producers worldwide.
                    </p>
                </div>
                <div data-aos='slide-left' data-aos-offset='50' className={`col-md-6 ${styles.imgContain}`}>
                    <img src={img1} alt="FarmUnity" className={styles.img1} />
                </div>
            </div>

            <div data-aos='fade-up' className='row' style={{ textAlign: 'left' }}>
                <div className={`col-md-6`}>
                    <img src={img2} alt="FarmUnity Collaboration" className={styles.img2} />
                </div>
            </div>
        </div>
    );
};

export default Top;
