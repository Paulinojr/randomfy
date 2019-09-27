import React, { Component } from 'react'
import { TracksSliderItemContainer, TracksSliderItemTitle, TracksSliderItemImage, TracksSliderItemExport, TracksSliderItemOverlay } from './TracksSliderItem.styled'
import placeholder from '../../assets/images/placeholder-playlist.png'
import { FiDownload } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa';


export default class TracksSliderItem extends Component{
    render(){
        return(
            <TracksSliderItemContainer>
                <TracksSliderItemTitle> MAY/19 </TracksSliderItemTitle>
                <TracksSliderItemImage img={placeholder}>
                    <TracksSliderItemOverlay>
                        View Tracks 
                        <FaArrowRight style={{marginLeft: '5px', marginTop: '5px'}}></FaArrowRight>
                    </TracksSliderItemOverlay>
                </TracksSliderItemImage>
                <TracksSliderItemExport>
                        Export as playlist <FiDownload></FiDownload>                    
                </TracksSliderItemExport>
            </TracksSliderItemContainer>
        )
    }
}