import React from "react";
import ContactUs from "../../Components/Contact Us/ContactUs";
import DropdownMenu from "../../Components/Dropdown Menu/DropdownMenu";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/Nav Bar/NavBar";
import NewsAndHighlights from "../../Components/News And Highlights/NewsAndHighlights";
import Portals from "../../Components/Portals/Portals";
import RecentUpdates from "../../Components/Recent Updates/RecentUpdates";
import UsefulLinks from "../../Components/Useful Links/UsefulLinks";
import Video from "../../Components/Video/Video";
import NewsFlash from "../../Molecules/News Flash/NewsFlash";

function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <DropdownMenu />
      <NewsFlash />
      <Video />
      <section id="MainContent">
        <NewsAndHighlights />
      </section>
      <Portals />
      <RecentUpdates />
      <UsefulLinks />
      <section id="ContactUs">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
