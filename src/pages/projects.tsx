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
                        I thought I'd finally create my own website. It's still a work in progress, 
                        but I hope you've liked it so far! One of the most challenging aspect of the 
                        site's creation has been the design. I wanted to do something fun and creative, 
                        so I took some inspiration from VSCode and decided to borrow its color palette. 
                    </p>
                    <p>
                        As I continue to improve my web development and design skills, I will keep
                        making additions to the site and improve it. It has been a lot of fun to 
                        create so far :)
                    </p>
                </div>


                {/* website */}
                <div className = "project-section">
                    <h3><a href = "https://github.com/WynnMusselman/OnGuard-Ready-Fence">On Guard... Ready? Fencer</a></h3>
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
            </main>

            {/* footer */}
            <Footer/>
        </>
    )
}

export default WorkExperience;