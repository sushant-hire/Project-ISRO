import React from "react";
import styles from "./RecentUpdates.module.css";

function RecentUpdates() {
  return (
    <div className={styles.MainContainer}>
      <h2>Recent Updates</h2>
      <div className={styles.UpdateCards}>
        <div className={styles.UpdateCard}>
          <a
            href="https://en.wikipedia.org/wiki/SSLV-D2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              height={300}
              width={300}
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/sslv_d2a-sixteen_nine.jpg?VersionId=rwPJq8FlFAExyfE6ZRqiLrCOutyHGnvu"
              alt="G20 Logo"
              className={styles.UpdatesImages}
              title="SSLV-D2/EOS-07 MISSION"
            />
          </a>
          <div className={styles.UpdatesDetails}>
            <h4 className={styles.UpdatesHeading}>SSLV-D2/EOS-07 MISSION</h4>
            <p>Launched on: February 10, 2023</p>
          </div>
        </div>
        <div className={styles.UpdateCard}>
          <a
            href="https://www.g20.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              height={300}
              width={300}
              src="https://static.theprint.in/wp-content/uploads/2022/11/Modi-g20-presidency.jpg"
              alt="G20 Logo"
              className={styles.UpdatesImages}
              title="The G20 Leaders' Summit"
            />
          </a>
          <div className={styles.UpdatesDetails}>
            <h4 className={styles.UpdatesHeading}>The G20 Leaders' Summit</h4>
            <p>India's First G20 Presidency</p>
          </div>
        </div>
        <div className={styles.UpdateCard}>
          <a
            href="https://en.wikipedia.org/wiki/PSLV-C54"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              height={300}
              width={300}
              src="https://img1.wsimg.com/isteam/stock/nyajweG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280"
              alt="PSLV-C54/EOS-06 Mission"
              className={styles.UpdatesImages}
              title="PSLV-C54/EOS-06 Mission"
            />
          </a>
          <div className={styles.UpdatesDetails}>
            <h4 className={styles.UpdatesHeading}>PSLV-C54/EOS-06 Mission</h4>
            <p>Launched on: November 26, 2022</p>
          </div>
        </div>
        <div className={styles.UpdateCard}>
          <a
            href="https://amritmahotsav.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              height={300}
              width={300}
              src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/08/13/f878030d0deaf63ee8b69a270833808e.jpg?quality=80&zoom=1&ssl=1"
              alt="Azadi Ka Amrit Mahotsav"
              className={styles.UpdatesImages}
              title="Azadi Ka Amrit Mahotsav"
            />
          </a>
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
