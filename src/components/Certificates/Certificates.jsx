import React from "react";
import "./Certificates.css";

function Certificates() {
  return (
    <div className="container certificates-container">
      <div className="certificates ">
        <div className="certificates-img1"></div>
        <div className="certificates-info">
          <h3 className="name">FullStack Developer</h3>
          <h4 className="about">Henry's bootcamp</h4>
          <a
            href="https://drive.google.com/file/d/1JLUPDTRFdnlPDOT6_BakwOB69n326kEa/view?usp=drive_link"
            target={"blank"}
            className="contact-certificates"
          >
            <span>See More...</span>
          </a>
        </div>
      </div>
      <div className="certificates">
        <div className="certificates-img2"></div>
        <div className="certificates-info">
          <h3 className="name">EF English Test</h3>
          <h4 className="about">English Level certification</h4>
          <a
            href="https://www.efset.org/cert/WvW3G8"
            target={"blank"}
            className="contact-certificates"
          >
            <span>See More...</span>
          </a>
        </div>
      </div>
      {/* <div className="certificates">
        <div className="certificates-img3"></div>
        <div className="certificates-info">
          <h3 className="name">Cooming Soon!</h3>
          <h4 className="about">Google UX Design Professional Certificate</h4>
        </div>
      </div> */}
    </div>
  );
}

export default Certificates;
