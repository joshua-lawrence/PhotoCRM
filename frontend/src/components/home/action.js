import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Action extends React.Component {
    render() {
        return (
            <div className="action_section">            
                <Row>
                    <Col>
                        <Button className="action_button">Create Customer</Button>
                    </Col>
                    <Col>
                        <Button className="action_button">Create Job</Button>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default Action;