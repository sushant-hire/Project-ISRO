import React from "react";
import styles from "./Portals.module.css";

const portals = [
  {
    image: "https://www.isro.gov.in/media_isro/image/accer.png.webp",
    title: "I-GRASP",
    name: "ISRO's Grant In Aid Space Research Programmes",
  },
  {
    image: "https://www.isro.gov.in/media_isro/image/hormenu/stem.png.webp",
    title: "ISRO STEM",
    name: "Science, Technology, Engineering and Mathematics (STEM) Programmes",
  },
  {
    image: "https://www.isro.gov.in/media_isro/image/hormenu/spark.png.webp",
    title: "SPARK",
    name: "Space Tech Park",
  },
  {
    image: "https://www.isro.gov.in/media_isro/image/hormenu/mosdac.jpg.webp",
    title: "MOSDAC",
    name: "Meteorological & Oceanographic Satellite Data Archival Centre",
  },
  {
    image: "https://www.isro.gov.in/media_isro/image/hormenu/issdc.png.webp",
    title: "ISSDC",
    name: "Indian Space Science Data Centre",
  },
  {
    image:
      "https://www.isro.gov.in/media_isro/image/hormenu/bhoonidhi.png.webp",
    title: "BHOONIDHI",
    name: "Remote Sensing",
  },
  {
    image:
      "https://bhuvan-ras2.nrsc.gov.in/cachebcg/bhuvan_img/04/000/000/022/000/000/006.jpeg",
    title: "BHUVAN",
    name: "Geoportal of ISRO",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOGS4ULZO5uwO_7pwNMtIVdvO7pMUS-OIQDQxX4lCmxCh6-guo_FeWk7Pg75MaR8k-tw&usqp=CAU",
    title: "VEDAS",
    name: "Visualisation of Earth observation Data and Archival System",
  },
  {
    image: "https://ndem.nrsc.gov.in/img/icons/NDEM_LOGO.png",
    title: "NDEM",
    name: "National Database for Emergency Management",
  },
];

function Portals() {
  return (
    <div className={styles.MainContainer}>
      <h2>ISRO Portals</h2>
      <div style={{ display: "flex", gap: "4.9rem", justifyContent: "center" }}>
        {portals.map((portal, index) => (
          <div key={index} className={styles.PortalsContainer}>
            <img
              height={90}
              src={portal.image}
              className={styles.PortalImage}
              alt="ISRO Portal"
              title={portal.name}
            />
            <p>{portal.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portals;
