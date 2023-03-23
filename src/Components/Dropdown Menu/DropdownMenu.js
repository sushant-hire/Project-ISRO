// import React, { useState } from "react";
// import styles from "./DropdownMenu.module.css";
// import { Link } from "react-router-dom";

// function DropdownMenu() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (dropdownName) => {
//     setActiveDropdown((prevState) => {
//       if (prevState === dropdownName) {
//         return null;
//       } else {
//         return dropdownName;
//       }
//     });
//   };

//   const isDropdownActive = (dropdownName) => {
//     return activeDropdown === dropdownName;
//   };

//   return (
//     <nav className={styles.navbar}>
//       <ul className={styles.navbarItems}>
//         <li>
//           <Link to="/" className={styles.navbarLink}>
//             Home
//           </Link>
//         </li>
//         <li className={styles.dropdown}>
//           <a
//             href="#"
//             className={styles.navbarLink}
//             onClick={() => toggleDropdown("about")}
//           >
//             About
//           </a>
//           {isDropdownActive("about") && (
//             <ul className={styles.dropdownMenu}>
//               <li>
//                 <Link
//                   to="/data/1"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/2"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Objectives
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/3"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Citizen's Charter
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/4"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Genesis
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/5"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Chairmen, ISRO
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className={styles.dropdown}>
//           <a
//             href="#"
//             className={styles.navbarLink}
//             onClick={() => toggleDropdown("activites")}
//           >
//             Activities
//           </a>
//           {isDropdownActive("activites") && (
//             <ul className={styles.dropdownMenu}>
//               <li>
//                 <Link
//                   to="/data/6"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Missions Accomplished
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/7"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Launchers
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/8"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Space Applications
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/9"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Reasearch & Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/10"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Gaganyaan
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className={styles.dropdown}>
//           <a
//             href="#"
//             className={styles.navbarLink}
//             onClick={() => toggleDropdown("services")}
//           >
//             Services
//           </a>
//           {isDropdownActive("services") && (
//             <ul className={styles.dropdownMenu}>
//               <li>
//                 <Link
//                   to="/data/11"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Launch Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/12"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Mission Support
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/13"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Ground System Support
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/14"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Satellite Navigation Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/15"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Transfer Orbit Service
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className={styles.dropdown}>
//           <a
//             href="#"
//             className={styles.navbarLink}
//             onClick={() => toggleDropdown("programmes")}
//           >
//             Programmes
//           </a>
//           {isDropdownActive("programmes") && (
//             <ul className={styles.dropdownMenu}>
//               <li>
//                 <Link
//                   to="/data/16"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Academic Courses
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/17"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Fellowships
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/18"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Space Merchandise
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/19"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   UNNATI
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/20"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   YUVIKA
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className={styles.dropdown}>
//           <a
//             href="#"
//             className={styles.navbarLink}
//             onClick={() => toggleDropdown("resources")}
//           >
//             Resources
//           </a>
//           {isDropdownActive("resources") && (
//             <ul className={styles.dropdownMenu}>
//               <li>
//                 <Link
//                   to="/data/21"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Database for Emergency Management
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/22"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   I-GRASP
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/23"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Landslide Atlas of India
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/24"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   MOSDAC
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/25"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Science Data
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className={styles.dropdown}>
//           <a
//             href="#"
//             className={styles.navbarLink}
//             onClick={() => toggleDropdown("engageWithUs")}
//           >
//             Engage With Us
//           </a>
//           {isDropdownActive("engageWithUs") && (
//             <ul className={styles.dropdownMenu}>
//               <li>
//                 <Link
//                   to="/data/26"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Academia
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/27"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Educators
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/28"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Industry
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/29"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Researchers
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/data/30"
//                   className={styles.dropdownLink}
//                   // onClick={() => setActiveDropdown(null)}
//                 >
//                   Visitors
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default DropdownMenu;

import React, { useState } from "react";
import styles from "./DropdownMenu.module.css";
import { Link } from "react-router-dom";

const menus = [
  {
    name: "About",
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
    links: [
      { name: "Satellite Navigation", path: "/data/16" },
      { name: "Space Science", path: "/data/17" },
      { name: "Earth Observation", path: "/data/18" },
      { name: "Planetary Exploration", path: "/data/19" },
      { name: "Human Spaceflight", path: "/data/20" },
    ],
  },
  {
    name: "Resources",
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
        {menus.map(({ name, links }) => (
          <li key={name} className={styles.dropdown}>
            <a
              href="#"
              className={styles.navbarLink}
              onClick={() => toggleDropdown(name)}
            >
              {name}
            </a>
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
