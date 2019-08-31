import React, { Component } from 'react'
import { ArtistCardContainer, ArtistCardImage, ArtistCardWhiteboard } from './ArtistCard.styled'
import placeholder from '../../assets/images/placeholder-artist.jpg'


export default class ArtistCard extends Component{
    render(){
        return(
            <ArtistCardContainer>
                <ArtistCardImage src={placeholder} />
                <ArtistCardWhiteboard>
                    <span>
                        <h3>JUL/19</h3>
                        <h3 className="artist-name">Tyler, the Creator</h3>
                        <p>
                        See month ranking
                         </p>
                    </span>
                    
                </ArtistCardWhiteboard>
            </ArtistCardContainer>
        )
    }
}