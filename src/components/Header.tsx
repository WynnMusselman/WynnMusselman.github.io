import styled from 'styled-components';


const HeaderWrapper = styled.header`
    color: rgb(226, 96, 187);
    margin-top: 8%;
`

const HeaderText = styled.h1`
    font: calc(2px + 1.8vw) monospace;
`

function Header(){
    return(
        <HeaderWrapper>
            <HeaderText>&lt; WYNN MUSSELMAN /&gt;</HeaderText>
        </HeaderWrapper>
    )
}

export default Header;