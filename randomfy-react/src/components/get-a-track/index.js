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
        console.log('calling api using trackID ' + trackID + ' ...');
        const result = await api.get(`tracks/${trackID}`);
        console.log('result:');
        console.log(result.data);

        this.setState({ 
            musicName: result.data.name,
            artists: result.data.artists,
            img: result.data.album.images ? result.data.album.images[0].url : null
        })
    }

    setTrackID = (trackID) => {
        this.setState({trackID});
    };

    render() {
        const {musicName, artists, img} = this.state;
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
                <img alt="album image" src={img}></img>
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