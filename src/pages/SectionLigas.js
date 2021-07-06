import React from "react";

import style from "./SectionLigas.module.css";
import HeaderSec from "../components/HeaderSec";

function SectionLigas() {
  return (
    <div className={style.container}>
      <div className={style.contInfo}>
        <HeaderSec
          titulo="Información de las ligas"
          subtitulo="Noticias, estadisticas, marcadores y más."
        />
        <div className={style.contLigas}>
          <div className={style.ligaUno}>
            <div className={style.infoLiga}>
              <h1 className={style.name}>Liga basketball</h1>
              <p className={style.desc}>Torneo de basketball</p>
            </div>
          </div>
          <div className={style.ligaDos}>
            <div className={style.infoLiga}>
              <h1 className={style.name}>Liga empresarial</h1>
              <p className={style.desc}>
                Torneo de fútbol de las empresas de Juchitán
              </p>
            </div>
          </div>
          <div className={style.nota}>
            <div className={style.infoLiga}>
              <h1 className={style.name}>Liga jovenes con propositos</h1>
              <p className={style.desc}>
                Torneo de fútbol de las iglesias cristianas
              </p>
            </div>
          </div>
          <div className={style.social}>
            <h1 className={style.titulo}>
              La mejor noticia deportiva de la región
            </h1>
            <p className={style.desc}>
              La encuentras aquí y en nuestras redes sociales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionLigas;
