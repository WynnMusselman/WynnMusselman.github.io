import {Route, Routes} from "react-router-dom";

// components
import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import GlobalStyle from "./components/GlobalStyles.tsx";


// mains
import Home from "./components/mains/home.tsx";
import CampusInvolvement from "./components/mains/campus-involvement.tsx";
import WorkExperience from "./components/mains/work-experience.tsx";
import Gallery from "./components/mains/gallery.tsx";
import Projects from "./components/mains/projects.tsx";



export default function Root(){
    return(
        <>
            {/*global styling for the whole site*/}
            <GlobalStyle/>

            <Nav />
            <Header />

            <Routes>
                <Route path = {"/"} element = {<Home />}/>
                <Route path = {"/work-experience"} element = {<WorkExperience />}/>
                <Route path = {"/campus-involvement"} element = {<CampusInvolvement />}/>
                <Route path = {"/projects"} element = {<Projects />}/>
                <Route path = {"/gallery"} element = {<Gallery />}/>
            </Routes>

            <Footer />
        </>

    )
}