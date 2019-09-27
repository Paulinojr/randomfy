import React, { Component } from 'react'
import { ArtistListContainer, ArtistListContainerTitle, CardContainer } from './ArtistList.styled'
import ArtistCard  from './ArtistCard'

export default class ArtistList extends Component{
    render(){
        return(
            <ArtistListContainer>
                <ArtistListContainerTitle>
                    Most listened artist by month
                </ArtistListContainerTitle>

                <CardContainer>
                    <ArtistCard>

                    </ArtistCard>

                    <ArtistCard>

                    </ArtistCard>

                    <ArtistCard>

                    </ArtistCard>

                    
                </CardContainer>                

            </ArtistListContainer>
        )
    }
}