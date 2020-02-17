import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, ProgressBar } from 'react-bootstrap';
import QuestionModal from '../../components/QuestionModal';
import api from '../../services/api';

export default function Survey(survey) {

    const [yes, setYes] = useState(0);
    const [no, setNo] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function loadSurvey() {
            const { data } = await api.get(`/getVotes/${survey._id}`);
            setYes(data.yes);
            setNo(data.no);
            setTotal(data.total);
        }
        loadSurvey();
    }, [no, survey._id, survey.id, total, yes]);

    return (
        <Accordion className="col-sm-6 mb-3 mx-auto" defaultActiveKey="1">
            <Card>
                <Card.Header>
                    <Accordion.Toggle className="col-sm-12" as={Button} variant="light" eventKey="0">
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
                                <ProgressBar variant="success" now={parseInt((yes / total) * 100)} label={`${(yes / total) * 100}%`} key={1} />
                                <ProgressBar variant="danger" now={parseInt((no / total) * 100)} label={`${(no / total) * 100}%`} key={2} />
                            </ProgressBar>
                        </Card.Text>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )

}