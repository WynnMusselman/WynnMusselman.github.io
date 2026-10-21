import {Route, Routes} from "react-router-dom";

// components
import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

// mains
import Home from "./components/mains/home.tsx";
import CampusInvolvement from "./components/mains/campus-involvement.tsx";
import WorkExperience from "./components/mains/projects.tsx";
import Gallery from "./components/mains/gallery.tsx";


export default function Root(){
    return(
        <>
            <Nav />
            <Header />

            <Routes>
                <Route path = {"/"} element = {<Home />}/>
                <Route path = {"/WorkExperience"} element = {<WorkExperience />}/>
                <Route path = {"/CampusInvolvement"} element = {<CampusInvolvement />}/>
                <Route path = {"/Gallery"} element = {<Gallery />}/>
            </Routes>

            <Footer />
        </>

    )
}