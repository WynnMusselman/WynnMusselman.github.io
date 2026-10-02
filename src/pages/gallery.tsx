import Nav from '../components/Nav.tsx';
import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';

import hackathonImg from '../assets/hackathon-dsx.jpeg';
import pizzaImg from '../assets/pizza.jpg';
import hockeyImg from '../assets/hockey.jpg'
import marmonImg from '../assets/marmon.jpg';
import parisImg from '../assets/paris.jpg';
import piratesImg from '../assets/pirates-game.jpg';
import cntImg from '../assets/code-and-tell.jpeg';
import bnbImg from '../assets/BnB.jpg';
import gameDevImg from '../assets/game-dev.jpg';



function Gallery(){
    return(
        <>
            {/* nav */}
            <Nav/>

            {/* header */}
            <Header />

            {/* main */}
            <main>
                <h2>&lt;h2&gt; Gallery &lt;/h2&gt;</h2>
                <p className = "caption">&lt;p&gt; Check out some photos that are important to me! &lt;/p&gt;</p>


                {/* first row */}

                <div id = "gallery">
                    <div className = "multi-col">
                        <div className = "img-layout">
                            <img src = {cntImg} alt = "presenting my game"/>
                            <p className = "caption">Presenting a project I made at Code and Tell</p>
                        </div>

                        <div className = "img-layout">
                            <img src = {hockeyImg} alt = "hockey game with a friend"/>
                            <p className = "caption">BU hockey game!</p>
                        </div>

                        <div className = "img-layout">
                            <img src = {hackathonImg} alt = "DS+X Hackathon Presentation"/>
                            <p className = "caption">Me presenting my team's project at the DS+X hackathon</p>
                        </div>
                    </div>


                    {/* second row */}
                    <div className = "multi-col">
                        <div className = "img-layout">
                            <img src = {marmonImg} alt = "Rhett the BU mascot at the Boston Marathon"/>
                            <p className = "caption">My first marathon monday</p>
                        </div>

                        <div className = "img-layout">
                            <img src = {pizzaImg} alt = "a small pizza"/>
                            <p className = "caption">A pizza I made at Pizza IQ</p>
                        </div>

                        <div className = "img-layout">
                            <img src = {parisImg} alt = "looking at the eiffel tower at night"/>
                            <p className = "caption">My last night of study abroad in Paris</p>
                        </div>
                    </div>


                    {/* third row */}
                    <div className = "multi-col">
                        <div className = "img-layout">
                            <img src = {piratesImg} alt = "bobble head I got at a baseball game"/>
                            <p className = "caption">I got a Dr. Robby bobble head at a Pirates game!!</p>
                        </div>

                        <div className = "img-layout">
                            <img src = {bnbImg} alt = "Presenting Bits & Bytes"/>
                            <p className = "caption">Promoting our free coding lessons to students</p>
                        </div>

                        <div className = "img-layout">
                            <img src = {gameDevImg} alt = "teaching game development"/>
                            <p className = "caption">Teaching a game development workshop to Girls Who Code members</p>
                        </div>
                    </div>
                </div>

            </main>

            {/* footer */}
            <Footer/>
        </>
    )
}

export default Gallery;