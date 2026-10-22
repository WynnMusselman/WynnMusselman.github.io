import styled from 'styled-components';


const FooterWrapper = styled.footer`
    padding: 1%;
    margin-top: 1%;
    background-color: rgb(24, 24, 24);
`;

const FooterText = styled.p`
    color: rgb(9, 181, 181);
    font: calc(2px + 1vw) monospace;

    @media screen and (max-width: 750px){
        font-size: calc(2px + 1.5vw);
    }
`

const FooterLink = styled.a`
    color: rgb(9, 181, 181);
    font: calc(2px + 1vw) monospace;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
    
    @media screen and (max-width: 750px){
        font-size: calc(2px + 1.5vw);
    }
`

function Footer(){
    return(
        <FooterWrapper>
            <FooterText> ⋄ <FooterLink href = "https://www.linkedin.com/in/wynn-musselman/" target = "_blank">linkedin.com/in/wynn-musselman/</FooterLink> ⋄ <FooterLink href = "https://github.com/WynnMusselman" target = "_blank">github.com/WynnMusselman</FooterLink> ⋄ <FooterLink href = "https://wynnmusselman.github.io/" target = "_blank">wynnmusselman.github.io</FooterLink> ⋄
            </FooterText>
        </FooterWrapper>
    )
}

export default Footer;