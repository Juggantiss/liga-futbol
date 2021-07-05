import React from "react";

import style from "./Sponsors.module.css";
import sponsor from "../assets/img/sponsorNike.jpg";

function Sponsors() {
  return (
    <div className={style.contSponsors}>
      <div className={style.contImg}>
        <img className={style.imagen} src={sponsor} alt="" />
      </div>
    </div>
  );
}

export default Sponsors;
