import React from "react";
import styles from "./ServicesHome.module.css";
import ServiceHome from "../ServiceHome/ServiceHome";
import data from "./data";

const ServicesHome = () => {
    return (
        <div className={`container ${styles.contain} overflow-hidden pb-4`}>
            <p data-aos="slide-right" className={styles.heading}>
                MazaoHub Services
            </p>
            <div>
                <p
                    data-aos="slide-left"
                    className={`mx-auto ${styles.subHeading}`}
                >
                    Empowering small-scale farmers with innovative tools to connect, collaborate, and thrive in a sustainable agricultural ecosystem. From collective buying power to market access and expert advice, we provide everything you need to grow your farm and your future.
                </p>
            </div>

            <div className="row">
                {data.map((x) => (
                    <div key={x.id} className="col-lg-4 col-md-6">
                        <ServiceHome
                            id={x.id}
                            heading={x.heading}
                            content={x.content}
                            to={x.to}
                            icon={x.icon} // Pass the icon as a prop
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesHome;
