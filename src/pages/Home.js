import React from "react";

import ScoreBoard from "../components/ScoreBoard";
import Header from "../components/Header";
import DashBoard from "./Dashboard";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <ScoreBoard />
      <DashBoard />
      <Sponsors />
      <Footer />
      {/* <section className={classnames(style.seccion, style.size)}>
        <div className={style.container}>
          <div className={style.contInformation}>
            <div className={style.nota}>
              <h1 className={style.titulo}>Título de la nota</h1>
              <p className={style.descripcion}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className={style.txtNota}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className={style.txtNota}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className={style.imgNota}>
              <img className={style.imageNote} src={imgNota} alt="" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Home;
