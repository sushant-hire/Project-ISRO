import React from "react";
import styles from "./NewsFlash.module.css";

function NewsFlash() {
  return (
    <div className={styles.MainMarqueeContainer}>
      <marquee
        className={styles.NewsMarquee}
        direction="left"
        scrollamount="10"
      >
        <span>SSLV-D2/EOS-07 Mission is successfully accomplished.</span>
        <span className={styles.Gap}></span>
        <span>
          Rozgar Mela: 330+ Appointment Orders issued till December 2022
        </span>
      </marquee>
    </div>
  );
}

export default NewsFlash;
