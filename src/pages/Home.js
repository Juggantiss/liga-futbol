import React from "react";

// import ScoreBoard from "../components/ScoreBoard";
import Header from "../components/Header";
import Matchs from "../components/Matchs";
import SectionLigas from "./SectionLigas";
import NotasRelevantes from "./NotasRelevantes";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Matchs />
      <SectionLigas />
      <Sponsors />
      <NotasRelevantes />
      <Footer />
    </>
  );
}

export default Home;
