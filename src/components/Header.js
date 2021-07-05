import React from "react";

import style from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={style.contHeader}>
        <nav className={style.nav}></nav>
        <div className={style.banner}>
          <div className={style.txtBanner}>
            <h1 className={style.txtTop}>Liga de fútbol siete</h1>
            <h1 className={style.txtCenter}>Jovenes con propositos</h1>
            <h1 className={style.txtBottom}>Juchitán de Zaragoza, Oaxaca</h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;