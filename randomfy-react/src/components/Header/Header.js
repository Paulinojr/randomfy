import React from 'react'
import { HeaderContainer, Logo } from './Header.styled'
import mainLogo from '../../assets/images/randomfy-logo.png'

const header = (props) => {
    return(
        <HeaderContainer>
            <Logo src={mainLogo} alt="Randomfy"  title="Randomfy"></Logo>
        </HeaderContainer>
    )   
}

export default header