import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/work-experience">Work Experience</Link></li>
                    <li><Link to = "/campus-involvement">Campus Involvement</Link></li>
                    <li><Link to  = "/projects">Projects</Link></li>
                    <li><Link to  = "/gallery">Gallery</Link></li>
                </ul>
            </nav>
    )
}

export default Nav