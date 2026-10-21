import styled from 'styled-components';

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


const ImageCaption = styled.p`
    color: greenyellow;
    font: calc(2px + 1.4vw) monospace;
    text-align: center;
    padding-top: 0;
`

export default function Gallery(){
    return(
        <>
            <main>
                <h2>&lt;h2&gt; Gallery &lt;/h2&gt;</h2>
                <p className = "caption">&lt;p&gt; Check out some photos that are important to me! &lt;/p&gt;</p>


                {/* first row */}

                <GalleryStyle>
                    <div className = "multi-col">
                        <GalleryItem>
                            <GalleryImage src = {cntImg} alt = "presenting my game"/>
                            <ImageCaption>Presenting a project I made at Code and Tell</ImageCaption>
                        </GalleryItem>

                        <GalleryItem>
                            <GalleryImage src = {hockeyImg} alt = "hockey game with a friend"/>
                            <ImageCaption>BU hockey game!</ImageCaption>
                        </GalleryItem>

                        <GalleryItem>
                            <GalleryImage src = {hackathonImg} alt = "DS+X Hackathon Presentation"/>
                            <ImageCaption>Me presenting my team's project at the DS+X hackathon</ImageCaption>
                        </GalleryItem>
                    </div>


                    {/* second row */}
                    <div className = "multi-col">
                        <GalleryItem>
                            <GalleryImage src = {marmonImg} alt = "Rhett the BU mascot at the Boston Marathon"/>
                            <ImageCaption>My first marathon monday</ImageCaption>
                        </GalleryItem>

                        <GalleryItem>
                            <GalleryImage src = {pizzaImg} alt = "a small pizza"/>
                            <ImageCaption>A pizza I made at Pizza IQ</ImageCaption>
                        </GalleryItem>

                        <GalleryItem>
                            <GalleryImage src = {parisImg} alt = "looking at the eiffel tower at night"/>
                            <ImageCaption>My last night of study abroad in Paris</ImageCaption>
                        </GalleryItem>
                    </div>


                    {/* third row */}
                    <div className = "multi-col">
                        <GalleryItem>
                            <GalleryImage src = {piratesImg} alt = "bobble head I got at a baseball game"/>
                            <ImageCaption>I got a Dr. Robby bobble head at a Pirates game!!</ImageCaption>
                        </GalleryItem>

                        <GalleryItem>
                            <GalleryImage src = {bnbImg} alt = "Presenting Bits & Bytes"/>
                            <ImageCaption>Promoting our free coding lessons to students</ImageCaption>
                        </GalleryItem>

                        <GalleryItem>
                            <GalleryImage src = {gameDevImg} alt = "teaching game development"/>
                            <ImageCaption>Teaching a game development workshop to Girls Who Code members</ImageCaption>
                        </GalleryItem>
                    </div>
                </GalleryStyle>

            </main>
        </>
    )
}

