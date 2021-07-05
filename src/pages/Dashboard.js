import React from "react";

import style from "./DashBoard.module.css";
import CardInfo from "../components/dashboard/CardInfo";
import Tabla from "../components/dashboard/Tabla";
import Noticias from "../components/dashboard/Noticias";

import goleo from "../assets/img/silueta1.png";
import defensa from "../assets/img/silueta2.png";

function DashBoard() {
  return (
    <div className={style.container}>
      <div className={style.contInfo}>
        <div className={style.contTorneo}>
          <div className={style.contGoleador}>
            <CardInfo
              titulo="Goleador"
              texto="Alexis Regalado"
              subTexto="Real Nazareno"
              infoData="Goles anotado"
              gol="8"
              imgCard={goleo}
            />
          </div>
          <div className={style.contDefensa}>
            <CardInfo
              titulo="Defensa"
              texto="Real Nazareno"
              subTexto="Mejor defensiva"
              infoData="Goles recibidos"
              gol="5"
              imgCard={defensa}
            />
          </div>
          <div className={style.contTabla}>
            <Tabla />
          </div>
        </div>
        <div className={style.contNoticias}>
					<Noticias />
				</div>
      </div>
    </div>
  );
}

export default DashBoard;
