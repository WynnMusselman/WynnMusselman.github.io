import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";



// const toggleHamburger = () =>{
//     setIsOpen(!isOpen);
// }

const NavWrapper = styled.nav<{ $open: boolean }> `

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

    background-color: rgba(24, 24, 24, 0.95);
    padding: 2%;

    // display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
`;

const ListWrapper = styled.ul `
    text-align: left;
`;

const ListItem = styled.li`
    list-style: none;
    padding: 3%;
    text-align: center;
`;

const LinkText = styled(Link)`
    opacity: 100%;
    color: #68CDFE;
    font: calc(2px + 2vw) monospace;
    text-decoration: none;

    &:hover{
        font-style: italic;
        font-weight: bold;
    }
`;


const ButtonWrapper = styled.section`
    width: 100%;
    background-color: rgba(24, 24, 24, 0.95);

    position: fixed;
    z-index: 11;
`;


const Button = styled.button`
    // button styling
    background-color: transparent;
    border: none;
    color: white;
    font: bold calc(2px + 3vw) "Courier New", monospace;

    // position
    left: 0;
   
    
`;



function HamburgerNav() {
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
                        'O'
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

export default HamburgerNav;