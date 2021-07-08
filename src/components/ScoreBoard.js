import React from "react";

import style from "./ScoreBoard.module.css";
import classnames from "classnames";

import imgLocal from "../assets/img/local.png";
import imgVisita from "../assets/img/visitante.png";

function ScoreBoard() {
  return (
    <>
      <div className={style.contScore}>
        <div className={style.score}>
          <div className={style.infoPartido}>
            <p className={style.nameLiga}>Unidad deportiva 'Che Gomez'</p>
            <p className={style.statusPartido}>En curso</p>
          </div>
          <div className={style.teamLocal}>
            <div className={style.contTeam}>
              <div className={classnames(style.contLogo, style.borderRight)}>
                <img className={style.teamLogo} src={imgLocal} alt="" />
              </div>
              <div className={style.contName}>
                <h1 className={style.txtName}>Real Nazareno</h1>
                <p className={style.desc}>Equipo local</p>
              </div>
            </div>
          </div>
          <div className={style.gol}>
            <p className={style.dataGol}>0</p>
            <p className={classnames(style.dataGol, style.noText)}>VS</p>
            <p className={style.dataGol}>0</p>
          </div>
          <div className={style.teamVisita}>
            <div className={classnames(style.contTeam, style.visita)}>
              <div className={classnames(style.contLogo, style.borderLeft)}>
                <img className={style.teamLogo} src={imgVisita} alt="" />
              </div>
              <div className={style.contName}>
                <h1 className={style.txtName}>JNI</h1>
                <p className={style.desc}>Equipo visitante</p>
              </div>
            </div>
          </div>
          <div className={style.contButton}>
            <button className={style.btnShowMin}>Seguir partido</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScoreBoard;
