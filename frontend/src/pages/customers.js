import React from 'react';
import CustomerList from '../components/customers/customer_list'

export default class Customers extends React.Component {
    render() {
        return (
            <div className="customers">
                <CustomerList />
            </div>
        )
    }
}