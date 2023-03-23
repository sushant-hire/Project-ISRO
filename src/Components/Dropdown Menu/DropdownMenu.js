import React, { useState } from "react";
import styles from "./DropdownMenu.module.css";
import { Link } from "react-router-dom";

const menus = [
  {
    name: "About",
    title: "About",
    links: [
      { name: "Profile", path: "/data/1" },
      { name: "Objectives", path: "/data/2" },
      { name: "Citizen's Charter", path: "/data/3" },
      { name: "Genesis", path: "/data/4" },
      { name: "Chairmen, ISRO", path: "/data/5" },
    ],
  },
  {
    name: "Activities",
    title: "Activities",
    links: [
      { name: "Missions Accomplished", path: "/data/6" },
      { name: "Launchers", path: "/data/7" },
      { name: "Space Applications", path: "/data/8" },
      { name: "Research & Development", path: "/data/9" },
      { name: "Gaganyaan", path: "/data/10" },
    ],
  },
  {
    name: "Services",
    title: "Services",
    links: [
      { name: "Launch Services", path: "/data/11" },
      { name: "Mission Support", path: "/data/12" },
      { name: "Ground System Support", path: "/data/13" },
      { name: "Satellite Navigation Services", path: "/data/14" },
      { name: "Transfer Orbit Service", path: "/data/15" },
    ],
  },
  {
    name: "Programmes",
    title: "Programmes",
    links: [
      { name: "Academic Courses", path: "/data/16" },
      { name: "Fellowships", path: "/data/17" },
      { name: "Space Merchandise", path: "/data/18" },
      { name: "UNNATI", path: "/data/19" },
      { name: "YUVIKA", path: "/data/20" },
    ],
  },
  {
    name: "Resources",
    title: "Resources",
    links: [
      { name: "Database for Emergency Management", path: "/data/21" },
      { name: "I-GRASP", path: "/data/22" },
      { name: "Landslide Atlas of India", path: "/data/23" },
      { name: "MOSDAC", path: "/data/24" },
      { name: "Science Data", path: "/data/25" },
    ],
  },
  {
    name: "Engage with Us",
    title: "Engage with Us",
    links: [
      { name: "Academia", path: "/data/26" },
      { name: "Educators", path: "/data/27" },
      { name: "Industry", path: "/data/28" },
      { name: "Researchers", path: "/data/29" },
      { name: "Visitors", path: "/data/30" },
    ],
  },
];

function DropdownMenu() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const isDropdownActive = (dropdownName) => activeDropdown === dropdownName;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarItems}>
        <li>
          <Link to="/" className={styles.navbarLink}>
            Home
          </Link>
        </li>
        {menus.map(({ name, links, title }) => (
          <li key={name} className={styles.dropdown}>
            <p
              className={styles.navbarLink}
              onClick={() => toggleDropdown(name)}
              title={title}
            >
              {name}
            </p>
            {isDropdownActive(name) && (
              <ul className={styles.dropdownMenu}>
                {links.map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      to={path}
                      className={styles.dropdownLink}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DropdownMenu;
