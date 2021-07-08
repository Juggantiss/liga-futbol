import React from "react";

import style from "./HeaderSec.module.css";

function HeaderSec({ titulo, subtitulo}) {
  return (
    <div className={style.container}>
      <h1 className={style.titulo}>{titulo}</h1>
      <p className={style.subtitulo}>{subtitulo}</p>
    </div>
  );
}

export default HeaderSec;