import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.CopyrightText}>
      <p>
        © Copyright <span className={styles.SpanTag}>2023 ISRO</span>. All
        Rights Reserved.
      </p>
      <p>From Sushant with 💙</p>
      <img
        width={60}
        height={60}
        src="https://upload.wikimedia.org/wikipedia/commons/0/06/Double_arrow_neon_red_up.png"
        className={styles.FixedButton}
        onClick={handleClick}
        alt="spaceship"
      />
    </div>
  );
}

export default Footer;
