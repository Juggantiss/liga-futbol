import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import classnames from "classnames";
import style from "./Matchs.module.css";
import Carousel, { consts } from "react-elastic-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

function Matchs() {
  const history = useHistory();
  const goToLiga = (liga) => {
    history.push("/" + liga);
  };

  const [match, setMatch] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "https://liga-che-gomez-api.herokuapp.com/api/soccer-matchs";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMatch(data));
  };

  const CardMatch = ({ local, golLocal, visita, golVisita }) => (
    <>
      <div
        className={style.card}
        onClick={() => goToLiga("Match")}
      >
        <div className={style.cardHeader}>
          <p className={style.txtHeader}>18/07</p>
          <p className={style.txtHeader}>19:00</p>
        </div>
        <div className={style.cardMatch}>
          <div className={style.matchData}>
            <div className={style.nameTeam}>
              <p className={style.txtMatch}>{local}</p>
            </div>
            <div className={style.scoreTeam}>
              <p className={style.txtMatch}>{golLocal}</p>
            </div>
          </div>
          <div className={style.matchData}>
            <div className={style.nameTeam}>
              <p className={style.txtMatch}>{visita}</p>
            </div>
            <div className={style.scoreTeam}>
              <p className={style.txtMatch}>{golVisita}</p>
            </div>
          </div>
        </div>
        <div className={style.cardFooter}>
          <button className={style.btnMatch}>Seguir Partido</button>
        </div>
      </div>
    </>
  );

  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 720, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 5 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <FontAwesomeIcon icon={faAngleLeft} />
      ) : (
        <FontAwesomeIcon icon={faAngleRight} />
      );
    return (
      <div className={style.contBtn}>
        <button className={style.btnSlider} onClick={onClick} disabled={isEdge}>
          {pointer}
        </button>
      </div>
    );
  };

  const paginacion = ({ pages, activePage, onClick }) => {
    return (
      <div className={style.contPaginas}>
        {pages.map((page) => {
          const isActivePage = activePage === page;
          return (
            <button
              className={
                isActivePage
                  ? classnames(style.btnPaginas, style.activado)
                  : classnames(style.btnPaginas)
              }
              key={page}
              onClick={() => onClick(page)}
            ></button>
          );
        })}
      </div>
    );
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
    <div className={style.container}>
      <div className={style.contCarousel}>
        {match.data ? (
          <Carousel
            breakPoints={breakPoints}
            renderArrow={myArrow}
            renderPagination={paginacion}
          >
            {match.data.map((team, index) => {
              return (
                <div key={index} className={style.contCard}>
                  <CardMatch
                    local={team.team.name}
                    golLocal={team.goalsScored}
                    visita={team.rivalTeam.name}
                    golVisita={team.goalsAgainst}
                  />
                </div>
              );
            })}
          </Carousel>
        ) : null}
      </div>
    </div>
  );
}

export default Matchs;
