import React from "react";

import style from "./CardNotas.module.css";
import nota1 from "../assets/img/banner2.jpg";

function CardNotas() {
  return (
    <div className={style.card}>
      <img className={style.imagen} src={nota1} alt="" />
      <div className={style.contNotas}>
        <div className={style.contTitulos}>
          <h1 className={style.titulo}>Partido de preparación</h1>
          <p className={style.subtitulo}>
            Un clasico amistoso antes del inicio de la temporada
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardNotas;
