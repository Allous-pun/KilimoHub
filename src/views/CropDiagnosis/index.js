import React from "react";
import SubBanner from '../../components/SubBanner';
import CropDiagnosis from '../../components/CropDiagnosis/CropDiagnosis'; // Import the CropDiagnosis component
import Footer from "../../components/Footer";
import bg from '../../assets/cropdiagnosis.jpg'; // You can reuse the same banner image, or customize as needed

const CropDiagnosisHome = () => {
  return (
    <>
      {/* Banner Section */}
      <section>
        <SubBanner heading='Crop Diagnosis' subHeading='Home / Crop Diagnosis' img={bg} />
      </section>

      {/* Crop Diagnosis Section */}
      <section>
        <CropDiagnosis />
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default CropDiagnosisHome;
