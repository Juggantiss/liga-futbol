import React from "react";

import Header from "../components/Header";
import Dashboard from "./Dashboard";
import NotasRelevantes from "./NotasRelevantes";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

function LigaCristiana() {
  return (
    <>
      <Header />
      <Dashboard />
      <Sponsors />
      <NotasRelevantes />
      <Footer />
    </>
  );
}

export default LigaCristiana;
