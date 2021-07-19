import React, { useEffect, useState } from "react";

import style from "./ScoreBoard.module.css";
import classnames from "classnames";

import imgLocal from "../assets/img/local.png";
import imgVisita from "../assets/img/visitante.png";

function ScoreBoard() {
  const [score, setScore] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "https://liga-che-gomez-api.herokuapp.com/api/soccer-matchs/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setScore(data));
  };

  return (
    <>
      <div className={style.contScore}>
        <div className={style.score}>
          <div className={style.infoPartido}>
            <p className={style.nameLiga}>Unidad deportiva 'Che Gomez'</p>
            <p className={style.statusPartido}>En curso</p>
          </div>
          <div className={style.teamLocal}>
            <div className={style.contTeam}>
              <div className={classnames(style.contLogo, style.borderRight)}>
                <img className={style.teamLogo} src={imgLocal} alt="" />
              </div>
              <div className={style.contName}>
                <h1 className={style.txtName}>
                  {score.data ? score.data[0].team.name : null}
                </h1>
                <p className={style.desc}>Equipo local</p>
              </div>
            </div>
          </div>
          <div className={style.gol}>
            <p className={style.dataGol}>
              {score.data ? score.data[0].goalsScored : null}
            </p>
            <p className={classnames(style.dataGol, style.noText)}>VS</p>
            <p className={style.dataGol}>
              {score.data ? score.data[0].goalsAgainst : null}
            </p>
          </div>
          <div className={style.teamVisita}>
            <div className={classnames(style.contTeam, style.visita)}>
              <div className={classnames(style.contLogo, style.borderLeft)}>
                <img className={style.teamLogo} src={imgVisita} alt="" />
              </div>
              <div className={style.contName}>
                <h1 className={style.txtName}>
                  {score.data ? score.data[0].rivalTeam.name : null}
                </h1>
                <p className={style.desc}>Equipo visitante</p>
              </div>
            </div>
          </div>
          <div className={style.contSponsors}>
            <p className={style.txtSponsor}>Patrocinado por Cinere</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScoreBoard;
