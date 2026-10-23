import styled from "styled-components";
import matchaImg from '../../assets/matcha-img-of-me.jpg';
import {Caption} from "../styles/Caption.tsx"
import {MultiColumnsWrapper, SmallInnerColumn, BigInnerColumn} from "../styles/Columns.tsx";


const HomeWrapper = styled.main `
    /* fade in animation on home page main content */
    animation: fadeIn;
    //animation-timeline: view();
`

export default function Home(){

    return (
        <>
            <title>Home | Wynn Musselman</title>

            <HomeWrapper>
                <h2>&lt;h2&gt; About Me &lt;/h2&gt;</h2>

                {/* <!-- two column layout for img and text --> */}
                <MultiColumnsWrapper>

                    <SmallInnerColumn>
                        <img src = {matchaImg} alt = "Wynn Musselman"/>
                        <Caption>Picture of me with some matcha!</Caption>
                    </SmallInnerColumn>

                    <BigInnerColumn>
                        <p>
                            My name is Wynn Musselman! I'm from the Pittsburgh area, but I go to school
                            at Boston University. I am a junior studying Computer Science
                            with a minor in Political Science.
                        </p>
                        <p>
                            This semester, I am on the E-Board for BU's Girls Who Code chapter and I teach
                            web development lessons for the Hack4Impact chapter. Additionally, I am a
                            community ambassador for Spark! and a grader for a web development class. If you
                            want to learn more about my involvement on campus or what else I am up to,
                            click through my site!
                        </p>
                    </BigInnerColumn>

                </MultiColumnsWrapper>
            </HomeWrapper>
        </>
    )
}

