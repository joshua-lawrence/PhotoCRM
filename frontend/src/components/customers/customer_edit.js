import React, {Component, useState} from 'react';
import axios from 'axios';
import {Modal, Row, Col, Table, Button} from 'react-bootstrap';


export default class CustomerEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
            show: false
        };
    }

    render() {
        return (
            <Modal show={this.state.show}>
                <Modal.Header closeButton>Customer</Modal.Header>
                <Modal.Body>Test</Modal.Body>
            </Modal>
        )
    }
}