import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }

    body{
        text-align: center;
        background-color: #1F1F1F;

        /* makes it so user cant scroll to the side of the page. page is fixed width */
        max-width: 100%;
        overflow-x: hidden;

        min-height: 100vh;
    }

    /* text */

    h1{
        color: white;
        font: calc(2px + 5vw) monospace;
    }

    h2{
        color: white;
        font: calc(2px + 4vw) monospace;
        margin-top: 4%;
    }

    h3{
        color: white;
        font: bold calc(2px + 2vw) monospace;
    }

    h4{
        font: calc(2px + 1.4vw) monospace;
        color: #549555;
        margin: 1%;
    }

    p{
        color: white;
        font: calc(2px + 1.5vw) monospace;
    }

    .caption{
        color: greenyellow;
        font: calc(2px + 1.4vw) monospace;
        text-align: center;
        padding-top: 0;
    }


    /* more info when you scroll down */
    main{
        position: relative;

        margin: auto;
        width: 90%;

        min-height: 100vh;
    }

    /* for multi column layout */
    .multi-col{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1% 0;
    }

    /* home page */
    .small-inner-col{
        width: 40%;
    }

    .big-inner-col{
        width: 60%;
    }

    .small-inner-col img{
        max-width: 25vw;
    }

    .multi-col p{
        padding-top: 5%;
        margin: auto;
        text-align: left;
    }

    .multi-col .small-inner-col .caption{
        color: greenyellow;
        font: italic calc(2px + 1.1vw) monospace;
        text-align: center;
        padding-top: 0;
    }


    /* animation */

    @keyframes scroll{
        0%{
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    /* responsive layout when on mobile */
    @media screen and (max-width: 800px){

        /* nav a{
            font: calc(2px + 2vw);
           
        } */

        /* for two column layout */
        .multi-col{
            flex-direction: column;
        }

        .big-inner-col{
            width: 100%;
        }

        .small-inner-col{
            width: 100%;
        }

        .small-inner-col img{
            object-fit: cover;
            width: 400px;
            height: 150px;
        }

        .two-col p{
            padding-top: 5%;
            margin: auto;
            text-align: left;
        }

        .two-col .small-inner-col .img-caption{
            color: greenyellow;
            font: italic calc(2px + 1.1vw) monospace;
            text-align: center;
            padding-top: 0;
        }
    }

    /* @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      } */
`

export default function GlobalStyles() {
    return (
        <>
            <GlobalStyle />
        </>
    )
}