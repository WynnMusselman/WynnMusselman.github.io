import styled from "styled-components";
import matchaImg from '../../assets/matcha-img-of-me.JPG';
import BinaryHeader from "../../components/BinaryHeader";

const HomeWrapper = styled.main `
    /* fade in animation on home page main content */
    animation: fadeIn;
    //animation-timeline: view();
`

export default function Home(){

    return (
        <>
            {/*header for home page*/}
            <BinaryHeader />

            <HomeWrapper>
                <h2>&lt;h2&gt; About Me &lt;/h2&gt;</h2>

                {/* <!-- two column layout for img and text --> */}
                <div className = "multi-col">

                    <div className = "small-inner-col">
                        <img src = {matchaImg} alt = "Wynn Musselman"/>
                        <p className = "caption">↑ Picture of me with some matcha!</p>

                    </div>

                    <div className = "big-inner-col">

                        <p>
                            My name is Wynn Musselman! I'm from the Pittsburgh area, but I go to school
                            at Boston University. I am a junior studying Computer Science
                            with a minor in Political Science.
                        </p>
                        <p>
                            This semester, I am on the e-board for BU's Girls Who Code chapter and I teach
                            web development lessons for the Hack4Impact chapter. Additionally, I am a
                            community ambassador for Spark! and a grader for a web development class. If you
                            want to learn more about my involvement on campus or what else I am up to,
                            click through my site!
                        </p>
                    </div>
                </div>
            </HomeWrapper>
        </>
    )
}

