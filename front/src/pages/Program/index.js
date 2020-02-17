import React, { useEffect, useState } from 'react';
import { Card, Tabs, Tab } from 'react-bootstrap';
import Item from '../../components/ProgramCard'
import Header from '../../components/Header';
import api from '../../services/api.js';
import './styles.css';
import Survey from '../../components/SurveyCard';

export default function Program({ match }) {
  const [program, setProgram] = useState([]);
  const [questionaries, setquestionaries] = useState([]);
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    async function loadInfo(id) {
      const program = await api.get(`/getProgram/${id}`);
      setProgram(program.data);
      const questionary = await api.get(`/getQuestions/${id}`);
      setquestionaries(questionary.data);
      const survey = await api.get(`/getSurveys/${id}`);
      setSurveys(survey.data);
    }

    loadInfo(match.params.id);
  }, [match.params.id]);

  return (
    <div className="h-100">
      <Header />

      <div className="container-fluid h-100" style={{ padding: 0, margin: 0 }}>
        <div className="row h-100">
          <Card className="col-sm-12 div-main-body text-center">
            <center>
              <Card style={{ background: `${program.background}`, height: 150, zIndex: 0, position: 'relative' }} />
              <img src={program.uri} style={{ marginTop: -100, zIndex: 1, position: 'relative' }} />
            </center>
            <Card.Title>{program.name}</Card.Title>
            <Card.Subtitle>{program.description}</Card.Subtitle>
            <Card.Header className="bg-white mt-5">
              <Tabs defaultActiveKey="Quiz" id="uncontrolled-tab-example">
                <Tab eventKey="Quiz" title="Quiz">
                  <Card.Body>
                    <Card.Text className="row text-left justify-content-center" id="questionary-container">
                      {questionaries.map(questionary => (
                        <Item {...questionary} />
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Tab>

                <Tab eventKey="Enquete" title="Enquete">
                  <Card.Body>
                    <Card.Text className="row text-left justify-content-center" id="survey-container">
                      {surveys.map(survey => (
                        <Survey {...survey} />
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Tab>
                <Tab eventKey="Comentarios" title="Comentarios">
                  <h1>Delicinha</h1>
                </Tab>
              </Tabs>
            </Card.Header>
          </Card>
        </div>
      </div>
    </div >
  );
}