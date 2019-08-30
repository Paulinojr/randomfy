import React, { Component } from 'react'
import { TracksSliderItemContainer, TracksSliderItemTitle, TracksSliderItemImage, TracksSliderItemExport } from './TracksSliderItem.styled'
import placeholder from '../../assets/images/placeholder-playlist.png'


export default class TracksSliderItem extends Component{
    render(){
        return(
            <TracksSliderItemContainer>
                <TracksSliderItemTitle> MAY/19 </TracksSliderItemTitle>
                <TracksSliderItemImage img={placeholder}></TracksSliderItemImage>
                <TracksSliderItemExport>
                    <p>
                        Export as playlist
                    </p>
                    
                </TracksSliderItemExport>
            </TracksSliderItemContainer>
        )
    }
}