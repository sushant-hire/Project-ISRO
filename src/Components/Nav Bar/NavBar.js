import React from "react";
import styles from "./NavBar.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";

function NavBar() {
  return (
    <nav className={styles.NavBarContainer}>
      <ul className={styles.NavListContainer}>
        <li>English </li> | <li>हिंदी</li> | <li>Sitemap</li> |{" "}
        <li>Contact us</li> | <li>Feedback</li> | <li>RTI</li> | <li>Career</li>{" "}
        | <li>Tender</li> |<li>FAQ</li>
        <li className={styles.RightNavList}>
          <FacebookIcon fontSize="small" />
        </li>
        <li>
          <TwitterIcon fontSize="small" />
        </li>
        <li>
          <YouTubeIcon fontSize="small" />
        </li>
        <li>
          <InstagramIcon fontSize="small" />
        </li>
        <li>
          <TextIncreaseIcon fontSize="small" />
        </li>
        <li>A</li>
        <li>
          <TextDecreaseIcon fontSize="small" />
        </li>
        <li>Skip to main content</li>
      </ul>
    </nav>
  );
}

export default NavBar;
