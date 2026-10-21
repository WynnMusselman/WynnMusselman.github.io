import {Route, Routes} from "react-router-dom";

export default function Root(){
    return(
        <Routes>
            <Route path = {"/"} element = {<Home />}/>
        </Routes>
    )
}