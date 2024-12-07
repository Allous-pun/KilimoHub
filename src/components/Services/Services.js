import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon
import styles from './Services.module.css'; // Import CSS module
import data from './data'; // Assuming data is provided with necessary details

const Services = () => {
  return (
    <div className={`container ${styles.contain} overflow-hidden pb-2`}>
      <p data-aos="slide-right" className={styles.heading}>
        Services
      </p>
      <div>
        <p data-aos="slide-left" className={`mx-auto ${styles.subHeading}`}>
            Enhance efficiency and drive success with cutting-edge solutions
        </p>
      </div>

      <div className={`row ${styles.cont}`}>
        {data &&
          data.map((x) => (
            <div key={x.id} className="col-lg-4 col-md-6">
              <div className={`card ${styles.serviceCard}`}>
                <div className="card-body">
                  <div className={styles.iconContainer}>{x.icon}</div>
                  <h5 className="card-title">{x.heading}</h5>
                  <p className="card-text">{x.content}</p>
                  <a href={x.to} className={styles.arrowIcon}>
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
