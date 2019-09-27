import styled from 'styled-components'

const ArtistCardContainer = styled.div`
    display: flex;
    position: relative;
    height: 220px;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    align-self: center;
    overflow: hidden;
    @media (min-width: 1200px){ 
        width: 32%;
    } 

    `

const ArtistCardImage = styled.img`
    height: 150px;
    width: 150px;
    justify-content: flex-start;
    z-index: 10;
`
const ArtistCardWhiteboard = styled.div`
    position: absolute;
    flex: 70%;
    background: #fff;
    width: 80%;
    height: 140px;
    bottom: 25%;
    left: 8%;
    color: #000;
    font-family: 'Lato';
    text-align: center;
    display:flex;
    justify-content: flex-end;
    span{
        width: 55%;
        @media screen and (device-aspect-ratio: 40/71) {
            width: 50%;
        }
        display:block;
        flex-direction: column;
        padding: 10px 0px;

        h3{
            margin: 0;
            text-align: left;
        }

        @media (min-width: 1200px){
            p{
                display: flex;
                align-items: flex-end;
                width: 90%;
                justify-content: flex-end;
                height: 50px;
            }
        }
        @media (min-width: 1600px){
            width: 70%;
        }
    }
`


export { ArtistCardContainer, ArtistCardImage, ArtistCardWhiteboard }