import React from "react";
import Footer from "../../components/Footer";
import DigitalCooperative from '../../components/DigitalCooperative/digital-cooperative';

const DigitalCooperativePage = () => {  // Updated function name to avoid conflict

  return (
    <>
      {/* Digital Cooperative Section */}
      <section>
        <DigitalCooperative />
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default DigitalCooperativePage;  // Export the updated component
