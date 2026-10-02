// import { useMemo } from 'react';

import Nav from '../components/Nav.tsx';
import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';

import simcoachImg from '../assets/simcoach-games.jpg';
import pizzaIQImg from '../assets/pizza-iq.jpeg';
import elConnectorIMG from '../assets/el-connector-homepage.png';
import dynseoImg from '../assets/dynseo-metro-view.jpg';

function WorkExperience(){
    return(
        <>
            {/* Nav bar */}
            <Nav/>

            {/* header */}
            <Header/>

            {/* main */}
            <main>
                <h2>&lt;h2&gt; Work Experience &lt;/h2&gt;</h2>

                {/* Dynseo */}
                <div className = "work-experience">
                    <h3>Dynseo</h3>

                    <div className = "multi-col">
                        <div className = "big-inner-col">
                            <p>
                               As an intern at Dynseo, I implemented and revamped website features to 
                               enhance site interface and usability. I used AI agents to help me 
                               modify and create code plugins 
                               for the backend and frontend of the WordPress site based on the needs of 
                               the CEO, 
                               fellow employees, and 20,000+ weekly website visitors. I took initiative 
                               in identifying and resolving bugs and content errors to improve user 
                               experience and promote site accessibility. 
                            </p>
                            <p> 
                                I completed this internship in-person in Dynseo's Paris office. 
                                I navigated a French professional environment while also working on 
                                an intercultural team. I often worked on the English translation of 
                                the website as well as communicated with English speaking clients.
                            </p>
                        </div>

                        <div className = "small-inner-col">
                            <img src = {dynseoImg} alt = "the eiffel tower"/>
                            <p className = "caption">My view on my way to work everyday</p>
                            {/* <p className = "caption">Cranberry Township, PA ⋄ June 2024 - Present</p> */}
                        </div>
                    </div>
                </div>


                {/* EL Connector */}
                <div className = "work-experience">
                    <h3>Boston University College of Arts & Sciences Experiential Learning Connector</h3>

                    <div className = "multi-col">
                        
                        <div className = "small-inner-col">
                            <img src = {elConnectorIMG} alt = "homepage for CAS EL Connector"/>
                            <p className = "caption">The homepage I redesigned</p>
                        </div>

                        <div className = "big-inner-col">
                            <p>
                                While working at EL Connector, I had to think creatively and work within the 
                                limitations of the organization's website. Since EL Connector is an organization
                                within BU, they had to stick to WordPress and BU's official WordPress theme. 
                                This meant that many of the improvements I wanted to make coming into the 
                                internship had to be scrapped. Nonetheless, I coordinated closely with director
                                of EL Connector to broaden 
                                their presence across online platforms, improve user experience, and connect 
                                more students with experiential learning opportunities. 
                            </p>
                            <p>
                                I updated site information, redesigned photos and the header banner for the homepage, 
                                and made descriptions of programs offered more concise, yet informative.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Pizza IQ */}
                <div className = "work-experience">
                    <h3>Pizza IQ</h3>

                    <div className = "multi-col">
                        <div className = "big-inner-col">
                            <p>
                                Once you've prepared 100+ orders on a busy Friday night in the kitchen 
                                of a pizza place, you can do anything. While working at Pizza IQ may not
                                always be the most stress free experience, I really enjoy working there. 
                                Pizza IQ has given me the ability to stay calm in a high-stress, team 
                                environment while paying close attention to detail and enuring all products
                                are made to perfection
                            </p>
                            <p>
                                As an employee at Pizza IQ, I prepare 
                                food, take orders, clean, and do preparatory work while communicating with 
                                management and team members. As a 
                                cashier, I handle cash and card transactions while resolving any customer 
                                concerns. When working in the kitchen, I prepare food to the restaurant’s 
                                standards and often teach new employees how to complete tasks.
                            </p>
                        </div>

                        <div className = "small-inner-col">
                            <img src = {pizzaIQImg} alt = "me wearing the Pizza IQ uniform"/>
                            <p className = "caption">Trying on the uniform at my first shift</p>
                            {/* <p className = "caption">Cranberry Township, PA ⋄ June 2024 - Present</p> */}
                        </div>
                    </div>
                </div>


                {/* simcoach*/}
                <div className = "work-experience">
                    <h3>Simcoach Games</h3>

                    <div className = "multi-col">
                        <div className = "small-inner-col">
                            <img src = {simcoachImg} alt = "me creating a video game"/>
                            <p className = "caption">My first time making a game!</p>
                            {/* <p className = "caption">Pittsburgh, PA ⋄ June 2023 - July 2023</p> */}
                        </div>

                        <div className = "big-inner-col">
                            <p>
                                As a Summer Apprentice in the Simcoach Games’ 2023 Summer Apprenticeship in Game
                                Design and Development program, I successfully delivered two transformational
                                game prototypes to the company with two different project teams. These prototypes 
                                focused on building functional skills for the neurodiverse – Libble Rabble: 
                                Abduction and Brush Rush. I focused on the roles of developer and artist by utilizing
                                game development tools like Unity and C# as well using Krita to create assets for the
                                games.
                            </p>
                            <p>
                                I am very grateful I had the opportunity to work at Simcoach Games! 
                                I got to develop two games with my team members and 
                                present them to my fellow apprentices and executives at the company. 
                                It was incredible to get so much insight into the game development
                                industry as a high schooler.
                            </p>
                        </div>
                    </div>
                </div>

            </main>

            {/* footer */}
            <Footer/>
        </>
    )
}

export default WorkExperience;