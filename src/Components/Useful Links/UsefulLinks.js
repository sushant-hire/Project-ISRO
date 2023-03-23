import React from "react";
import styles from "./UsefulLinks.module.css";

function UsefulLinks() {
  return (
    <div className={styles.MainContainer}>
      <h2>Useful Links</h2>
      <div className={styles.LinksContainer}>
        <p className={styles.LinksHeading}>Related Links</p>
        <p className={styles.LinksHeading}>Government Portal</p>
        <p className={styles.LinksHeading}>Account Summaries</p>
        <p className={styles.LinksHeading}>Official doctrines</p>
        <p className={styles.LinksHeading}>The Total Spectrum</p>
      </div>
    </div>
  );
}

export default UsefulLinks;
