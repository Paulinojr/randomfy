import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api';


export default class getATrack extends Component {
    state = {
        trackID: '',
        artists: [],
        musicName: ""
    }

    getATrack = async () => {
        const {trackID} = this.state;
        const result = await api.get(`tracks/${trackID}`);

        this.setState({ 
            musicName: result.data.name,
            artists: result.data.artists,
            imgSrc: result.data.album.images ? result.data.album.images[0].url : null
        })
    }

    setTrackID = (trackID) => {
        this.setState({trackID});
    };

    render() {
        const {musicName, artists, imgSrc} = this.state;
        return (
            <div>
                <h1>get a track</h1>
                <input type="text" onChange={event=>{
                    this.setTrackID(event.target.value);
                }}></input>
                <button onClick={this.getATrack}>
                    get a track
                </button>
                <br />
                { imgSrc 
                    ? <img alt="album cover" src={imgSrc}></img> 
                    : ''
                }
                <ul>
                    <li key="music-name">Music Name: {musicName}</li>

                    <p>Artists: </p>
                    {artists.map((artist, i) => {
                        return (
                            <li key={i}><a href={artist.external_urls.spotify}>{artist.name}</a></li>
                        )
                    })}

                </ul>
            </div>
        );
    }
}
