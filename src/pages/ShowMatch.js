import React from "react";

import style from "./ShowMatch.module.css";
import classnames from "classnames";

import ScoreBoard from "../components/ScoreBoard";
import Timeline from "../components/Timeline";

function ShowMatch() {
  return (
    <>
      <ScoreBoard />
      <Timeline />
      {/* <div className={style.container}>
        <div className={style.content}>
          <div className={classnames(style.contView, style.contSponsor)}>
            <div className={style.sponsor}></div>
          </div>
          <div className={style.contTimeline}>
            <Timeline />
          </div>
          <div className={classnames(style.contInfo, style.contSponsor)}>
            <div className={style.sponsor}></div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ShowMatch;
