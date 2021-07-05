import React from "react";

import style from "./Noticias.module.css";
import CardNotas from "../CardNotas";

function Noticias() {
  return (
    <div className={style.card}>
      <div className={style.contNotas}>
        <div className={style.notaUno}>
          <CardNotas />
        </div>
				<div className={style.notaDos}>
          <CardNotas />
        </div>
      </div>
    </div>
  );
}

export default Noticias;
