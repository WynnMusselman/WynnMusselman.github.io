import { Link } from 'react-router-dom';
import styled from "styled-components";


const NavWrapper = styled.nav `
    background-color: rgba(31, 31, 31, 0.5);
    padding: 2%;

    position: fixed;
    top: 0;
    width: 100%;
    z-index: 11;
`;

const ListWrapper = styled.ul `
    text-align: center;
    padding-left: none;
`;

const ListItem = styled.li`
    display: inline;
    list-style: none;
    padding: 2%;
`;

const LinkText = styled.a`
    opacity: 100%;
    color: #68CDFE;
    font: calc(2px + 1.5vw) monospace;
    text-decoration: none;

    &:hover{
        font-style: italic;
        font-weight: bold;
    }
`



function Nav() {
    return(
        <NavWrapper>
            <ListWrapper>
                <ListItem><LinkText to = "/">Home</LinkText></ListItem>
                <ListItem><LinkText to = "/work-experience">Work Experience</LinkText></ListItem>
                <ListItem><LinkText to = "/campus-involvement">Campus Involvement</LinkText></ListItem>
                <ListItem><LinkText to  = "/projects">Projects</LinkText></ListItem>
                <ListItem><LinkText to  = "/gallery">Gallery</LinkText></ListItem>
            </ListWrapper>

           

         </NavWrapper>
    )
}

export default Nav