import React, { Component } from 'react'
import { ArtistListContainer, ArtistListContainerTitle } from './ArtistList.styled'

export default class ArtistList extends Component{
    render(){
        return(
            <ArtistListContainer>
                <ArtistListContainerTitle>
                    Most listened artist by month
                </ArtistListContainerTitle>
            </ArtistListContainer>
        )
    }
}