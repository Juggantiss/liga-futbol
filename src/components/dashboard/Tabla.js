import React from "react";

import style from "./Tabla.module.css";
import classnames from "classnames";

const data = [
  {
    id: 1,
    pos: 1,
    team: "Name Team uno",
    dif: 0,
    pts: 0,
  },
  {
    id: 2,
    pos: 2,
    team: "Name Team dos",
    dif: 0,
    pts: 0,
  },
  {
    id: 3,
    pos: 3,
    team: "Name Team tres",
    dif: 0,
    pts: 0,
  },
  {
    id: 4,
    pos: 4,
    team: "Name Team cuatro",
    dif: 0,
    pts: 0,
  },
  {
    id: 5,
    pos: 5,
    team: "Name Team cinco",
    dif: 0,
    pts: 0,
  },
  {
    id: 6,
    pos: 6,
    team: "Name Team seis",
    dif: 0,
    pts: 0,
  },
  {
    id: 7,
    pos: 7,
    team: "Name Team siete",
    dif: 0,
    pts: 0,
  },
  {
    id: 8,
    pos: 8,
    team: "Name Team ocho",
    dif: 0,
    pts: 0,
  },
];

function Tabla() {
  return (
    <div className={style.card}>
      <div className={style.contTitulo}>
        <h1 className={style.titulo}>Tabla general</h1>
        <h1 className={style.subTitulo}>Del torneo</h1>
      </div>
      <div className={style.contTabla}>
        <table className={style.tabla}>
          <thead>
            <tr>
              <th className={style.tablaPos}></th>
              <th className={classnames(style.tablaPos, style.tablaLeft)}>EQUIPO</th>
              <th className={style.tablaCenter}>DIF</th>
              <th className={style.tablaCenter}>PTS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <tr key={index}>
                <td className={style.tablaPos}>{team.pos}</td>
                <td className={style.tablaPos}>{team.team}</td>
                <td className={style.tablaCenter}>{team.dif}</td>
                <td className={style.tablaCenter}>{team.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabla;
