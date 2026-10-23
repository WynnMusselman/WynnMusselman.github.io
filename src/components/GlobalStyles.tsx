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


    /* more info when you scroll down */
    main{
        position: relative;

        margin: auto;
        width: 90%;

        min-height: 100vh;
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