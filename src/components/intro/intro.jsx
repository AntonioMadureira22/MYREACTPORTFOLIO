import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            backDelay: 1500,
            backSpeed: 50,
            showCursor: true,
            strings: ['Software Engineer', "Content Creator" ],
        });
    
    }, []);
    return (
        <div className= "Intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="images/antonio.jpg" alt="Antonio" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello My Name Is,</h2>
                    <h1>Antonio Madureira</h1>
                    <h3> Full-Stack Developer <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="images/down-arrow.png" alt="scroll"></img>
                </a>
            </div>
        </div>
    )
}