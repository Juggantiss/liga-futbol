import React from "react";

import style from "./CardInfo.module.css";

function CardInfo({ titulo, texto, subTexto, infoData, gol, imgCard }) {
  return (
    <div className={style.card}>
      <div className={style.contImg}>
        <img className={style.imgCard} src={imgCard} alt="" />
      </div>
      <div className={style.contData}>
        <div className={style.contTitulo}>
          <h1 className={style.titulo}>{titulo}</h1>
          <h1 className={style.subTitulo}>Del torneo</h1>
        </div>
        <p className={style.namePlayer}>{texto}</p>
        <p className={style.nameTeam}>{subTexto}</p>
        <p className={style.txtInfo}>{infoData}</p>
        <p className={style.numGol}>{gol}</p>
      </div>
    </div>
  );
}

export default CardInfo;
