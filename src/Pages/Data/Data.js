import React, { useState, useEffect } from "react";
import ContactUs from "../../Components/Contact Us/ContactUs";
import DataBox from "../../Components/Data Box/DataBox";
import DropdownMenu from "../../Components/Dropdown Menu/DropdownMenu";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/Nav Bar/NavBar";
import styles from "./Data.module.css";

function Data() {
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get("data");
    setSelectedData(data);
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <DropdownMenu />
      <DataBox />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Data;
