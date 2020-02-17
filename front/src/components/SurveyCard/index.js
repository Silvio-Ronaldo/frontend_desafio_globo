import React from 'react';
import { Accordion, Button, Card, ProgressBar } from 'react-bootstrap';
import QuestionModal from '../../components/QuestionModal';

export default function Survey(survey) {

    return (
        <Accordion className="col-sm-3" defaultActiveKey="1">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                        {survey.content}
                    </Accordion.Toggle>
                    <QuestionModal
                        questionary={survey}
                        type='getSurvey'
                    />
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text className="row">
                            <ProgressBar className="col-sm-12 p-0">
                                <ProgressBar variant="success" now={70} label="70%" key={1} />
                                <ProgressBar variant="danger" now={30} label="30%" key={2} />
                            </ProgressBar>
                        </Card.Text>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )

}