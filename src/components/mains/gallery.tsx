import styled from 'styled-components';
import {Caption} from "../styles/Caption.tsx"
import {MultiColumnsWrapper} from "../styles/Columns.tsx";



import hackathonImg from '../../assets/hackathon-dsx.jpeg';
import pizzaImg from '../../assets/pizza.jpg';
import hockeyImg from '../../assets/hockey.jpg'
import marmonImg from '../../assets/marmon.jpg';
import parisImg from '../../assets/paris.jpg';
import piratesImg from '../../assets/pirates-game.jpg';
import cntImg from '../../assets/code-and-tell.jpeg';
import bnbImg from '../../assets/BnB.jpg';
import gameDevImg from '../../assets/game-dev.jpg';

/* for gallery */
const GalleryStyle = styled.div `
    margin: 5% 0;
`
    
const GalleryItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3%;
    text-align: center;

    width: 50%;

    /* fade in animation on each row of images */
    animation: fadeIn;
    //animation-timeline: view();
`

const GalleryImage = styled.img `
    /* max-width: 20vw; */

    width: 100%;
    height: 100%;
    object-fit: contain;
`

export default function Gallery(){
    return(
        <>
            <main>
                <title>Gallery | Wynn Musselman</title>

                <h2>&lt;h2&gt; Gallery &lt;/h2&gt;</h2>
                <p className = "caption">&lt;p&gt; Check out some photos that are important to me! &lt;/p&gt;</p>


                {/* first row */}
                <GalleryStyle>
                    <MultiColumnsWrapper>

                        {/*Code & Tell*/}
                        <GalleryItem>
                            <GalleryImage src = {cntImg} alt = "presenting my game"/>
                            <Caption>Presenting a project I made at Code and Tell</Caption>
                        </GalleryItem>

                        {/*Hockey*/}
                        <GalleryItem>
                            <GalleryImage src = {hockeyImg} alt = "hockey game with a friend"/>
                            <Caption>BU hockey game!</Caption>
                        </GalleryItem>

                        {/*DS+X*/}
                        <GalleryItem>
                            <GalleryImage src = {hackathonImg} alt = "DS+X Hackathon Presentation"/>
                            <Caption>Me presenting my team's project at the DS+X hackathon</Caption>
                        </GalleryItem>

                    </MultiColumnsWrapper>


                    {/* second row */}
                    <MultiColumnsWrapper>

                        {/*MarMon*/}
                        <GalleryItem>
                            <GalleryImage src = {marmonImg} alt = "Rhett the BU mascot at the Boston Marathon"/>
                            <Caption>My first marathon monday</Caption>
                        </GalleryItem>

                        {/*Pizza*/}
                        <GalleryItem>
                            <GalleryImage src = {pizzaImg} alt = "a small pizza"/>
                            <Caption>A pizza I made at Pizza IQ</Caption>
                        </GalleryItem>

                        {/*Paris*/}
                        <GalleryItem>
                            <GalleryImage src = {parisImg} alt = "looking at the eiffel tower at night"/>
                            <Caption>My last night of study abroad in Paris</Caption>
                        </GalleryItem>

                    </MultiColumnsWrapper>


                    {/* third row */}
                    <MultiColumnsWrapper>

                        {/*Pirates*/}
                        <GalleryItem>
                            <GalleryImage src = {piratesImg} alt = "bobble head I got at a baseball game"/>
                            <Caption>I got a Dr. Robby bobble head at a Pirates game!!</Caption>
                        </GalleryItem>

                        {/*Bits & Bytes*/}
                        <GalleryItem>
                            <GalleryImage src = {bnbImg} alt = "Presenting Bits & Bytes"/>
                            <Caption>Promoting our free coding lessons to students</Caption>
                        </GalleryItem>

                        {/*Game Dev*/}
                        <GalleryItem>
                            <GalleryImage src = {gameDevImg} alt = "teaching game development"/>
                            <Caption>Teaching a game development workshop to Girls Who Code members</Caption>
                        </GalleryItem>
                    </MultiColumnsWrapper>

                </GalleryStyle>

            </main>
        </>
    )
}

