import React, { useState, useEffect } from "react";
import ContactUs from "../../Components/Contact Us/ContactUs";
import DataBox from "../../Components/Data Box/DataBox";
import DropdownMenu from "../../Components/Dropdown Menu/DropdownMenu";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/Nav Bar/NavBar";

function Data() {
  const [selectedData, setSelectedData] = useState(null);
  console.log(selectedData);
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
      <section id="ContactUs">
        <ContactUs />
      </section>{" "}
      <Footer />
    </div>
  );
}

export default Data;
