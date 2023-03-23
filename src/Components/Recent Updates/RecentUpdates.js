import React from "react";
import styles from "./RecentUpdates.module.css";

function RecentUpdates() {
  return (
    <div className={styles.MainContainer}>
      <h2>Recent Updates</h2>
      <div className={styles.UpdateCards}>
        <div className={styles.UpdateCard}>
          <img
            height={300}
            width={300}
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/sslv_d2a-sixteen_nine.jpg?VersionId=rwPJq8FlFAExyfE6ZRqiLrCOutyHGnvu"
            alt="G20 Logo"
            className={styles.UpdatesImages}
          />
          <div className={styles.UpdatesDetails}>
            <h4 className={styles.UpdatesHeading}>SSLV-D2/EOS-07 MISSION</h4>
            <p>Launched on: February 10, 2023</p>
          </div>
        </div>
        <div className={styles.UpdateCard}>
          <img
            height={300}
            width={300}

            src="https://static.theprint.in/wp-content/uploads/2022/11/Modi-g20-presidency.jpg"
            alt="G20 Logo"
            className={styles.UpdatesImages}
          />
          <div className={styles.UpdatesDetails}>
            <h4 className={styles.UpdatesHeading}>The G20 Leaders' Summit</h4>
            <p>India's First G20 Presidency</p>
          </div>
        </div>
        <div className={styles.UpdateCard}>
          <img
            height={300}
            width={300}
            src="https://img1.wsimg.com/isteam/stock/nyajweG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280"
            alt="G20 Logo"
            className={styles.UpdatesImages}
          />
          <div className={styles.UpdatesDetails}>
            <h4 className={styles.UpdatesHeading}>PSLV-C54/EOS-06 Mission</h4>
            <p>Launched on: November 26, 2022</p>
          </div>
        </div>
        <div className={styles.UpdateCard}>
          <img
            height={300}
            width={300}

            src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/08/13/f878030d0deaf63ee8b69a270833808e.jpg?quality=80&zoom=1&ssl=1"
            alt="G20 Logo"
            className={styles.UpdatesImages}
          />
          <div className={styles.UpdatesDetails}>
            <h4 className={styles.UpdatesHeading}>Azadi Ka Amrit Mahotsav</h4>
            <p>Launched on: February 10, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentUpdates;
