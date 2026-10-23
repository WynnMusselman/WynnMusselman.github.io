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
        font: bold calc(2px + 2.5vw) monospace;
    }

    h4{
        font: calc(2px + 2vw) monospace;
        color: #549555;
        margin-bottom: 2%;
    }

    p{
        color: white;
        font: calc(2px + 1.5vw) monospace;
    }

    img{
        max-width: 20vw;
    }


    /* more info when you scroll down */
    main{
        position: relative;

        margin: auto;
        width: 90%;

        min-height: 100vh;
    }

    @media screen and (max-width: 800px){
        body{
            max-width: 800px;
        }
        
        //adjusting font sizes
        h1{
            font-size: calc(2px + 6vw);
        }
        h2{
            font-size: calc(2px + 4.5vw) ;
            margin-top: 4%;
        }
        h3{
            font-size: calc(2px + 3vw);
        }
        h4{
            font-size: calc(2px + 2.5vw);
        }
        p{
            font-size: calc(2px + 2.3vw);
        }
        
        //increased image size
        img{
            max-width: 80vw;
        }
        
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
    
`

export default function GlobalStyles() {
    return (
        <>
            <GlobalStyle />
        </>
    )
}