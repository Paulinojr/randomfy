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
            infinite: true,
            mobileFirst: true,
            slidesToShow: 3,
            responsive: [
                {
                    
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1

                    }
                  }
            ]
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