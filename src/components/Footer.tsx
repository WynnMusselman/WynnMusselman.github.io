import styled from 'styled-components';


const FooterWrapper = styled.footer`
    padding: 1%;
    margin-top: 1%;
    background-color: rgb(24, 24, 24);
`;

const FooterText = styled.p`
    color: rgb(9, 181, 181);
    font: calc(2px + 1vw) monospace;
`

function Footer(){
    return(
        <FooterWrapper>
            <FooterText> ⋄ <FooterText as = "a" href = "https://www.linkedin.com/in/wynn-musselman/">linkedin.com/in/wynn-musselman/</FooterText> ⋄ <FooterText as = "a" href = "https://github.com/WynnMusselman">github.com/WynnMusselman</FooterText> ⋄ <FooterText as = "a" href = "https://wynnmusselman.github.io/">wynnmusselman.github.io</FooterText> ⋄
            </FooterText>
        </FooterWrapper>
    )
}

export default Footer;