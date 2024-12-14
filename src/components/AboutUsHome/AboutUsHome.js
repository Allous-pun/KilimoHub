import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';

const AboutUsHome = () => {
    return (
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p data-aos="slide-right" className={styles.head}>ABOUT US</p>
                        <p data-aos="slide-left" className={styles.heading}>Empowering Farmers through Digital Innovation</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>
                                KilimoHub is a digital farming cooperative platform dedicated to revolutionizing agriculture through technology. 
                                With a commitment to sustainability and innovation, we bring farmers together to achieve more—whether it’s sourcing quality inputs, accessing financial services, or selling produce in competitive markets.
                                Our mission is to empower farming communities with the tools, knowledge, and support they need to thrive in a rapidly evolving agricultural landscape.
                            </p>
                        </div>
                        <div data-aos="zoom-in" style={{ textAlign: 'left' }}>
                            <button className={`btn custom_btn ${styles.btn}`}> JOIN OUR COMMUNITY</button>
                        </div>
                    </div>

                    <div className="col-md-6 mt-5 overflow-hidden">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1}`}>
                                <img data-aos="zoom-in-right" src={img1} alt="FarmUnity Collaboration" />
                            </div>
                            <div className={styles.column}>
                                <img data-aos="zoom-in-left" src={img2} style={{ width: '110%' }} alt="Farmers at Work" />
                                <img data-aos="zoom-in-left" src={img3} alt="FarmTech Solutions" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUsHome;