import {Route, Routes} from "react-router-dom";

// components
import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
import BinaryHeader from "./components/BinaryHeader.tsx"
import Footer from "./components/Footer.tsx";
import GlobalStyle from "./components/GlobalStyles.tsx";


// mains
import Home from "./components/mains/Home.tsx";
import CampusInvolvement from "./components/mains/CampusInvolvement.tsx";
import WorkExperience from "./components/mains/WorkExperience.tsx";
import Gallery from "./components/mains/Gallery.tsx";
import Projects from "./components/mains/Projects.tsx";



export default function Root(){
    return(
        <>
            {/*global styling for the whole site*/}
            <GlobalStyle/>

            <Nav />


            <Routes>
                <Route path = {"/"} element = {
                        <>
                            <BinaryHeader />
                            <Home />
                        </>
                    }
                />
                <Route path = {"/work-experience"} element = {
                        <>
                            <Header />
                            <WorkExperience />
                        </>
                    }
                />
                <Route path = {"/campus-involvement"} element = {
                        <>
                            <Header />
                            <CampusInvolvement />
                        </>
                   }
                />
                <Route path = {"/projects"} element = {
                       <>
                           <Header />
                           <Projects />
                       </>
                   }
                />
                <Route path = {"/gallery"} element = {
                        <>
                            <Header />
                            <Gallery />
                        </>
                    }
                />
            </Routes>

            <Footer />
        </>

    )
}