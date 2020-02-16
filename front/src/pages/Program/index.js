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

      <div className="container-fluid h-100">
        <div className="row h-100">
          <Card className="col-sm-12 div-main-body text-center">
            <center>
              <img src={program.uri} />
            </center>
            <Card.Title as="h5">{program.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">{program.description}</Card.Subtitle>
            <Card.Header className="bg-white">
              <Tabs defaultActiveKey="Quiz" id="uncontrolled-tab-example">
                <Tab eventKey="Quiz" title="Quiz">
                  <Card.Body>
                    <Card.Text className="row text-left" id="questionary-container">
                      {questionaries.map(questionary => (
                        <Item {...questionary} />
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Tab>

                <Tab eventKey="Enquete" title="Enquete">
                  <Card.Body>
                    <Card.Text className="row text-left" id="survey-container">
                      {surveys.map(survey => (
                        <Survey {...survey} />
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Tab>
                <Tab eventKey="Comentarios" title="Comentarios">
                  <h1>dfsgdfs</h1>
                </Tab>
              </Tabs>
            </Card.Header>
          </Card>
        </div>
      </div>
    </div >
  );
}