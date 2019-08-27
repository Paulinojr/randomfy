import styled from 'styled-components'

const TracksSliderContainer = styled.div`
    background-color: #212121;
    height: 500px;
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    color: #fff;
    font-size: 18px;
    font-family: 'Lato';
    text-align: center;
    width: 100%;
    display:flex;
    justify-content: center;
    @media only screen and (max-width: 600px){
        font-size: 21px;
        margin-top: 10%;

    }
`

export { TracksSliderContainer, Title }