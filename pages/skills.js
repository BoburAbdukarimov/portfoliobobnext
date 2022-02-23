import htmll from "../public/Group 12.png"
import csss from "../public/Group 13.png"
import sass from "../public/Vector.png"
import javasc from "../public/Group.png"
import reactjs from "../public/Group 14.png"
import bootst from "../public/bootstrap.png"
import git from "../public/git.png"
import figma from "../public/figma.png"
import Image from "next/image"
import node from "../public/Group (1).png"
import mysql from "../public/Vector (1).png"
import mango from "../public/Vector (2).png"
import typescript from "../public/Group (2).png"
import english from "../public/image 18.png"
import ukraina from "../public/image 19.png"
import cdastur from "../public/image 17.png"
import cplus from "../public/image 20.png"

function Skills() {
    return(
        <div className="Skills">
                <div className="aboutHeader"> <h1>SKILLS</h1></div>
                <div className="skillscontent">
                    <div className="title">
                        <h2>USING NOW:</h2>
                    </div>
                    <div className="pngrasmkotta">
                    <div className="pngrasmlar">
                        <Image src={htmll}  />
                        <p>Html5</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={csss}  />
                        <p>css</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={sass}  />
                        <p>Sass</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={javasc}  />
                        <p>java script</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={reactjs}  />
                        <p>React js</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={bootst}  />
                        <p>bootstrap</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={git}  />
                        <p>git</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={figma}  />
                        <p>figma</p>
                    </div>
                    </div> 
                    {/* ///////////// */}
                    <div className="title2">
                        <h2>LEARNING:</h2>
                    </div>
                    <div className="pngrasmkotta">
                    <div className="pngrasmlar">
                        <Image src={node}  />
                        <p>Node js</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={mysql}  />
                        <p>My sql</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={mango}  />
                        <p>Mango db</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={typescript}  />
                        <p>Type script</p>
                    </div>
                    </div>
                    
                    {/* /////////////// */}
                    <div className="title2">
                        <h2>OTHER SKILLS:</h2>
                    </div>
                    <div className="pngrasmkotta">
                    <div className="pngrasmlar">
                        <Image src={english}  />
                        <p>ANGIELSKI C1/C2</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={ukraina}  />
                        <p>HISZPAŃSKI B1/B2</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={cdastur}  />
                        <p>C</p>
                    </div>
                    <div className="pngrasmlar">
                    <Image src={cplus}  />
                        <p>C++</p>
                    </div>
                
                </div>
        </div>
        </div>
    )
}
export default Skills;