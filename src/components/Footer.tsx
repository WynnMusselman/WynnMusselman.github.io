import styled from 'styled-components';


const FooterWrapper = styled.footer`
    padding: 1%;
    margin-top: 1%;
    background-color: #181818;
`;

const FooterText = styled.p`
    color: rgb(9, 181, 181);
    font: calc(2px + 1vw) monospace;
`

function Footer(){
    return(
        <FooterWrapper>
            <FooterText> ⋄ <FooterText as = "a" href = "https://www.linkedin.com/in/wynn-musselman/">My LinkedIn</FooterText> ⋄ <FooterText as = "a" href = "https://github.com/WynnMusselman">My GitHub</FooterText> ⋄ <FooterText as = "a" href = "https://wynnmusselman.github.io/">My Website</FooterText> ⋄
            </FooterText>
        </FooterWrapper>
    )
}

export default Footer;