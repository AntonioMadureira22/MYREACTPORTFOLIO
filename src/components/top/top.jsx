import "./top.scss"
import {Code, Email, GitHub} from "@material-ui/icons"

export default function Top({ menuOpen, setMenuOpen}) {
    <GitHub onClick={event =>  window.location.href='https://github.com/AntonioMadureira22'} />
    return (
        <div className={"top " + (menuOpen && "active")}>
            <div className="wrapper">
               <div className="left">
                    <a href="#intro" className="logo">apex</a>
                    <div className="itemContainer">
                        <Code className="icon"/>
                        <span>+1 203 605 0316</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon"/>
                        <span>antonio.madureira2222@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon"/>
                        <span>AntonioMadureira22</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span>className="line1"</span>
                        <span>className="line2"</span>
                        <span>className="line3"</span>
                    </div>
                </div>
            </div>
        </div>
    );
}