import React from "react";

import style from "./CardNotas.module.css";
import nota1 from "../assets/img/banner2.jpg";

function CardNotas({ titulo, subtitulo, imagen }) {
  return (
    <div className={style.card}>
      <img className={style.imagen} src={imagen} alt="" />
      <div className={style.contNotas}>
        <div className={style.contTitulos}>
          <h1 className={style.titulo}>{titulo}</h1>
          <p className={style.subtitulo}>
            {subtitulo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardNotas;
