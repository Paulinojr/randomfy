import React, { Component } from 'react';
import './styles.css';
import {api, instanceForReloadAccessToken} from '../../services/api';
import {handleError} from '../error-handler';


export default class getATrack extends Component {
    state = {
        trackID: '',
        artists: [],
        musicName: ""
    }

    getATrack = async () => {
        const {trackID} = this.state;
        try{
            const result = await api.get(`tracks/${trackID}`);

            this.setState({
                musicName: result.data.name,
                artists: result.data.artists,
                imgSrc: result.data.album.images ? result.data.album.images[0].url : null
            })
        }
        catch(e) {
            if(e.response.status === 401) {
                console.log('calling instanceForReloadAccessToken.post...');
                // reloadAccessToken();
                
                const result = await instanceForReloadAccessToken.post(
                    '/token',
                    {
                        'grant_type' : 'client_credentials'
                    }
                );

                console.log('SUCCESSFUL result of instanceForReloadAccessToken:');
                console.log(result);
                // getATrack();
            }
            handleError(e);
        }
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
