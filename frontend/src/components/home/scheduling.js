import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Scheduling extends React.Component {
    render() {
        return (
            <div className="scheduling_section">            
                <Row>
                    <Col>
                        <h5 className="upcoming_title">Upcoming Jobs</h5>
                        <Table striped hover >
                            <thead>
                                <tr>
                                    <td>
                                        Example
                                    </td>
                                    <td>
                                        Example
                                    </td>
                                    <td>
                                        Example
                                    </td>
                                    <td>
                                        Example
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td>
                                        Example
                                    </td>
                                    <td>
                                        Example
                                    </td>
                                    <td>
                                        Example
                                    </td>
                                    <td>
                                        Example
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default Scheduling;