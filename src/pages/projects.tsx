// import { useMemo } from 'react';

import Nav from '../components/Nav.tsx';
import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';

function WorkExperience(){
    return(
        <>
            {/* Nav bar */}
            <Nav/>

            {/* header */}
            <Header/>

            {/* main */}
            <main>
                <h2>&lt;h2&gt; Projects &lt;/h2&gt;</h2>

                {/* website */}
                <div className = "project-section">
                    <h3><a href = "https://github.com/WynnMusselman/WynnMusselman.github.io">My Personal Website</a></h3>
                    <h4>September 2026 - Present | TypeScript, React, Vite</h4>
                    <p>
                        I have been learning and teaching web development skills for awhile, so 
                        I thought I'd finally create my own personal portfolio. It's still a work in progress, 
                        but I hope you've liked it so far! One of the most challenging aspect of the 
                        site's creation has been the design. I wanted to do something fun and creative, 
                        so I took some inspiration from VSCode and decided to borrow its color palette. 
                    </p>
                    <p>
                        As I continue to improve my web development and design skills, I will keep
                        making additions to the site. It has been a lot of fun to 
                        create so far :)
                    </p>
                </div>


                {/* fencing */}
                <div className = "project-section">
                    <h3><a href = "https://github.com/WynnMusselman/OnGuard-Ready-Fence">On Guard... Ready? Fence!</a></h3>
                    <h4>November 2025 - September 2026 | HTML, CSS, JavaScript</h4>
                    <p>
                        In high school, I was the president of my school's fencing club. As president, 
                        I often had the opportunity to introduce new fencers to the sport and teach 
                        them new skills. I really enjoyed teaching, so I decided to test my knowledge
                        and create a website all about teaching someone the basics of fencing!
                    </p>
                    <p>
                        I initially created this website in Winter of 2025, but I recently decided to clean
                        up some of the code. I am planning on transistioning the site to a React framework
                        soon and improving upon the current comment section feature.
                    </p>
                    <p>
                        The site currently features a responsive layout, a minigame, quizzes, 
                        and localStorage comments.
                    </p>
                </div>


                {/* math club */}
                <div className = "project-section">
                    <h3><a href = "https://github.com/WynnMusselman/Society-of-Math-Club">Society of Math Club</a></h3>
                    <h4>August 2026 - September 2026 | HTML, CSS</h4>
                    <p>
                        The Society of Math Club's website was initially created by someone who did not know
                        how to code. This resulted in some issues with the design and difficult to read code. 
                        I rewrote basically all of the HTML and CSS to improve readability, design, and 
                        maintainability. I decided to stick with a simple HTML and CSS framework so that
                        the code can easily be changed in the future, even by someone who does not know
                        how to code well. I also added many comments for this reason.
                    </p>
                    <p>
                        While I did change some aspects of the design, I worked with the president of the 
                        club to make sure her vision for the site was still kept intact.
                    </p>
                </div>


                {/* monkeys game */}
                <div className = "project-section">
                    <h3><a href = "https://github.com/WynnMusselman/Monkeys-Jumping-on-the-Bed-Simulator">Monkeys Jumping on the Bed Simulator</a></h3>
                    <h4>July 2026 - August 2026 | Godot, GDScript, Asesprite</h4>
                    <p>
                        I created a game based around the idea of monkeys jumping on the bed using Godot. 
                        Instead of the monkeys falling though, the player must click the monkeys to throw 
                        them off the bed. The levels increase in difficulty overtime as more monkeys spawn.
                        The different monkey types have an inheritance-bsaed architecture with
                        random spawn rates.
                    </p>
                    <p>
                        I created all assets for the game myself using Asesprite.
                    </p>

                </div>


                {/* piano */}
                <div className = "project-section">
                    <h3><a href = "https://github.com/WynnMusselman/MyJavaPiano">My Java Piano</a></h3>
                    <h4>November 2025 | Java, Krita</h4>
                    <p>
                        I created a desktop app that allows you to play piano! There are also buttons that 
                        play music or sound effects.
                    </p>
                    <p>
                        My Java Piano was made entirely in vanilla Java with original artwork. I used
                        a Java Swing framework to incorporate the visual features. 
                    </p>

                </div>


                {/* piano */}
                <div className = "project-section">
                    <h3><a href = "https://github.com/WynnMusselman/LetsDressUp">Let's Dress Up</a></h3>
                    <h4>August 2025 | Java, Krita</h4>
                    <p>
                        Let's Dress Up was one of the first video games I made on my own. I decided that,
                        instead of using a game engine, I would challenge myself and make the game
                        entirely in Java. The game was created in vanilla Java using a Java Swing 
                        and object oriented programming framework,
                        featuring all original artwork. I implemented layered graphics for clothing items, 
                        background audio, and event listeners for changed in game state.
                    </p>
                    <p>
                        I presented this game at <a href = "https://www.bu.edu/cds-faculty/2025/12/12/code-tell-showcase/">Spark!'s Code & Tell</a> in
                        November of 2025. At first, I was really nervous to present since all of the 
                        other projects of the night were much more different than mine. I decided to have 
                        confidence and proudly presented my game, despite my fears. The audience seemed 
                        to really like it! 
                    </p>
                    <p>
                        As a Computer Science major, I often find myself lacking time to create things I 
                        enjoy. Sometimes, it doesn't feel like making fun games or projects is worth it 
                        because no one will take them seriously. Making this project and attending Code & Tell 
                        validated my craving to create projects that I really enjoy. I realized that people 
                        will appreciate what I build and can see my passion for creating.
                    </p>

                </div>
            </main>

            {/* footer */}
            <Footer/>
        </>
    )
}

export default WorkExperience;