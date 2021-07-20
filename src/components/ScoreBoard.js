import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./ScoreBoard.module.css";
import classnames from "classnames";

import imgLocal from "../assets/img/local.png";
import imgVisita from "../assets/img/visitante.png";

import { gql, useSubscription } from "@apollo/react-hooks";

const WAITING_FOR_GOAL = gql`
  subscription {
    newGoal {
      _id
      goalsScored
      goalsAgainst
    }
  }
`;

function ScoreBoard() {
  const { idMatch } = useParams();
  const [match, setMatch] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "https://liga-che-gomez-api.herokuapp.com/api/soccer-matchs/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMatch(data));
  };

  const waitingForGoal = useSubscription(WAITING_FOR_GOAL);

  useEffect(() => {
    if (waitingForGoal.data) {
      const partidos = [...match.data];
      const matchIndex = match.data.findIndex(
        (partido) => partido._id === waitingForGoal.data.newGoal._id
      );
      partidos[matchIndex].goalsAgainst =
        waitingForGoal.data.newGoal.goalsAgainst;
      partidos[matchIndex].goalsScored =
        waitingForGoal.data.newGoal.goalsScored;

      setMatch({ ...match, data: partidos });
    } else {
      console.log(waitingForGoal);
    }
  }, [waitingForGoal.data]);

  return (
    <>
      <div className={style.contScore}>
        {match.data ? (
          match.data
            .filter((match) => match._id === idMatch)
            .map((data, index) => (
              <div key={index} className={style.score}>
                <div className={style.infoPartido}>
                  <p className={style.nameLiga}>Unidad deportiva 'Che Gomez'</p>
                  <p className={style.statusPartido}>En curso</p>
                </div>
                <div className={style.teamLocal}>
                  <div className={style.contTeam}>
                    <div
                      className={classnames(style.contLogo, style.borderRight)}
                    >
                      <img className={style.teamLogo} src={imgLocal} alt="" />
                    </div>
                    <div className={style.contName}>
                      <h1 className={style.txtName}>{data.team.name}</h1>
                      <p className={style.desc}>Equipo local</p>
                    </div>
                  </div>
                </div>
                <div className={style.gol}>
                  <p className={style.dataGol}>{data.goalsScored}</p>
                  <p className={classnames(style.dataGol, style.noText)}>VS</p>
                  <p className={style.dataGol}>{data.goalsAgainst}</p>
                </div>
                <div className={style.teamVisita}>
                  <div className={classnames(style.contTeam, style.visita)}>
                    <div
                      className={classnames(style.contLogo, style.borderLeft)}
                    >
                      <img className={style.teamLogo} src={imgVisita} alt="" />
                    </div>
                    <div className={style.contName}>
                      <h1 className={style.txtName}>{data.rivalTeam.name}</h1>
                      <p className={style.desc}>Equipo visitante</p>
                    </div>
                  </div>
                </div>
                <div className={style.contSponsors}>
                  <p className={style.txtSponsor}>Patrocinado por Cinere</p>
                </div>
              </div>
            ))
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    </>
  );
}

export default ScoreBoard;
