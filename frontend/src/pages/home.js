import Action from '../components/home/action';
import Scheduling from '../components/home/scheduling';
import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Action />
                <Scheduling />
            </div>
        )
    }
}