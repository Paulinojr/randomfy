import styled from 'styled-components'

const TracksSliderItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    @media only screen and (max-width: 600px){
        margin-top: 10px;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 600px){
        height: 100%;
        width: auto;
    }    
`

const TracksSliderItemTitle = styled.p`
    font-size: 14px;
    color: #fff;
    font-family: 'Lato';
    text-align: center;
    @media only screen and (max-width: 1024px){
        font-size: 18px;
    }
`

const TracksSliderItemImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 200px;
    position: relative;
    @media only screen and (min-width: 600px){
        height: 250px;
    }
`

const TracksSliderItemOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 25;
    right: 25;
    height: 200px;
    width: 200px;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 0, 0, 0.6);
    ${TracksSliderItemImage}:hover &{
        opacity: 1;
        cursor: pointer;
    }
    
    @media only screen and (min-width: 600px){
        height: 250px;
        background-size: contain;
        font-size: 21px;
        width: 250px;
    }
    font-family: 'Lato';
    color: #fff;
`

const TracksSliderItemExport = styled.a`
    color: #1DB954;
    font-size: 16px;
    margin-top: 5px;
    :hover{
        text-decoration: underline;
        cursor: pointer;
    }
`

export { TracksSliderItemContainer, TracksSliderItemTitle, TracksSliderItemImage, TracksSliderItemExport, TracksSliderItemOverlay }