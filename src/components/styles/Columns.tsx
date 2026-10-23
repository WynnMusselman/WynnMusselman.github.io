import styled from "styled-components";

import {Caption} from "./Caption";

// used for pages with a multi-column layout

export const MultiColumnsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1% 0;

    p{
        padding-top: 5%;
        margin: auto;
        text-align: left;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }

`;

export const SmallInnerColumn = styled.div`
    width: 40%;

    img{
        max-width: 25vw;
    }
    
    ${Caption}{
        font: italic calc(2px + 1.1vw) monospace;
        text-align: center;
        padding-top: 0;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        
        img{
            object-fit: cover;
            width: 800px;
            height: 200px;
            max-width: 40vw;
        }
        
        ${Caption}{
            font-size: calc(2px + 2vw)
        }
    }
`;

export const BigInnerColumn = styled.div`
    width: 60%;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;





