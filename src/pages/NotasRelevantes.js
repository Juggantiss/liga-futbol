import React from "react";
import classnames from "classnames";

import style from "./NotasRelevantes.module.css";
import HeaderSec from "../components/HeaderSec";
import CardNotas from "../components/CardNotas";

import imgPrincipal from "../assets/img/banner3.jpg";
import imgSecundario from "../assets/img/banner2.jpg";
import imgTercero from "../assets/img/banner4.jpg";

function NotasRelevantes() {
  return (
    <div className={style.container}>
      <div className={style.contInfo}>
        <HeaderSec
          titulo="Ultimas noticias"
          subtitulo="Lo más relevante del deporte Juchiteco."
        />
        <div className={classnames(style.contNotas, style.marginBottom)}>
          <div className={style.notasPrincipal}>
            <CardNotas
              titulo="Partido de preparación 1"
              subtitulo="Un clasico amistoso antes del inicio"
              imagen={imgPrincipal}
            />
          </div>
          <div className={style.notasSecundario}>
            <CardNotas
              titulo="Partido de preparación 2"
              subtitulo="Un clasico amistoso antes del inicio"
              imagen={imgSecundario}
            />
          </div>
          <div className={style.notasTercero}>
            <CardNotas
              titulo="Partido de preparación 3"
              subtitulo="Un clasico amistoso antes del inicio"
              imagen={imgTercero}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotasRelevantes;
