import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.MainHeaderContainer}>
      <img
        className={styles.ISROLogo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/225px-Indian_Space_Research_Organisation_Logo.svg.png"
        alt="isrologo"
      />
      <div className={styles.HeadingsContainer}>
        <p className={styles.Heading1}>
          भारतीय अंतरिक्ष रिसर्च संगठन, अंतरिक्ष विभाग
        </p>
        <p className={styles.Heading2}>
          Indian Space Research Organisation, Department of Space
        </p>
        <p className={styles.Heading3}>भारत सरकार / Government of India</p>
      </div>
      <img
        className={styles.G20Logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/G20_India_2023_logo.svg/390px-G20_India_2023_logo.svg.png"
        alt="G20Logo"
      />

      <img
        className={styles.SMJLogo}
        src="https://www.helloscholar.in/wp-content/uploads/2019/12/upsc-logo-new.png"
        alt="SMJLogo"
      />
    </header>
  );
}

export default Header;
