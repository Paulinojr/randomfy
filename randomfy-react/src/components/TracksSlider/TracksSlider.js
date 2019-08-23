import React, { Component } from 'react'
import { TracksSliderContainer, Title } from './TracksSlider.styled'
import TracksSliderItem from './TracksSliderItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default class TracksSlider extends Component{

    render(){
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return(
            <TracksSliderContainer>
                <Title>
                    Most listened tracks by month
                </Title>

              
                <Slider {...settings}>
                    <TracksSliderItem></TracksSliderItem>
                    <TracksSliderItem></TracksSliderItem>
                    <TracksSliderItem></TracksSliderItem>
                    <TracksSliderItem></TracksSliderItem>
                    <TracksSliderItem></TracksSliderItem>
                    <TracksSliderItem></TracksSliderItem>
                </Slider>
      

            </TracksSliderContainer>
        )
    }

}