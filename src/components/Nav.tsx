import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "./pages/work-experience.tsx">Work Experience</Link></li>
                    <li><Link to = "">Campus Involvement</Link></li>
                    <li><Link to  = "">Projects</Link></li>
                    <li><Link to  = "">Gallery</Link></li>
                </ul>
            </nav>
    )
}

export default Nav