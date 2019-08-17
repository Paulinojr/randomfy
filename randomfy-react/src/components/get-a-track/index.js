import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api';


export default class getATrack extends Component {
    state = {
        artists: [],
        musicName: ""
    }

    getATrack = async () => {

        console.log('calling api...');
        const result = await api.get(`tracks/7M6YvTJfLx3c8hiPlvCwl0`);
        console.log('result:');
        console.log(result.data);

        this.setState({ 
            musicName: result.data.name,
            artists: result.data.artists,
            img: result.data.album.images ? result.data.album.images[0].url : ''
        })
    }

    render() {
        const {musicName, artists, img} = this.state;
        return (
            <div>
                <h1>get a track</h1>
                <button onClick={this.getATrack}>
                    get a track
                </button>
                <br />
                <img src={img}></img>
                <ul>
                    <li>Music Name: {musicName}</li>

                    <p>Artists: </p>
                    {artists.map(artist => {
                        return (
                            <li><a href={artist.external_urls.spotify}>{artist.name}</a></li>
                        )
                    })}

                </ul>
            </div>
        );
    }
}