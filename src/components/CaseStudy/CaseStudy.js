import React, { useState } from 'react';
import styles from './CaseStudy.module.css';
import { Link } from 'react-router-dom';
import farmUnityData from './fakeData';

const CaseStudy = () => {
    const [data, setData] = useState(farmUnityData); // Use farmUnityData here
    const [active, setActive] = useState([true, false, false, false]);

    // Update the filterData function to match the new categories
    const filterData = (category) => {
        let temp = farmUnityData.filter((x) => x.category === category);
        setData([...temp]);
    }

    const activeNav = (i) => {
        let temp = [false, false, false, false];
        temp[i] = true;
        setActive([...temp]);
    }

    return (
        <div className={`container ${styles.contain} overflow-hidden`}>
            <p className={styles.head} data-aos='slide-right'>WHAT WE DO</p>
            <div data-aos='slide-left'>
                <p className={styles.our}>KilimoHub &nbsp;</p>
                <p className={styles.study}>Projects</p>
            </div>

            <div className={`${styles.grp_btn}`} data-aos='fade'>
                {/* Filter buttons for categories */}
                <p onClick={() => { setData(farmUnityData); activeNav(0) }} className={`${styles.filter} ${active[0] ? styles.active : null}`}>ALL</p>
                <p onClick={() => { filterData('cooperative tools'); activeNav(1) }} className={`${styles.filter} ${active[1] ? styles.active : null}`}>COOPERATIVE TOOLS</p>
                <p onClick={() => { filterData('marketplace'); activeNav(2) }} className={`${styles.filter} ${active[2] ? styles.active : null}`}>MARKETPLACE</p>
                <p onClick={() => { filterData('crop diagnosis'); activeNav(3) }} className={`${styles.filter} ${active[3] ? styles.active : null}`}>CROP DIAGNOSIS</p>
                <p onClick={() => { filterData('bulk purchasing'); activeNav(4) }} className={`${styles.filter} ${active[4] ? styles.active : null}`}>BULK PURCHASING</p>
            </div>

            <div className='row mb-2'>
                {
                    data.map((x) => (
                        <div key={x.id} className={`col-md-4 col-sm-6 mt-4`} data-aos='fade'>
                            <Link to={`/projectDetails?id=${x.id}`} style={{ textDecoration: "none" }}>
                                <div className={styles.img} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(5, 25, 81, .55)), url(${x.img})` }}>
                                    <p className={styles.imgText1}>{x.designation}</p>
                                    <p className={styles.imgText2}>{x.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>

            {/* "More Products Coming Soon" Section */}
            <div className={styles.comingSoonSection} data-aos='fade'>
                <p className={styles.comingSoonText}>More Products Coming Soon</p>
            </div>
        </div>
    );
}

export default CaseStudy;
