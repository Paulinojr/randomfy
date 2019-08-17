import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api';


export default class getATrack extends Component {

    getATrack = async () => {

        console.log('calling api...');
        const result = await api.get(`tracks/7M6YvTJfLx3c8hiPlvCwl0`);
        console.log('result:');
        console.log(result.data);
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