import { useState } from 'react';
import styled from "styled-components";
import {Caption} from "./styles/Caption.tsx"


// styles
const BinaryHeaderContainer = styled.div`
    margin-top: 0;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; //horizonal centering
    align-items: center; //vertical centering
`

//  binary numbers
const BinaryWrapper = styled.div`
    position: absolute;
    opacity: 25%;
    z-index: -1;
`

const BinaryLine = styled.p`
    animation: scroll 10s linear infinite;
    white-space: nowrap;
    font: calc(2px + 5vw) monospace;
    //negative animation delay means that the animation is already 5 seconds into playing
    animation-delay: -5s; 
`

// for lines of binary text in background
const BINARY_OPTIONS = ["01010111 01111001 01101110 01101110", "01001101 01110101 01110011 01110011 01100101 01101100 01101101 01100001 01101110", "01001000 01100101 01101100 01101100 01101111 00100001"];
const COLOR_OPTIONS = ["green", "darkgreen", "greenyellow"];
const NUM_LINES = 8;

// picks a random number 0-39
// used for picking a random item from the binary and color lists and to randomize speed of binary lines
function get_rand_number(): number{
    return Math.floor(Math.random() * 20);
}

export default function BinaryHeader(){
    const [binaryLines] = useState(() =>
            // Array.from creates a shallow copy of a different array/array-like object
            Array.from({length: NUM_LINES}, (_, i) =>({
                id: i,
                text: BINARY_OPTIONS[get_rand_number() % BINARY_OPTIONS.length],
                color: COLOR_OPTIONS[get_rand_number() % COLOR_OPTIONS.length],
                top: `${i * 20}vh`,
                duration: `${Math.floor(get_rand_number()) + 20}s`, //randomizes how long it takes each binary line to scroll passed
            }))
    );

    return (
        <>
            {/* header */}
            <BinaryHeaderContainer>
                {/*binary numbers in background*/}
                <BinaryWrapper>
                    {/*creating each item in the object*/}
                    {binaryLines.map((line) =>(
                        <BinaryLine
                            key = {line.id}
                            style={{
                                color: line.color,
                                top: line.top,
                                animationDuration: line.duration,
                                zIndex: -1,
                            }}
                        >
                            {line.text}
                        </BinaryLine>
                    ))}
                </BinaryWrapper>

                {/* intro text */}
                <h1>&lt;h1&gt; Hello World, I'm Wynn! &lt;/h1&gt;</h1>
                <Caption>&lt;p&gt; <i>Thanks for visiting my site :]</i> &lt;/p&gt;</Caption>
            </BinaryHeaderContainer>
        </>
    )
};