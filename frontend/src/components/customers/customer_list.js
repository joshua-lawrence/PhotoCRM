import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CustomerEdit from './customer_edit.js';

class CustomerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_list: []
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get("./api/customers")
            .then(res => this.setState({customer_list: res.data}))
            .catch(err => console.log(err));
    };

    renderCustomers = () => {
        return this.state.customer_list.map(item => (
            <tr>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td><Button variant="secondary">Edit</Button></td>
                <td><Button variant="danger" onClick={() => { if(window.confirm('Are you sure you wish to delete this item?')){this.handleDelete(item)}}}
            > X </Button></td>
            </tr>
        ));
    };

    handleDelete = item => {
        axios
            .delete("./api/customers/" + item.id)
            .then(res => this.refreshList());
    }

    render() {
        return (
            <div className="customer_list_section">            
                <Row>
                    <Col>
                        <h5 className="upcoming_title">Customers</h5>
                        <Table striped hover >
                            <thead>
                                <tr>
                                    <td>First Name</td>
                                    <td>Last Name</td>
                                    <td>Phone</td>
                                    <td>Email</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderCustomers()}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default CustomerList;