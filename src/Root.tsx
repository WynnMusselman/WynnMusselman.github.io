import {Route, Routes} from "react-router-dom";

// mains
import Home from "./components/mains/home.tsx";

// components
import Nav from "./components/Nav.tsx"
import Header from "./components/Header.tsx"

export default function Root(){
    return(
        <>
            <Nav />
            <Header />

            <Routes>
                <Route path = {"/"} element = {<Home />}/>
            </Routes>
        </>

    )
}