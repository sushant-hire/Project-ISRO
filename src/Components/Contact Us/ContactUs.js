import React from "react";
import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <div className={styles.ContactUsContainer}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.9rem",
          alignItems: "flex-start",
          listStyle: "none",
        }}
      >
        <h4>Address</h4>
        ISRO Headquarters, Antariksh Bhavan, New BEL Road Bengaluru-560 094
        Phone: +91 80 22172294 / 96 Email: isropr@isro.gov.in
        <div style={{ display: "flex", gap: "2rem", marginTop: "0.7rem" }}>
          <img
            src="https://geoportal.mp.gov.in/geoportal/images/Indiagovin.svg"
            height={80}
            alt="India Gov"
          />
          <img
            src="https://zeevector.com/wp-content/uploads/2021/02/Make-in-India-Logo-PNG-HD.png"
            height={70}
            alt="India Digital"
          />
        </div>
      </ul>
      <ul className={styles.ContactUsPart}>
        <li>Right to Information</li> <li>Feedback</li> <li>Contact us</li>{" "}
        <li>Press Release</li> <li>Freuently Asked Questions</li>{" "}
        <li>Website Policy</li> <li>Copyright Policy</li>
      </ul>
      <ul className={styles.ContactUsPart}>
        <li>Hyper Linking Policy</li> <li>Terms of Use</li> <li>Careers</li>{" "}
        <li>Archives</li> <li>Web Information Manager</li> <li>Space Policy</li>{" "}
        <li>Parliament Questions</li>
      </ul>{" "}
      <ul className={styles.ContactUsPart}>
        <li>e-Saral Hindi Vakyakosh</li> <li>Tenders</li> <li>Related Links</li>{" "}
        <li>CPC Pension Revision Status</li> <li>Press Information Bureau</li>{" "}
        <li>Site Map</li> <li>Help / Assistance</li>
      </ul>
    </div>
  );
}

export default ContactUs;
