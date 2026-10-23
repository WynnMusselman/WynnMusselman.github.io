import { useMemo } from 'react';
import styled from "styled-components";
import {Caption} from "./styles/Caption.tsx"


// styles
const BinaryHeaderContainer = styled.div`
    margin-top: 0;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* centering text */
    justify-content: center;  /* horizontal */
    align-items: center;      /* vertical */
    /* z-index: 10; */
`

//  binary numbers
const BinaryWrapper = styled.div`
    /* position: relative; */
    position: absolute;
    opacity: 25%;
    z-index: -1;
`

const BinaryLine = styled.p`
    animation: scroll 10s linear infinite;
    /* position: absolute; */
    white-space: nowrap;
    font: calc(2px + 5vw) monospace;
    animation-delay: -50s;
`

// for lines of binary text in background
const BINARY_OPTIONS = ["01010111 01111001 01101110 01101110", "01001101 01110101 01110011 01110011 01100101 01101100 01101101 01100001 01101110", "01001000 01100101 01101100 01101100 01101111 00100001"];
const COLOR_OPTIONS = ["green", "darkgreen", "greenyellow"];
const NUM_LINES = 8;

// picks a random number 0-2 for both the binary string and color option arrays
function get_rand_number(): number{
    return Math.floor(Math.random() * 3);
}

export default function BinaryHeader(){
    const binaryLines = useMemo(
        () =>
            Array.from({length: NUM_LINES}, (_, i) =>({
                id: i,
                text: BINARY_OPTIONS[get_rand_number()],
                color: COLOR_OPTIONS[get_rand_number()],
                top: `${Math.floor(Math.random() * 20)}vh`,
                duration: `${Math.floor(Math.random() * 40) + 20}s`, //randomizes how long it takes each binary line to scroll passed

            })),
        [],
    )

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
    )};