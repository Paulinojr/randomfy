import React, { Component } from 'react'
import { ArtistListContainer, ArtistListContainerTitle } from './ArtistList.styled'
import ArtistCard  from './ArtistCard'

export default class ArtistList extends Component{
    render(){
        return(
            <ArtistListContainer>
                <ArtistListContainerTitle>
                    Most listened artist by month
                </ArtistListContainerTitle>
                <ArtistCard>

                </ArtistCard>

                <ArtistCard>

                </ArtistCard>

            </ArtistListContainer>
        )
    }
}