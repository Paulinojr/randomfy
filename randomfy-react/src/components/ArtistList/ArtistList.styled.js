import styled from 'styled-components'

const ArtistListContainer = styled.div`
    background-color: #1DB954;
    height: 100%;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px){ 
        
    } 
`

const ArtistListContainerTitle = styled.h1`
    color: #fff;
    font-size: 18px;
    font-family: 'Lato';
    text-align: center;
    width: 100%;
    display:flex;
    justify-content: center;
    @media only screen and (max-width: 1024px){
        font-size: 21px;
        margin-top: 10%;
    }
    @media only screen and (min-width: 1024px){
        text-align: center;
        justify-content: flex-start;
        margin-left: 50px;
        margin-top: 2%;
    }
`

const CardContainer = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px){ 
        flex-direction: row;
    } 
`


export { ArtistListContainer, ArtistListContainerTitle, CardContainer }