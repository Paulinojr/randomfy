import styled from 'styled-components'

const TracksSliderItemContainer = styled.div`
    display: flex;
    flex-direction: column;
   

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
    @media only screen and (max-width: 768px){
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
    @media only screen and (min-width: 600px){
        height: 250px;
    } 
`

const TracksSliderItemExport = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    color: #1DB954;
    width: 100%;
    height: 100%;
    font-size: 16px;
`

export { TracksSliderItemContainer, TracksSliderItemTitle, TracksSliderItemImage, TracksSliderItemExport }