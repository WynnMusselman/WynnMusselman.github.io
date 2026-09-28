import Nav from '../components/Nav.tsx';
import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';

import matchaImg from '../assets/matcha-img-of-me.jpg';

function Gallery(){
    return(
        <>
            {/* nav */}
            <Nav/>

            {/* header */}
            <Header />

            {/* main */}
            <main>
                <h2>&lt;h2&gt; Gallery &lt;/h2&gt;</h2>
                <p className = "caption">&lt;p&gt; Check out some photos that are important to me! &lt;/p&gt;</p>

                <div className = "multi-col">
                    <div className = "img-layout">
                        <img src = {matchaImg} alt = ""/>
                        <p className = "caption">img 1</p>
                    </div>

                    <div className = "img-layout">
                        <img src = {matchaImg} alt = ""/>
                        <p className = "caption">img 1</p>
                    </div>

                    <div className = "img-layout">
                        <img src = {matchaImg} alt = ""/>
                        <p className = "caption">img 1</p>
                    </div>
                </div>

                <div className = "multi-col">
                    <div className = "img-layout">
                        <img src = {matchaImg} alt = ""/>
                        <p className = "caption">img 1</p>
                    </div>

                    <div className = "img-layout">
                        <img src = {matchaImg} alt = ""/>
                        <p className = "caption">img 1</p>
                    </div>

                    <div className = "img-layout">
                        <img src = {matchaImg} alt = ""/>
                        <p className = "caption">img 1</p>
                    </div>
                </div>
            </main>

            {/* footer */}
            <Footer/>
        </>
    )
}

export default Gallery;