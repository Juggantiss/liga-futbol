import React from "react";

import style from "./Tabla.module.css";
import classnames from "classnames";

const data = [
  {
    id: 1,
    pos: 1,
    team: "Nazarenos",
    dif: 0,
    pts: 0,
  },
  {
    id: 2,
    pos: 2,
    team: "J.N.I",
    dif: 0,
    pts: 0,
  },
  {
    id: 3,
    pos: 3,
    team: "Emanuel",
    dif: 0,
    pts: 0,
  },
  {
    id: 4,
    pos: 4,
    team: "S.O.S",
    dif: 0,
    pts: 0,
  },
  {
    id: 5,
    pos: 5,
    team: "Bethesda",
    dif: 0,
    pts: 0,
  },
  {
    id: 6,
    pos: 6,
    team: "2da. I.E.C",
    dif: 0,
    pts: 0,
  },
  {
    id: 7,
    pos: 7,
    team: "Sub",
    dif: 0,
    pts: 0,
  },
  {
    id: 8,
    pos: 8,
    team: "Puerta del cielo",
    dif: 0,
    pts: 0,
  },
  {
    id: 9,
    pos: 9,
    team: "Amistad",
    dif: 0,
    pts: 0,
  },
  {
    id: 10,
    pos: 10,
    team: "Iglesia de Dios",
    dif: 0,
    pts: 0,
  },
];

function Tabla() {
  const BgColor = ({ pos }) => {
    if (pos < 9) {
      return (
        <td>
          <div className={style.color}></div>
        </td>
      );
    } else {
      return <td className={style.noColor}></td>;
    }
  };

  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <div className={style.contTitulo}>
          <p className={style.titulo}>Tabla general</p>
          <p className={style.subTitulo}>Del torneo</p>
        </div>
        {/* <button className={style.btnTabla}>O</button> */}
      </div>
      <div className={style.contTabla}>
        <table className={style.tabla}>
          <thead>
            <tr>
              <th className={style.tablaPos}></th>
              <th className={style.tablaPos}></th>
              <th
                className={classnames(
                  style.tablaPos,
                  style.tablaLeft,
                  style.headerTable
                )}
              >
                EQUIPO
              </th>
              <th className={classnames(style.tablaCenter, style.headerTable)}>
                DIF
              </th>
              <th className={classnames(style.tablaCenter, style.headerTable)}>
                PTS
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <tr key={index}>
                <BgColor pos={team.pos} />
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
