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
            </main>

            {/* footer */}
            <Footer/>
        </>
    )
}

export default CampusInvolvement;