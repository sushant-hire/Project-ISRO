import React from "react";
import styles from "./UsefulLinks.module.css";

function UsefulLinks() {
  return (
    <div className={styles.MainContainer}>
      <h2>Useful Links</h2>
      <div className={styles.LinksContainer}>
        <a
          className={styles.UsefulLinks}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.lpsc.gov.in/"
        >
          <p
            title="Liquid Propulsion Systems Centre"
            className={styles.LinksHeading}
          >
            LPSC
          </p>
        </a>
        <a
          className={styles.UsefulLinks}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ursc.gov.in/"
        >
          <p title="U R Rao Satellite Centre" className={styles.LinksHeading}>
            URSC
          </p>
        </a>
        <a
          className={styles.UsefulLinks}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.iist.ac.in/"
        >
          <p
            title="Indian Institute of Space Science and Technology"
            className={styles.LinksHeading}
          >
            IIST
          </p>
        </a>
        <a
          className={styles.UsefulLinks}
          target="_blank"
          rel="noopener noreferrer"
          href="https://dea.gov.in/"
        >
          <p
            title="Indian Department of Economic Affairs"
            className={styles.LinksHeading}
          >
            IDEA
          </p>
        </a>
        <a
          className={styles.UsefulLinks}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.scl.gov.in/"
        >
          <p
            title="Indian Semi-Conductor Laboratory"
            className={styles.LinksHeading}
          >
            ISCL
          </p>
        </a>
      </div>
    </div>
  );
}

export default UsefulLinks;
