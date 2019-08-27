import styled from 'styled-components'

const TracksSliderItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;

    @media only screen and (max-width: 600px){
        margin-top: 10px;
        height: 300px;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 600px){
        height: 300px;
        width: auto;
    }    
`

const TracksSliderItemTitle = styled.p`
    font-size: 14px;
    color: #fff;
    font-family: 'Lato';
    text-align: center;
    @media only screen and (max-width: 600px){
        font-size: 18px;
    }
`

const TracksSliderItemImage = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    padding: 5px;

`

export { TracksSliderItemContainer, TracksSliderItemTitle, TracksSliderItemImage }