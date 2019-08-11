import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api';


export default class getATrack extends Component {

    getATrack = async () => {
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