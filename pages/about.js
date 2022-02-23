import imageabout from "../public/separatorBlack 1.png";
import Image from "next/image";
import button from "../public/Button.png";

function About() {
    return(
        <div className="aboutme">
            <div className="aboutHeader"><h1>ABOUT ME</h1></div>
            <div className="textabout">
                <p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus.
                        Sed ornare sit amet lorem<br/> sed viverra. In vel urna quis
                        libero viverra facilisis ut ac est.
                </p>
                <span className="imgbutton"><Image src={button}/></span>
                <div className="rasm"><Image src={imageabout}className="rasmm"/></div>
            </div>
            {/* malumotlar/////////// */}
            <div className="kottadiv">
                <div className="ichkidiv">
                    <div className="chap">
                    <h1>DESIGN</h1>
                    <p className="tepadanp">I can design the site based on your needs and suggestions.
                    I can also design the site from scratch and consult you during the job.
                    </p>
                    </div>
                    <div className="ong">
                        <h1>DEVELOPMENT</h1>
                        <p className="tepadanp">I can design the site based on your needs and suggestions.
                            I can also design the site from scratch and consult you during the job.</p>
                    </div>
                </div>
                <div className="ichkidiv2">
                    <div className="textstart">
                        <h2>MAINTENANCE</h2>
                    <p className="tepadanp">I can design the site based on your needs and suggestions.<br/>
                    I can also design the site from scratch and consult you during the job.</p></div>
                    
                </div>
            </div>
            <div className="rasmiconka"><Image src={imageabout}/></div>
        </div>
        
    )
}
export default About;