// import { useMemo } from 'react';

import Nav from '../components/Nav.tsx';
import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';

function CampusInvolvement(){
    return(
        <>
            {/* Nav bar */}
            <Nav/>

            {/* header */}
            <Header/>

            {/* main */}
            <main>
                <h2>&lt;h2&gt; Campus Involvement &lt;/h2&gt;</h2>
                
                {/* H4I */}
                <div className = "campus-experience">
                    <h3>Hack4Impact</h3>
                    <div className = "experience-item">
                        <h4><b>Junior Development Team Lead</b> | January 2026 - Present</h4>
                        <p>
                            As a junior development team lead for Boston University’s 
                            Hack4Impact club, I design and teach fundamental lessons on 
                            HTML, CSS, and Javascript to BU students. I collaborate with 
                            fellow JDT leads on lesson plans to ensure information is accurate 
                            and presented in the most comprehensive way. Lessons 
                            are presented in a live coding where I code the website from 
                            scratch as students follow along and ask questions.
                        </p>
                    </div>
                </div>

                {/* GWC */}
                <div className = "campus-experience">
                    <h3>Girls Who Code</h3>

                    {/* Bytes */}
                    <div className = "experience-item">
                        <h4><b>Bytes Lead</b> | January 2026 - Present</h4>
                        <p>
                            I lead the Bytes program for Bits and Bytes at Boston University’s Girls 
                            Who Code chapter. Bits and Bytes is a six week free coding program where 
                            students in grades 3-12 are taught the fundamentals of computer science. 
                            The Bits lead and I interview, train, and lead 14 undergraduate volunteers 
                            to develop and teach the lesson curriculum. We also advertise our lessons to
                             students through social media, email, and in-person promotion. We recruited 
                             90+ students to participate in our lessons for Spring 2026, which is more 
                             than triple the amount from the previous semester. I attend each Bytes 
                             meeting to ensure that our lessons for 6-12 grade students run smoothly. 
                        </p>
                        <p>
                            Additionally, I collaborate with my fellow board members to plan events, 
                            lead meetings, and teach workshops. Last semester, I co-led a game 
                            development workshop where we taught beginners how to create a simple 
                            game using Python and PyGame. I developed the workshop along with another 
                            member of the GWC eboard and the president of the Game Development Club at 
                            BU.
                        </p>
                    </div>

                    {/* Facilitator */}
                    <div className = "experience-item">
                        <h4><b>Bytes Facilitator</b> | October 2025 - November 2025</h4>
                        <p>
                            As a Bytes facilitator for Boston University's Girls Who Code program, I 
                            taught middle school and high school students Python during weekly meetings. 
                            I collaborated with my fellow facilitators to create lessons on fundamental 
                            programming concepts such as recursion, loops, and data types. I presented
                            my lessons to students while asking challenging questions and having them 
                            follow along during live coding demonstrations to keep them engaged.
                        </p>
                    </div>
                </div>



                {/* Game Dev */}
                <div className = "campus-experience">
                    <h3>Game Development Club</h3>
                    <div className = "experience-item">
                        <h4><b>Member</b> | September 2025 - Present</h4>
                        <p>
                            As a member of the Game Development Club, I use game development
                            tools such as Godot, GDScript, and Asesprite to create games. I have created games
                            during workshops such as 
                            a Flappy Bird inspired project. I have also created pixel art for a game 
                            the club was developing together. 
                        </p>
                        <p>
                            Using the skills I gained as a member of the club, I have begun making some of my
                            own video games using Godot, Python, and Java.
                        </p>
                    </div>
                </div>
                

            </main>

            {/* footer */}
            <Footer/>
        </>
    )
}

export default CampusInvolvement;