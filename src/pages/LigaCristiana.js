import React from "react";

import ScoreBoard from "../components/ScoreBoard";
// import Header from "../components/Header";
import Dashboard from "./Dashboard";
import NotasRelevantes from "./NotasRelevantes";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

function LigaCristiana() {
  return (
    <>
      {/* <Header /> */}
      <ScoreBoard />
      <Dashboard />
      <Sponsors />
      <NotasRelevantes />
      <Footer />
    </>
  );
}

export default LigaCristiana;
