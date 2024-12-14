import React from "react";
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';
import img2 from '../../../assets/aboutUs/img2.png';

const Top = () => {
    return (
        <div className={`container overflow-hidden`}>
            <p data-aos='slide-right' className={styles.heading}>About KilimoHub</p>
            <p data-aos='slide-left' className={styles.subHeading}>Your Partner in Better Yield</p>
            <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>
                KilimoHub is a digital platform designed to empower small-scale farmers by addressing the critical challenges they face in agriculture. 
                Acting as a one-stop solution, KilimoHub connects farmers with buyers, input suppliers, and agro-professionals, enabling them to operate efficiently and profitably.
            </p>


            <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                <div data-aos='slide-right' className={`col-md-6`}>
                    <p className={styles.about}>About Us</p>
                    <p className={styles.creativity}>We Foster Collaboration and Innovation</p>
                    <p className={styles.contn}>
                        KilimoHub is a digital platform designed to empower small-scale farmers by addressing the critical challenges they face in agriculture. The platform serves as a one-stop solution that connects farmers with buyers, input suppliers, financial institutions, and agro-professionals, enabling them to operate more efficiently and profitably.
                        <ul>
                            <li><b>Collective Purchasing:</b> Farmers pool their resources to buy inputs like seeds, fertilizers, and tools in bulk, reducing costs significantly.</li>
                            <li><b>Direct Market Access:</b> The platform eliminates exploitative intermediaries, allowing farmers to sell their produce directly to wholesalers, retailers, and cooperatives at fair prices.</li>
                            <li><b>Real-Time Data Insights:</b> Farmers are equipped with data on market trends, weather forecasts, and crop-specific advice, enabling them to make informed decisions and optimize their productivity.</li>
                            <li><b>Supportive Ecosystem:</b> By integrating agro-professionals, extension officers, and training resources, MazaoHub ensures farmers have access to the expertise and support they need to succeed.</li>
                        </ul>
                        Accessible via mobile and web applications, KilimoHub is designed to cater to farmers in rural areas by offering multilingual support, mobile-friendly interfaces, and offline connectivity options through SMS and USSD. The platform’s holistic approach fosters collaboration, enhances productivity, and creates a sustainable agricultural ecosystem that uplifts farming communities and contributes to global food security. 
                        With a vision to transform agriculture and a mission to empower farmers, KilimoHub is not just a platform; it’s a movement to modernize and democratize farming for small-scale producers worldwide.
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
