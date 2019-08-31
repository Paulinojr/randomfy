import styled from 'styled-components'

const ArtistCardContainer = styled.div`
    display: flex;
    position: relative;
    height: 220px;
    width: 100%;
    padding: 20px;
    justify-content: space-between;
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
        width: 60%;
        display:block;
        flex-direction: column;
        padding: 10px 0px;

        h3{
            margin: 0;
            text-align: left;
        }
    }
`


export { ArtistCardContainer, ArtistCardImage, ArtistCardWhiteboard }