import styled from 'styled-components';


const HeaderWrapper = styled.header`
    margin-top: 8%;

    @media screen and (max-width: 750px){
        margin-top: 17%;
    }
`

const HeaderText = styled.h1`
    font: calc(2px + 1.8vw) monospace;
    color: #DA70D6;

    @media screen and (max-width: 750px){
        font-size: calc(2px + 2.3vw);
    }
`

function Header(){
    return(
        <HeaderWrapper>
            <HeaderText>&lt; WYNN MUSSELMAN /&gt;</HeaderText>
        </HeaderWrapper>
    )
}

export default Header;