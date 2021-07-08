import React from "react";

import { Card, Col, Container, Row, Table } from "react-bootstrap";
import "./Home.module.css"

const data = [
  {
    id: 1,
    pos: 1,
    team: "NameTeam",
    jj: 0,
    jg: 0,
    je: 0,
    jp: 0,
    gf: 0,
    ge: 0,
    dif: 0,
    pex: 0,
    pts: 0,
  },
  {
    id: 2,
    pos: 2,
    team: "NameTeam",
    jj: 0,
    jg: 0,
    je: 0,
    jp: 0,
    gf: 0,
    ge: 0,
    dif: 0,
    pex: 0,
    pts: 0,
  },
  {
    id: 3,
    pos: 3,
    team: "NameTeam",
    jj: 0,
    jg: 0,
    je: 0,
    jp: 0,
    gf: 0,
    ge: 0,
    dif: 0,
    pex: 0,
    pts: 0,
  },
  {
    id: 4,
    pos: 4,
    team: "NameTeam",
    jj: 0,
    jg: 0,
    je: 0,
    jp: 0,
    gf: 0,
    ge: 0,
    dif: 0,
    pex: 0,
    pts: 0,
  },
  {
    id: 5,
    pos: 5,
    team: "NameTeam long",
    jj: 0,
    jg: 0,
    je: 0,
    jp: 0,
    gf: 0,
    ge: 0,
    dif: 0,
    pex: 0,
    pts: 0,
  },
];

function Prueba() {
  return (
    <>
      <Container
        className="bg-light"
        fluid
        style={{ width: "100%", height: "100vh" }}
      >
        {/* <Container className="bg-dark" fluid style={{ width: '100%', height: '100vh' }}> */}
        <Row className="bg-score justify-content-center">
          <Col className="mt-5 mb-5" md={8}>
            <Card className="shadow-sm">
              <Card.Header>
                <Row>
                  <Col md={6}>
                    <h4>Partido de hoy</h4>
                  </Col>
                  <Col md={6}>
                    <h4 className="text-right">00:00</h4>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col className="text-center my-auto" md={5}>
                    <h1 className="h5 text-uppercase">Name team local</h1>
                  </Col>
                  <Col className="text-center my-auto" md={1}>
                    <h1 className="h3">0</h1>
                  </Col>
                  <Col className="text-center my-auto" md={1}>
                    <h1 className="h3">0</h1>
                  </Col>
                  <Col className="text-center my-auto" md={5}>
                    <h1 className="h5 text-uppercase">Name team visita</h1>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Table variant="light" responsive="sm" style={{}}>
              <thead>
                <tr>
                  <th
                    style={{
                      position: "sticky",
                      background: "#fff",
                      left: "0px",
                    }}
                  ></th>
                  <th
                    style={{
                      position: "sticky",
                      background: "#fff",
                      left: "0%",
                    }}
                  >
                    EQUIPO
                  </th>
                  <th>JJ</th>
                  <th>JG</th>
                  <th>JE</th>
                  <th>JP</th>
                  <th>GF</th>
                  <th>GE</th>
                  <th>DIF</th>
                  <th>PEX</th>
                  <th>PTS</th>
                </tr>
              </thead>
              <tbody>
                {data.map((team, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        position: "sticky",
                        background: "#fff",
                        left: "0px",
                      }}
                    >
                      {team.pos}
                    </td>
                    <td
                      style={{
                        position: "sticky",
                        background: "#fff",
                        left: "0%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {team.team}
                    </td>
                    <td>{team.jj}</td>
                    <td>{team.jg}</td>
                    <td>{team.je}</td>
                    <td>{team.jp}</td>
                    <td>{team.gf}</td>
                    <td>{team.ge}</td>
                    <td>{team.dif}</td>
                    <td>{team.pex}</td>
                    <td>{team.pts}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Prueba;
