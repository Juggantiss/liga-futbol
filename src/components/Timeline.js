import React from "react";

import style from "./Timeline.module.css";
import classnames from "classnames";

import CardYellow from "../assets/img/amarilla.png";
import Corner from "../assets/img/esquina.png";
import Gol from "../assets/img/gol.png";
import Falta from "../assets/img/falta.png";

function Timeline() {
  const Item = ({ local, team, action, time, icon }) => (
    <div
      className={
        local
          ? classnames(style.item, style.local)
          : classnames(style.item, style.visita)
      }
    >
      <div
        className={
          local
            ? classnames(style.itemText, style.itemLocal)
            : classnames(style.itemText, style.itemVisita)
        }
      >
        <p className={style.txtAction}>{action}</p>
        <p className={style.txtTeam}>{team}</p>
      </div>
      <div className={style.itemAction}>
        <div
          className={
            action === "Gool!"
              ? classnames(style.contIcon, style.contIconGol)
              : style.contIcon
          }
        >
          <img className={style.icon} src={icon} alt="" />
        </div>
      </div>
      <div
        className={
          local
            ? classnames(style.itemTime, style.itemVisita)
            : classnames(style.itemTime, style.itemLocal)
        }
      >
        <p className={style.txtTime}>{time}</p>
      </div>
    </div>
  );

  const StatusMatch = ({ text }) => (
    <div className={classnames(style.item, style.itemStatus)}>
      <div className={style.status}>
        <p className={style.txtStatus}>{text}</p>
      </div>
    </div>
  );

  return (
    <div className={style.timeline}>
      <StatusMatch text="1er Tiempo" />
      <Item
        local={true}
        team="Nazareno"
        action="Tarjeta amarilla"
        time="10'"
        icon={CardYellow}
      />
      <Item
        local={true}
        team="Nazareno"
        action="Tiro de esquina"
        time="15'"
        icon={Corner}
      />
      <Item local={false} team="J.N.I." action="Gool!" time="20'" icon={Gol} />
      <Item
        local={false}
        team="J.N.I."
        action="Falta"
        time="25'"
        icon={Falta}
      />
      <StatusMatch text="2do Tiempo" />
      <Item
        local={true}
        team="Nazareno"
        action="Tiro de esquina"
        time="15'"
        icon={Corner}
      />
      <Item local={false} team="J.N.I." action="Gool!" time="20'" icon={Gol} />
      <Item
        local={false}
        team="J.N.I."
        action="Falta"
        time="25'"
        icon={Falta}
      />
      <StatusMatch text="Fin Partido" />
    </div>
  );
}

export default Timeline;
