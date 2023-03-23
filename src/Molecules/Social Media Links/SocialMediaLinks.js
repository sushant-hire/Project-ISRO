import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import styles from "./SocialMediaLinks.module.css";

function SocialMediaLinks() {
  const socialMediaIcons = [
    {
      icon: <FacebookIcon fontSize="small" />,
      url: "https://www.facebook.com/ISRO",
      title: "Facebook",
    },
    {
      icon: <TwitterIcon fontSize="small" />,
      url: "https://twitter.com/isro",
      title: "Twitter",
    },
    {
      icon: <YouTubeIcon fontSize="small" />,
      url: "https://www.youtube.com/channel/UCw5hEVOTfz_AfzsNFWyNlNg",
      title: "YouTube",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      url: "https://www.instagram.com/isro.in/?hl=en",
      title: "Instagram",
    },
    { icon: <TextIncreaseIcon fontSize="small" /> },
    { icon: <TextDecreaseIcon fontSize="small" /> },
  ];

  return (
    <>
      {socialMediaIcons.map((item, index) => (
        <li key={index}>
          <a
            href={item.url}
            className={styles.SocialMediaIcon}
            title={item.title}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </>
  );
}

export default SocialMediaLinks;
