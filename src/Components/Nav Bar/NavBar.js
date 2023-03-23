import React from "react";
import { Link } from "react-router-dom";
import SocialMediaLinks from "../../Molecules/Social Media Links/SocialMediaLinks";
import styles from "./NavBar.module.css";

function NavBar() {
  const navItems = [
    { label: "English", key: "English" },
    { label: "हिंदी", key: "Hindi" },
    { label: "Sitemap", key: "Sitemap", path: "/data/31" },
    { label: "RTI", key: "RTI", path: "/data/32" },
    { label: "Career", key: "Career", path: "/data/33" },
    { label: "Tender", key: "Tender", path: "/data/34" },
    { label: "FAQ", key: "FAQ", path: "/data/35" },
  ];

  return (
    <nav className={styles.NavBarContainer}>
      <ul className={styles.NavListContainer}>
        {navItems.map((item) => (
          <Link to={item.path} key={item.key} className={styles.Links}>
            {" "}
            <li title={item.key}>{item.label}</li>
          </Link>
        ))}
        <a className={styles.ContactUs} href="#ContactUs">
          Contact us
        </a>
        <span className={styles.NavBarSecondHalf}>
          <SocialMediaLinks />
          <a className={styles.SkipToMainContent} href="#MainContent">
            Skip to main content
          </a>
        </span>
      </ul>
    </nav>
  );
}

export default NavBar;
