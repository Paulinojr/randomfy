import React, { Component } from 'react'
import { TracksSliderItemContainer, TracksSliderItemTitle } from './TracksSliderItem.styled'


export default class TracksSliderItem extends Component{
    render(){
        return(
            <TracksSliderItemContainer>
                <TracksSliderItemTitle> MAY/19 </TracksSliderItemTitle>
            </TracksSliderItemContainer>
        )
    }
}