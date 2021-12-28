import "./top.scss"
import {Code, Email} from "@material-ui/icons"

export default function Top() {
    return (
        <div className="top">
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
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    );
}