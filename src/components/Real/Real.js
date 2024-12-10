import React from "react";
import styles from './Real.module.css';
import farmUnityImg from '../../assets/home/improves.png';

const Real = () => {
    return (
        <div className="mb-5 overflow-hidden">
            <div className="row g-0">
                <div className={`col-md-6 ${styles.imgDiv}`}>
                    <img data-aos='slide-right' data-aos-offset="150" src={farmUnityImg} alt="FarmUnity" className={styles.img} />
                </div>
                <div className="col-md-6">
                    <div className={styles.text}>
                        <p data-aos='slide-right' data-aos-offset="150" className={styles.heading}>MazaoHub</p>
                        <p data-aos='slide-left' data-aos-offset="150" className={styles.subHeading}>Empowering Farmers, Building Communities</p>
                        <p data-aos='zoom-in' data-aos-offset="150" className={styles.content}>
                            MazaoHub transforms agriculture by connecting farmers to resources, markets. 
                            Our platform promotes collaborative farming, sustainable practices, and innovative technology 
                            to help farmers maximize yields, reduce costs, and thrive in a competitive market.
                        </p>
                        <div data-aos='zoom-in' style={{ textAlign: 'left' }}>
                            <button className={`btn custom_btn ${styles.btn}`}>JOIN THE COMMUNITY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Real;
