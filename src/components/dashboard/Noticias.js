import React from "react";

import style from "./Noticias.module.css";
import CardNotas from "../CardNotas";

import imgPrincipal from "../../assets/img/banner3.jpg";
import imgSecundario from "../../assets/img/banner2.jpg";

function Noticias() {
  return (
    <div className={style.card}>
      <div className={style.contNotas}>
        <div className={style.notaUno}>
          <CardNotas
            titulo="Partido de preparación 1"
            subtitulo="Un clasico amistoso antes del inicio"
            imagen={imgPrincipal}
          />
        </div>
        <div className={style.notaDos}>
          <CardNotas
            titulo="Partido de preparación 1"
            subtitulo="Un clasico amistoso antes del inicio"
            imagen={imgSecundario}
          />
        </div>
      </div>
    </div>
  );
}

export default Noticias;
