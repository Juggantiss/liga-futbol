import React from "react";

import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/img/Logo.png";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.contLogo}>
        <img className={style.logo} src={Logo} alt="" />
      </div>
      <div className={style.contInfo}>
        <p className={style.txtInfo}>CINERE</p>
        <p className={style.txtInfo}>ADDIDAS</p>
        <p className={style.txtInfo}>NIKE</p>
      </div>
      <div className={style.contSocial}>
        <p className={style.icon}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </p>
        <p className={style.icon}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </p>
        <p className={style.icon}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </p>
      </div>
    </div>
  );
}

export default Footer;
