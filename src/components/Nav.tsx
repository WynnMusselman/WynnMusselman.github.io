import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavWrapper = styled.nav<{ $open: boolean }> `
    background-color: rgba(24, 24, 24, 0.5);
    padding: 2%;

    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;

    @media screen and (max-width: 750px){

        // display only if user clicks button
        display: ${
            props => (
                props.$open 
                ?
                'flex'
                :
                'none'
            )
        };

        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        background-color: rgba(24, 24, 24, 0.95);
    }
`;

const ListWrapper = styled.ul `
    text-align: center;
`;

const ListItem = styled.li`
    display: inline;
    list-style: none;
    padding: 2%;

    @media screen and (max-width: 750px){
        display: block;
        padding: 10%;
    }
`;

const LinkText = styled(Link)`
    opacity: 100%;
    color: #68CDFE;
    font: calc(2px + 1.5vw) monospace;
    text-decoration: none;

    &:hover{
        font-style: italic;
        font-weight: bold;
    }

    @media screen and (max-width: 750px){
        font: calc(2px + 5vw) monospace;
        margin: 4%;
    }
`

// button
const ButtonWrapper = styled.section`
    display: none;

    width: 100%;
    background-color: rgba(24, 24, 24, 0.9);

    position: fixed;
    left: 0;
    top: 0;
    text-align: left;
    z-index: 11;

    @media screen and (max-width: 750px){
        display: block;
    }
`;


const Button = styled.button`
    // button styling
    background-color: transparent;
    border: none;
    color: white;
    font: bold calc(2px + 8vw) monospace;
    padding: 1%;
`;



function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    
    function openHamburger(){
        setIsOpen(!isOpen);
    }


    return(
        <>
            <ButtonWrapper>
                {/* if the menu is open, have X, otherwise, O */}
                <Button onClick = {openHamburger}>
                    {
                        isOpen
                        ?
                        'X'
                        :
                        '☰'
                    }
                </Button>
            </ButtonWrapper>


            <NavWrapper $open = {isOpen}>
                <ListWrapper>
                    <ListItem><LinkText to = "/">Home</LinkText></ListItem>
                    <ListItem><LinkText to = "/work-experience">Work Experience</LinkText></ListItem>
                    <ListItem><LinkText to = "/campus-involvement">Campus Involvement</LinkText></ListItem>
                    <ListItem><LinkText to  = "/projects">Projects</LinkText></ListItem>
                    <ListItem><LinkText to  = "/gallery">Gallery</LinkText></ListItem>
                </ListWrapper>
            </NavWrapper>
        </>
    )
}

export default Nav