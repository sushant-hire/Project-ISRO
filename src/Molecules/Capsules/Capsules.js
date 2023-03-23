import React, { useState } from "react";
import styles from "./Capsules.module.css";

function Capsules() {
  const capsulesData = [
    {
      id: 1,
      title: "CAREERS",
      content:
        "Come, become a part of the workforce of the nation's prestigious space agency-be it in the technical or administrative areas? ISRO has several openings for recruitment to a plethora of posts. All recruitment notices will be published here.",
    },
    {
      id: 2,
      title: "ABOUT US",
      content:
        "We are a space agency dedicated to the development of space technology and its application to national needs. Our vision is to harness space technology for national development while pursuing space science research and planetary exploration.",
    },
    {
      id: 3,
      title: "MISSIONS",
      content:
        "We have undertaken many successful missions to explore the moon, Mars, and other planets. We have also launched communication satellites and remote sensing satellites for various applications such as weather forecasting, disaster management, and resource mapping.",
    },
    {
      id: 4,
      title: "CONTACT US",
      content:
        "You can contact us at the following address: Indian Space Research Organisation, Department of Space, Government of India, Antariksh Bhavan, New BEL Road, Bangalore - 560231, India.",
    },
  ];

  const [currentCapsule, setCurrentCapsule] = useState(0);

  const handleMouseEnter = (id) => {
    setCurrentCapsule(id);
  };

  const handleMouseLeave = () => {
    setCurrentCapsule(0);
  };

  return (
    <div
      className={styles.MainCapsuleContainer}
      onMouseLeave={handleMouseLeave}
    >
      {capsulesData.map((capsule) => (
        <div
          key={capsule.id}
          className={`capsule ${
            currentCapsule === capsule.id ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(capsule.id)}
        >
          <h4 className={styles.CapsuleHeading}>
            {currentCapsule === capsule.id ? capsule.content : capsule.title}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default Capsules;
