import React, { Component } from 'react'
import { TracksSliderItemContainer, TracksSliderItemTitle, TracksSliderItemImage, TracksSliderItemExport } from './TracksSliderItem.styled'
import placeholder from '../../assets/images/placeholder-playlist.png'
import { FiDownload } from 'react-icons/fi'


export default class TracksSliderItem extends Component{
    render(){
        return(
            <TracksSliderItemContainer>
                <TracksSliderItemTitle> MAY/19 </TracksSliderItemTitle>
                <TracksSliderItemImage img={placeholder}></TracksSliderItemImage>
                <TracksSliderItemExport>
                        Export as playlist <FiDownload></FiDownload>                    
                </TracksSliderItemExport>
            </TracksSliderItemContainer>
        )
    }
}