import React, { Component } from 'react';
import './styles.css';

export default class getATrack extends Component {

    getATrack = () => {
        console.log('i will get a track');
    }

    render() {
        return (
            <div>
                <h1>get a track</h1>
                <button onClick={this.getATrack}>
                    get a track
                </button>
            </div>
        );
    }
}